import type { PageProps } from "waku/router";
import PageClient from "@/src/components/page-client";
import CoinDetailPageClient from "@/src/components/pages/coin-detail-page-client";
import CoinChartHeader from "@/src/components/components-returned-by-server-actions/coin-chart-header";
import CoinChart from "@/src/components/components-returned-by-server-actions/coin-chart/coin-chart";

export default function CoinDetailPage({
  coinId,
}: PageProps<"/coin-deatil/[coinId]">) {
  return <PageClient Page={CoinDetailPageClient} coinId={coinId} />;
}
