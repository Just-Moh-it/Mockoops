import { getRenderProgress } from "@remotion/lambda";
import { updateRenderWithFinality } from "lib/db/renders";
import { getFinality } from "./get-render-or-make";

// Render: from db
export const getRenderProgressWithFinality = async (render) => {
  if (render.finality) {
    return {
      type: "finality",
      finality: render.finality,
    };
  }

  if (!render.inputId || !render.bucketName) {
    return {
      progress: {
        percent: 0,
      },
      type: "progress",
    };
  }

  const progress = await getRenderProgress({
    renderId: render.inputId, // yes, renderId
    bucketName: render.bucketName,
    functionName: render.functionName,
    region: render.region,
  });

  const finality = getFinality(progress);

  if (finality) {
    await updateRenderWithFinality(
      render.inputId,
      render.region,
      finality
    );
    console.log(`Updated ${render.inputId} with finality`, finality);
    return {
      type: "finality",
      finality,
    };
  }

  return {
    type: "progress",
    progress: {
      percent: progress.overallProgress,
    },
  };
};
