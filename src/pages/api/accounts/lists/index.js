import { fetchLists, updateList } from "@/twoopstracker/lib";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const results = await fetchLists();
    return res.status(200).json(results);
  }

  if (req.method === "POST") {
    const { body, method } = req;
    const results = await updateList(body, method);
    return res.status(200).json(results);
  }

  return res.status(405).end();
}
