"use client";

import { Fade } from "@progress/kendo-react-animation";
import { useShow } from "@/src/hooks/use-show";
import { FC } from "react";
import "./fade-page.css";

type FadePageProps<T extends object> = {
  Page: FC<T>;
} & T;

export default function FadePage<T extends object>({
  Page,
  ...props
}: FadePageProps<T>) {
  const [show, counter] = useShow();

  return (
    <Fade className="w-full h-full">
      {show ? <Page {...(props as T)} key={counter} /> : null}
    </Fade>
  );
}
