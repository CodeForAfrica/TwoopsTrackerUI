export default function getQueryString({
  accounts,
  category,
  query,
  theme,
  location,
  days,
  page,
  pageSize,
  download,
  sort,
}) {
  const searchParams = new URLSearchParams();
  if (accounts) {
    searchParams.append("accounts", accounts);
  }
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
  if (sort) {
    searchParams.append("sort", sort);
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
