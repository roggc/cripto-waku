import { getBaseUrlAndOptions } from "./get-base-url-and-options";

export function fetchCoinGeckoDataById(coinId: string) {
  const { baseURL, options } = getBaseUrlAndOptions();
  const url = `${baseURL}/coins/${coinId}`;
  const data = fetch(url, options).then((response) => response.json());
  return data;
}
