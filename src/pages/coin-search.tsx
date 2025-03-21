import CoinSearchPageClient from "@/src/components/pages/coin-search-page-client";
import PageClient from "@/src/components/page-client";
import CoinSearchResults from "@/src/components/components-returned-by-server-actions/coin-search-results";

export default function CoinsPage() {
  return <PageClient Page={CoinSearchPageClient} />;
}
