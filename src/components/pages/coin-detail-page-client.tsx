"use client";

import { Suspense } from "react";
import { Loader } from "@progress/kendo-react-indicators";
import { coinChart } from "@/src/server-actions/coin-chart";
import { coinChartHeader } from "@/src/server-actions/coin-chart-header";

export default function CoinDetailPageClient({ coinId }: { coinId: string }) {
  return (
    <div className="px-4 flex flex-col gap-2 h-full">
      <Suspense fallback={<Loader />}>{coinChartHeader(coinId)}</Suspense>
      <Suspense fallback={<Loader />}>{coinChart(coinId)}</Suspense>
    </div>
  );
}
