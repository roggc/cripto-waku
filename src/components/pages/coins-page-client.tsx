"use client";

import { Suspense } from "react";
import { coinsList } from "@/src/server-actions/coins-list";
import { Loader } from "@progress/kendo-react-indicators";
import { useIsClient } from "@/src/hooks/use-is-client";

export default function CoinsPageClient() {
  const isClient = useIsClient();

  return (
    <div className="flex flex-col items-center px-4 overflow-auto sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {isClient ? (
        <Suspense fallback={<Loader />}>{coinsList("1")}</Suspense>
      ) : null}
    </div>
  );
}
