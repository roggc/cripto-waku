import { getEnv } from "waku";

export function getBaseUrlAndOptions() {
  const secretKey = getEnv("COINGECKO_API_KEY");
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": secretKey ?? "",
    },
  };
  const baseURL = "https://api.coingecko.com/api/v3";
  return { baseURL, options } as const;
}
