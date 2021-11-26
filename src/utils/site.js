import config from "@/twoopstracker/config";

const name = process.env.NEXT_PUBLIC_APP_NAME || config.name;

// see: https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname
const ensureTrailingSlash = (string) => {
  const url = new URL(string);
  if (!url.pathname.endsWith("/")) {
    url.pathname = `${url.pathname}/`;
  }
  return url.toString();
};
const url = ensureTrailingSlash(process.env.NEXT_PUBLIC_APP_URL || config.url);
let environmentUrl = url;
if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
  environmentUrl = ensureTrailingSlash(
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  );
}

const site = {
  environmentUrl,
  name,
  url,
};

export default site;
