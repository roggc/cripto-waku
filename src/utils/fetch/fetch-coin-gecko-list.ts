import { getBaseUrlAndOptions } from "./get-base-url-and-options";

export function fetchCoinGeckoList(pageParam?: string, perPageParam?: string) {
  const { baseURL, options } = getBaseUrlAndOptions();
  const page = pageParam ?? "1";
  const perPage = perPageParam ?? "10";
  const url = `${baseURL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false`;
  const data = fetch(url, options).then((response) => response.json());
  return data;
}
