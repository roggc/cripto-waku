import HomePageClient from "@/src/components/pages/home-page-client";
import PageClient from "@/src/components/page-client";

export default async function HomePage() {
  return <PageClient Page={HomePageClient} />;
}
