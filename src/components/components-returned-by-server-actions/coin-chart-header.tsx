"use client";

import { Loader } from "@progress/kendo-react-indicators";
import SuspenseWithUse from "@/src/lib/suspense-with-use";

export default function CoinChartHeader({
  promise,
}: {
  promise: Promise<{ name: string; image: { thumb: string } }>;
}) {
  return (
    <SuspenseWithUse fallback={<Loader />} promise={promise}>
      {(data) => (
        <div className="flex items-center justify-center">
          <div className="inline-flex gap-2">
            <img src={data.image.thumb} alt="coin thumb image" />
            <div>{data.name}</div>
          </div>
        </div>
      )}
    </SuspenseWithUse>
  );
}
