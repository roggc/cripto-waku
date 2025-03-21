import type { PageProps } from "waku/router";
import PageClient from "@/src/components/page-client";
import CoinDetailPageClient from "@/src/components/pages/coin-detail-page-client";

export default function CoinDetailPage({
  coinId,
}: PageProps<"/coin-deatil/[coinId]">) {
  return <PageClient Page={CoinDetailPageClient} coinId={coinId} />;
}
