export function getSessionItem(key) {
  try {
    const localItem = JSON.parse(global?.sessionStorage?.getItem(key));
    if (!localItem) {
      return null;
    }
    return localItem.data;
  } catch (error) {
    return null;
  }
}

export function setSessionItem(key, item) {
  return global?.sessionStorage?.setItem(key, JSON.stringify({ data: item }));
}
