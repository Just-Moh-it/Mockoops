import { deleteCache } from "lib/db/cache";
import { deleteRender, getRender } from "lib/db/renders";

export default async function handler(req, res) {
  const body = JSON.parse(req.body);
  await deleteCache(body.inputId);
  const render = await getRender(body.inputId);
  if (!render) {
    throw new Error("Could not get progress for " + body.inputId);
  }
  await deleteRender(render);
  res.status(200).json({});
}
