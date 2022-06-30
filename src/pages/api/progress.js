import { getRender } from "lib/db/renders";
import { getRenderProgressWithFinality } from "lib/remotion/get-render-progress-with-finality";

export default async function handler(req, res) {
  const body = JSON.parse(req.body);
  const { inputId } = body;
  const render = await getRender(inputId);
  if (!render) {
    throw new Error("Could not get progress for ", inputId);
  }

  const prog = await getRenderProgressWithFinality(render);

  res.status(200).json(prog);
  return;
}
