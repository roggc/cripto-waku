import { getBaseUrlAndOptions } from "./get-base-url-and-options";

export function fetchCoinGeckoChart(coinId: string) {
  const { baseURL, options } = getBaseUrlAndOptions();
  const url = `${baseURL}/coins/${coinId}/market_chart?vs_currency=usd&days=30&interval=daily`;
  const data = fetch(url, options).then((response) => response.json());
  return data;
}
