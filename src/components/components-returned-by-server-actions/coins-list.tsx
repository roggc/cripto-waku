"use client";

import SuspenseWithUse from "@/src/lib/suspense-with-use";
import { useIntersectionObserver } from "@/src/hooks/use-intersection-observer";
import {
  useState,
  Suspense,
  RefObject,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";
import { coinsList } from "@/src/server-actions/coins-list";
import { Loader } from "@progress/kendo-react-indicators";
import SkeletonCard from "@/src/components/ui/skeleton-card";
import type { Crypto } from "@/src/types/crypto";
import CoinCard from "@/src/components/ui/coin-card";

const LoadMore = ({
  ref,
  setCheck,
}: {
  ref: RefObject<HTMLDivElement | null>;
  setCheck: Dispatch<SetStateAction<number>>;
}) => {
  useEffect(() => {
    if (ref.current) {
      setCheck((c) => c + 1);
    }
  }, []);

  return (
    <div
      className="h-full min-h-1 w-full flex items-center justify-center"
      ref={ref}
    ></div>
  );
};

export default function CoinsList({
  promise,
  initialPage,
}: {
  promise: Promise<Crypto[]>;
  initialPage?: number;
}) {
  const [, setCheck] = useState(0);
  const [loadMore, setLoadMore] = useState(false);
  const [page, setPage] = useState(initialPage ?? 1);
  const onIntersect = useCallback(() => {
    setLoadMore(true);
    setPage((p) => p + 1);
  }, []);
  const target = useIntersectionObserver({
    onIntersect,
  });

  return (
    <SuspenseWithUse fallback={<SkeletonCard />} promise={promise}>
      {(data) => [
        ...data.map((item) => <CoinCard item={item} key={item.id} />),
        loadMore ? (
          <Suspense
            fallback={
              <div className="flex justify-center items-center w-full">
                <Loader />
              </div>
            }
            key="suspense-component___"
          >
            {coinsList(page.toString())}
          </Suspense>
        ) : (
          <LoadMore
            key={`target-component___`}
            ref={target}
            setCheck={setCheck}
          />
        ),
      ]}
    </SuspenseWithUse>
  );
}
