import { tweetsInsights } from "@/twoopstracker/lib";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const results = await tweetsInsights(req.query);
    return res.status(200).json(results);
  }

  return res.status(405).end();
}
