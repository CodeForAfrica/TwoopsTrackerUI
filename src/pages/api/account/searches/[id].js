import { updateSearch, deleteSearch } from "@/twoopstracker/lib";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    const results = await updateSearch(req.query?.id, req?.body);
    return res.status(200).json(results);
  }

  if (req.method === "DELETE") {
    const results = await deleteSearch(req?.query?.id);
    return res.status(200).json(results);
  }

  return res.status(405).end();
}
