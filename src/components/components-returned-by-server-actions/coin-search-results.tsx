"use client";

import SuspenseWithUse from "@/src/lib/suspense-with-use";
import { SearchResult } from "@/src/types/search-result";
import CoinCard from "@/src/components/ui/coin-card";
import { Crypto } from "@/src/types/crypto";
import SkeletonCard from "@/src/components/ui/skeleton-card";

export default function CoinSearchResults({
  promise,
}: {
  promise?: Promise<SearchResult>;
}) {
  return (
    <SuspenseWithUse
      fallback={Array.from({ length: 10 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
      promise={promise}
    >
      {(data) =>
        data.coins.map((coin) => {
          const item: Crypto = {
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol,
            current_price: 0,
            image: coin.thumb,
          };
          return <CoinCard key={coin.id} item={item} isSearchResult />;
        })
      }
    </SuspenseWithUse>
  );
}
