"use client";

import { Loader } from "@progress/kendo-react-indicators";
import SuspenseWithUse from "@/src/lib/suspense-with-use";
import Chart from "./chart";

export default function CoinChart({
  promise,
}: {
  promise: Promise<{ prices: [number, number][] }>;
}) {
  return (
    <SuspenseWithUse fallback={<Loader />} promise={promise}>
      {(data) => (
        <Chart
          data={data.prices.map(([timestamp, price]: [number, number]) => ({
            date: new Date(timestamp),
            price: price,
          }))}
        />
      )}
    </SuspenseWithUse>
  );
}
