"use server";

import CoinSearchResults from "@/src/components/components-returned-by-server-actions/coin-search-results";
import { fetchCoinGeckoSearch } from "@/src/utils/fetch/fetch-coin-gecko-search";

export function coinSearchResults(query: string) {
  return <CoinSearchResults promise={fetchCoinGeckoSearch(query)} />;
}
