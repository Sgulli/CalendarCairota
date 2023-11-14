export default async function fetchData(url: string, opts: RequestInit) {
  return fetch(url, opts);
}
