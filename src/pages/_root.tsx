import { ReactNode } from "react";
import CoinChart from "../components/components-returned-by-server-actions/coin-chart/coin-chart";
import CoinChartHeader from "../components/components-returned-by-server-actions/coin-chart-header";
import CoinSearchResults from "../components/components-returned-by-server-actions/coin-search-results";
import CoinsList from "../components/components-returned-by-server-actions/coins-list";

export default async function RootElement({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body data-version="1.0" className="">
        {children}
      </body>
    </html>
  );
}
