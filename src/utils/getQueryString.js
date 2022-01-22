export default function getQueryString({
  category,
  query,
  theme,
  location,
  days,
  page,
  pageSize,
  download,
}) {
  const searchParams = new URLSearchParams();
  if (query) {
    searchParams.append("query", query);
  }
  if (category && category !== "category-none") {
    searchParams.append("category", category);
  }
  if (theme && theme !== "theme-none") {
    searchParams.append("theme", theme);
  }
  if (location && location !== "location-none") {
    searchParams.append("location", location);
  }
  if (days) {
    searchParams.append("days", days);
  }
  if (page) {
    searchParams.append("page", page);
  }
  if (pageSize) {
    searchParams.append("pageSize", pageSize);
  }
  if (download) {
    searchParams.append("download", download);
  }
  return searchParams.toString();
}
