import { getFunctions, renderMediaOnLambda } from "@remotion/lambda";
import {
  getRender,
  lockRender,
  saveRender,
  updateRenderWithFinality,
} from "lib/db/renders";
import { getRenderProgressWithFinality } from "./get-render-progress-with-finality";
import { getRandomRegion } from "deploy/regions";

export const getRenderOrMake = async ({ inputId, compId, inputProps }) => {
  const cache = await getRender(inputId);
  let _renderId = cache?.renderId ?? null;
  let _region = cache?.region ?? null;
  try {
    if (cache) {
      const progress = await getRenderProgressWithFinality(cache);
      return progress;
    }
    const region = getRandomRegion();

    const [first] = await getFunctions({
      compatibleOnly: false,
      region,
    });
    console.log(`Username=${inputId} Region=${region}`);
    await lockRender({
      region,
      inputId,
      inputProps,
      compId,
      functionName: first.functionName,
    });

    const { renderId, bucketName } = await renderMediaOnLambda({
      region,
      functionName: first.functionName,
      serveUrl: process.env.REMOTION_SITE_ID,
      composition: compId,
      inputProps,
      codec: "h264",
      imageFormat: "jpeg",
      maxRetries: 1,
      framesPerLambda: 80,
      privacy: "public",
    });
    _renderId = renderId;
    _region = region;
    await saveRender({
      region,
      inputId,
      renderId,
      bucketName,
    });
    const render = await getRender(inputId);
    if (!render) {
      throw new Error(`Didn't have render for ${inputId}`);
    }
    const progress = await getRenderProgressWithFinality(render);
    return progress;
  } catch (err) {
    console.log(`Failed to render video for ${inputId}`, err.stack);
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
