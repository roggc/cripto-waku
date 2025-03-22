import "../styles.css";

import type { ReactNode } from "react";
import Header from "@/src/components/header/header";
import UseClientComponentsReturnedByServerActions from "@/src/components/use-client-components-returned-by-server-actions";

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();

  return (
    <div className="font-['Nunito'] h-dvh flex flex-col">
      <title>Crypto app</title>
      <meta name="description" content={data.description} />
      <link rel="icon" type="image/png" href={data.icon} />
      <Header />
      <main className="flex-1 min-h-0 pb-4">{children}</main>
      {/* this is necessary for the project to build/deploy correctly. if we do not do this the project fails on deploy/build while working in local dev */}
      <UseClientComponentsReturnedByServerActions />
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
