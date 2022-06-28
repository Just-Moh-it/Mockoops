import { getRenderOrMake } from "lib/remotion/get-render-or-make";

export default async function handler(req, res) {
  const body = JSON.parse(req.body);
  const { inputId, compId, inputProps } = body;

  if (!body) {
    throw new Error(`Please pass in the body for this request.`);
  } else if (!inputId || !compId || !inputProps) {
    throw new Error(`Please provide all three inputs in the body`);
  }

  const prog = await getRenderOrMake(inputId);
  res.status(200).json(prog);
}
