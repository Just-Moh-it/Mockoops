import { deleteRender, getRender } from "lib/db/renders";
import { getRenderOrMake } from "lib/remotion/get-render-or-make";

export default async function handler(req, res) {
  const body = JSON.parse(req.body);
  const { inputId, compId, inputProps } = body;

  const render = await getRender(inputId);
  if (!render) {
    throw new Error("Could not get progress for " + inputId);
  }

  await deleteRender(render);
  const prog = await getRenderOrMake({ inputId, compId, inputProps });

  res.status(200).json(prog);
}
