"use server";

import CoinsList from "@/src/components/components-returned-by-server-actions/coins-list";
import { fetchCoinGeckoList } from "@/src/utils/fetch/fetch-coin-gecko-list";

export function coinsList(pageParam?: string, perPageParam?: string) {
  return (
    <CoinsList
      promise={fetchCoinGeckoList(pageParam, perPageParam)}
      initialPage={+(pageParam ?? "1")}
    />
  );
}
