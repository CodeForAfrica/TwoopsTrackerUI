import { fetchAllResultsWithNext, tweets } from "@/twoopstracker/lib";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const results = await tweets(req.query);

    const fetchTweets = async () => tweets({ ...req.query, pageSize: 100 });
    const foundTweets = await fetchAllResultsWithNext(fetchTweets);
    return res.status(200).json({ tweets: results, foundTweets });
  }

  return res.status(405).end();
}
