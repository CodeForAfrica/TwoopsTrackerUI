import { search } from "@/twoopstracker/lib";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { query, theme, location, days: daysAsString } = req.query;
    const days = parseInt(daysAsString, 10) || undefined;
    const results = await search(query, theme, location, days);
    return res.status(200).json(results);
  }

  return res.status(405).end();
}
