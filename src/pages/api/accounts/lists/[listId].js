import { updateList } from "@/twoopstracker/lib";

export default async function handler(req, res) {
  const { body, method, query } = req;
  if (method === "PUT") {
    const results = await updateList(body, method, query.listId);
    return res.status(200).json(results);
  }

  if (method === "GET" || method === "DELETE") {
    const results = await updateList(null, method, query.listId);
    return res.status(200).json(results);
  }

  return res.status(405).end();
}
