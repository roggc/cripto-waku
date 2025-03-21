import { useEffect, useState } from "react";
import { useRouter_UNSTABLE as useRouter } from "waku";

export function useShow() {
  const [show, setShow] = useState(false);
  const [counter, setCounter] = useState(0);
  const { path } = useRouter();

  useEffect(() => {
    setShow(false);
  }, [path]);

  useEffect(() => {
    if (!show) {
      setShow(true);
      setCounter((c) => c + 1);
    }
  }, [show]);

  return [show, counter] as const;
}
