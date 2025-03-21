"use server";

import CoinChart from "@/src/components/components-returned-by-server-actions/coin-chart/coin-chart";
import { fetchCoinGeckoChart } from "@/src/utils/fetch/fetch-coin-gecko-chart";

export function coinChart(coinId: string) {
  return <CoinChart promise={fetchCoinGeckoChart(coinId)} />;
}
