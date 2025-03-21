import { getBaseUrlAndOptions } from "./get-base-url-and-options";

export function fetchCoinGeckoSearch(query: string) {
  const { baseURL, options } = getBaseUrlAndOptions();
  const url = `${baseURL}/search?query=${query}`;
  const data = fetch(url, options).then((response) => response.json());
  return data;
}
