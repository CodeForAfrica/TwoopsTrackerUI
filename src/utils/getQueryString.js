export default function getQueryString({
  query,
  theme,
  location,
  days,
  page,
  pageSize,
}) {
  const searchParams = new URLSearchParams();
  if (query) {
    searchParams.append("query", query);
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
  return searchParams.toString();
}
