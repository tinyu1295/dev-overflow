"use client";

import { useState } from "react";
import { filters } from "@/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeFromUrlQuery, cn } from "@/lib/utils";
import { Button } from "../ui/button";

function HomeFilter() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter") || "";
  const [filterQuery, setFilterQuery] = useState(filter);
  const router = useRouter();

  const homeFilterHandler = (active: string) => {
    let newUrl;
    if (filterQuery === active) {
      setFilterQuery("");
      newUrl = removeFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["filter"],
      });
      router.push(newUrl, { scroll: false });
    } else {
      setFilterQuery(active);
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: active,
      });
      router.push(newUrl, { scroll: false });
    }
  };

  return (
    <div className="mt-10 hidden flex-wrap gap-3 sm:flex">
      {filters.map((item) => (
        <Button
          key={item.value}
          className={cn(
            "body-medium rounded-lg px-6 py-3 capitalize shadow-none cursor-pointer",
            filterQuery === item.value
              ? "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400"
              : "bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300"
          )}
          onClick={() => homeFilterHandler(item.value)}
        >
          {item.label}
        </Button>
      ))}
    </div>
  );
}

export default HomeFilter;
