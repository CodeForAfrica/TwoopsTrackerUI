export default function getQueryString({
  category,
  query,
  theme,
  location,
  days,
  page,
  pageSize,
  download,
  ordering,
  isDesc,
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
  if (ordering) {
    const trimmedOrder = ordering.replace(/^\W+|\W+$/, "");
    if (isDesc) {
      searchParams.append("ordering", `-${trimmedOrder}`);
    } else {
      searchParams.append("ordering", trimmedOrder);
    }
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
