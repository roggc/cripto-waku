"use client";

import type { Crypto } from "@/src/types/crypto";
import { Card, CardBody } from "@progress/kendo-react-layout";
import { Link } from "waku";
import { titles } from "@/src/constants/titles";

export default function CoinCard({
  item,
  isSearchResult = false,
}: {
  item: Crypto;
  isSearchResult?: boolean;
}) {
  return (
    <Link
      to={`/coin-detail/${item.id}?title=${titles.coinChart}`}
      className="w-full h-full"
    >
      <Card className="cursor-pointer w-full h-full">
        <CardBody className="bg-black text-white h-full flex flex-col">
          <div className="flex flex-col gap-4 items-center justify-center w-full h-full">
            <div className="flex items-center justify-between gap-4 w-full">
              <div className="text-2xl font-bold">{item.name}</div>
              <img src={item.image} width={50} />
            </div>
            <div className="flex flex-1 items-end justify-between gap-4 w-full">
              <div className="text-sm font-medium text-muted-foreground">
                {item.symbol.toUpperCase()}
              </div>
              {!isSearchResult && (
                <div className="text-2xl font-bold">
                  $
                  {item.current_price.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}
