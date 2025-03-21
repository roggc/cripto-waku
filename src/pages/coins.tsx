import CoinsPageClient from "@/src/components/pages/coins-page-client";
import PageClient from "@/src/components/page-client";
import CoinsList from "../components/components-returned-by-server-actions/coins-list";

export default function CoinsPage() {
  return <PageClient Page={CoinsPageClient} />;
}
