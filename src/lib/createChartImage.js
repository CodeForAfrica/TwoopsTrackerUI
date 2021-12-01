import AWS from "aws-sdk";
import sharp from "sharp";
import * as vega from "vega";

import LineScope from "@/twoopstracker/components/Chart/LineScope";
import {
  tweetsSearchParamFromSearchQuery,
  tweetsSearchQueryFromUserQuery,
  tweetsUserQuery,
} from "@/twoopstracker/lib";

function uploadAsync(s3, params) {
  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.Location);
      }
    });
  });
}

const ACL = "public-read";
const CacheControl = "max-age=630720000, public";
const ContentType = "image/png";

export default async function createChartImage(data, query) {
  const spec = LineScope(data, true);
  const view = new vega.View(vega.parse(spec), { renderer: "none" });

  const title = view?.signal("chartTitle");
  const subtitle = view?.signal("chartSubTitle");
  const total = view?.signal("total");
  const highlight = view?.signal("highlight");

  const description = `${highlight} ${subtitle} was ${total}`;

  const svg = await view.toSVG();
  const Body = await sharp(Buffer.from(svg)).png().toBuffer();

  const searchQuery = tweetsSearchQueryFromUserQuery(tweetsUserQuery(query));
  const searchParams = tweetsSearchParamFromSearchQuery(searchQuery);
  const uniqueQueryString = searchParams?.delete("format")?.toString();

  const Key = `media/images/twoopstracker-${uniqueQueryString}.png`;
  const config = {
    accessKeyId: process.env.S3_UPLOAD_KEY,
    secretAccessKey: process.env.S3_UPLOAD_SECRET,
    region: process.env.S3_UPLOAD_REGION,
  };
  const Bucket = process.env.S3_UPLOAD_BUCKET;
  const params = {
    ACL,
    Bucket,
    Key,
    Body,
    CacheControl,
    ContentType,
  };
  const s3 = new AWS.S3(config);
  const image = await uploadAsync(s3, params);
  return {
    image,
    title: `${title} ${subtitle}`,
    description,
  };
}
