"use server";

import CoinChartHeader from "@/src/components/components-returned-by-server-actions/coin-chart-header";
import { fetchCoinGeckoDataById } from "@/src/utils/fetch/fetch-coin-gecko-data-by-id";

export function coinChartHeader(coinId: string) {
  return <CoinChartHeader promise={fetchCoinGeckoDataById(coinId)} />;
}
