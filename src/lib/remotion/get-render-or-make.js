import { getFunctions, renderMediaOnLambda } from "@remotion/lambda";
import {
  getRender,
  lockRender,
  saveRender,
  updateRenderWithFinality,
} from "lib/db/renders";
import { getRenderProgressWithFinality } from "./get-render-progress-with-finality";
import { getRandomRegion } from "deploy/regions";

export const getRenderOrMake = async ({ inputId, inputProps, compId }) => {
  const cache = await getRender(inputId);
  let _renderId = cache?.renderId ?? null;
  let _region = cache?.region ?? null;
  try {
    if (cache) {
      const progress = await getRenderProgressWithFinality(cache);
      return progress;
    }
    const region = getRandomRegion();
    const account = 1;

    const [first] = await getFunctions({
      compatibleOnly: true,
      region,
    });
    console.log(`InputId=${inputId} Account=${account} Region=${region}`);
    await lockRender(region, inputId, account, first.functionName);

    const { renderId: inputId, bucketName } = await renderMediaOnLambda({
      region: region,
      functionName: first.functionName,
      serveUrl: process.env.REMOTION_SITE_ID,
      composition: compId,
      inputProps,
      codec: "h264-mkv",
      imageFormat: "jpeg",
      maxRetries: 1,
      framesPerLambda: 80,
      privacy: "public",
    });
    _renderId = inputId;
    _region = region;
    await saveRender({
      region: region,
      bucketName,
      inputId,
      inputId,
    });
    const render = await getRender(inputId);
    if (!render) {
      throw new Error(`Unable to fetch render for ${inputId}`);
    }
    const progress = await getRenderProgressWithFinality(render, account);
    return progress;
  } catch (err) {
    console.log(`Failed to render video for inputId ${inputId}`, err.stack);
    if (_renderId && _region) {
      await updateRenderWithFinality(_renderId, inputId, _region, {
        type: "error",
        errors: err.stack,
      });
    }
    return {
      finality: {
        type: "error",
        errors: err.stack,
      },
      type: "finality",
    };
  }
};

export const getFinality = (renderProgress) => {
  if (renderProgress.outputFile) {
    return {
      type: "success",
      url: renderProgress.outputFile,
    };
  }
  if (renderProgress.fatalErrorEncountered) {
    return {
      type: "error",
      errors: renderProgress.errors[0].stack,
    };
  }
  return null;
};
