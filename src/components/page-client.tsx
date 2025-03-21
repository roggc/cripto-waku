//src/components/home-page-client.tsx
"use client";

import { FC } from "react";
import { useIsClient } from "@/src/hooks/use-is-client";
import FadePage from "./fade-page/fade-page";

type PageClientProps<T extends object> = {
  Page: FC<T>;
} & T;

export default function PageClient<T extends object>({
  ...props
}: PageClientProps<T>) {
  const isClient = useIsClient();

  return isClient ? <FadePage {...props} /> : null;
}
