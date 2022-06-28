import { deleteCache } from "../../src/db/cache";
import { deleteRender, getRender } from "../../src/db/renders";

export default async function handler(req, res) {
  const body = JSON.parse(req.body);
  await deleteCache(body.username);
  const render = await getRender(body.username);
  if (!render) {
    throw new Error("Could not get progress for " + body.username);
  }
  await deleteRender(render);
  res.status(200).json({});
}
