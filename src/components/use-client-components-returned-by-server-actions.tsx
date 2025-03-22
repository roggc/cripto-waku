import CoinChart from "@/src/components/components-returned-by-server-actions/coin-chart/coin-chart";
import CoinChartHeader from "@/src/components/components-returned-by-server-actions/coin-chart-header";
import CoinSearchResults from "@/src/components/components-returned-by-server-actions/coin-search-results";
import CoinsList from "@/src/components/components-returned-by-server-actions/coins-list";

// this component must be used in the layout file.
// its function is to allow for correct deployment/build without error.
// if client components returned by server actions are not used in a server component
// the build/deploy fails with error. In local dev the app works correctly,
// but as I say fails on build/deploy. With this used in the layout the app builds/deploys correctly

export default function UseClientComponentsReturnedByServerActions() {
  return (
    false && (
      <>
        <CoinChart />
        <CoinChartHeader />
        <CoinSearchResults />
        <CoinsList />
      </>
    )
  );
}
