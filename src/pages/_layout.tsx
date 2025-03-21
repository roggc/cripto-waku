import "../styles.css";

import type { ReactNode } from "react";
import Header from "@/src/components/header/header";
import CoinChart from "../components/components-returned-by-server-actions/coin-chart/coin-chart";
import CoinChartHeader from "../components/components-returned-by-server-actions/coin-chart-header";
import CoinSearchResults from "../components/components-returned-by-server-actions/coin-search-results";
import CoinsList from "../components/components-returned-by-server-actions/coins-list";

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();

  return (
    <div className="font-['Nunito'] h-dvh flex flex-col">
      <title>Crypto app</title>
      <meta name="description" content={data.description} />
      <link rel="icon" type="image/png" href={data.icon} />
      <Header />
      <main className="flex-1 overflow-auto pb-4">{children}</main>
    </div>
  );
}

const getData = async () => {
  const data = {
    description: "An internet website!",
    icon: "/images/favicon.png",
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
