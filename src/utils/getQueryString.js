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
  if (category) {
    searchParams.append("category", category);
  }
  if (theme) {
    searchParams.append("theme", theme);
  }
  if (location) {
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
