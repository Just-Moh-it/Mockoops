import { getRender } from "lib/db/renders";
import { getRenderProgressWithFinality } from "lib/remotion/get-render-progress-with-finality";

// type RequestData = {
//   username: string,
// };

// export type RenderProgressOrFinality =
//   | {
//       type: "progress",
//       progress: {
//         percent: number,
//       },
//     }
//   | {
//       type: "finality",
//       finality: Finality,
//     };

export default async function handler(req, res) {
  const { inputId } = JSON.parse(req.body);
  const render = await getRender(inputId);
  if (!render) {
    throw new Error("Could not get progress for ");
  }

  const prog = await getRenderProgressWithFinality(render, render.account ?? 1);

  res.status(200).json(prog);
  return;
}
