import { searches, saveSearch } from "@/twoopstracker/lib";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const results = await searches(req.query);
    return res.status(200).json(results);
  }

  if (req.method === "POST") {
    const results = await saveSearch(req?.body);
    return res.status(200).json(results);
  }

  return res.status(405).end();
}
