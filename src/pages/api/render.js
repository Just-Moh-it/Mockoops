import { getRenderOrMake } from "lib/remotion/get-render-or-make";

export default async function handler(req, res) {
  const body = JSON.parse(req.body);
  const { inputId, compId, inputProps } = body;

  const prog = await getRenderOrMake({ inputId, compId, inputProps });
  res.status(200).json(prog);
}
