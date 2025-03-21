"use client";

import { useMemo } from "react";
import HeaderMenu from "./header-menu";
import { useRouter_UNSTABLE as useRouter } from "waku";
import { titles } from "@/src/constants/titles";
import { Fade } from "@progress/kendo-react-animation";

const parseQueryString = (query: string) => {
  const params = new URLSearchParams("?" + query);
  const parsed: Record<string, string> = Object.fromEntries(params.entries());
  return parsed;
};

const Title = ({ title }: { title: string | undefined }) => (
  <Fade
    transitionEnterDuration={10000}
    transitionExitDuration={10000}
    key={title}
  >
    {title ? (
      <div>{`Crypto app${
        " - " + (title ?? titles.home.replace(/\+/g, " "))
      }`}</div>
    ) : (
      <div>{`Crypto app${
        " - " + (title ?? titles.home.replace(/\+/g, " "))
      }`}</div>
    )}
  </Fade>
);

export default function Header() {
  const { query } = useRouter();
  const queryParams = useMemo(() => parseQueryString(query), [query]);
  const title = queryParams.title;

  return (
    <div className="flex flex-row items-center justify-between p-4">
      <HeaderMenu />
      <div className="flex-1 flex items-center justify-center font-bold">
        <Title title={title} />
      </div>
    </div>
  );
}
