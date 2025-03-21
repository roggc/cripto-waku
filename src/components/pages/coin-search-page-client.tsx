"use client";

import { Input, InputChangeEvent } from "@progress/kendo-react-inputs";
import { Suspense, useEffect, useState } from "react";
import { coinSearchResults } from "@/src/server-actions/coin-search-results";
import { Loader } from "@progress/kendo-react-indicators";

export default function CoinSearchPageClient() {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  const handleChange = (e: InputChangeEvent) => {
    const newValue = e.target.value;
    setInputValue(newValue?.toString() ?? "");
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 300);

    return () => clearTimeout(handler);
  }, [inputValue]);

  return (
    <div className="flex flex-col gap-4 items-center px-4 h-full">
      <div className="w-full">
        <Input value={inputValue} onChange={handleChange} />
      </div>
      <div className="flex flex-col gap-1 items-center w-full overflow-auto sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {debouncedValue && (
          <Suspense fallback={<Loader />}>
            {coinSearchResults(debouncedValue)}
          </Suspense>
        )}
      </div>
    </div>
  );
}
