"use client";

import Image from "next/image";
import { Input } from "../ui/input";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { formUrlQuery, removeFromUrlQuery } from "@/lib/utils";

interface LocalSearchProps {
  icon: string;
  placeholder: string;
  route: string;
  otherClasses?: string;
}

function LocalSearch({
  icon,
  placeholder,
  route,
  otherClasses,
}: LocalSearchProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [searchQuery, setSearchQuery] = useState(query);
  const router = useRouter();
  const previousSearchRef = useRef(searchQuery);

  useEffect(() => {
    if (previousSearchRef.current === searchQuery) return;
    previousSearchRef.current = searchQuery;

    const delayDeboundFn = setTimeout(() => {
      if (searchQuery) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: searchQuery,
        });
        router.push(newUrl, { scroll: false });
      } else {
        if (pathname === route) {
          const newUrl = removeFromUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ["query"],
          });
          router.push(newUrl, { scroll: false });
        }
      }
    }, 400);
    return () => clearTimeout(delayDeboundFn);
  }, [searchQuery, pathname, route, searchParams, router]);

  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      <Image
        src={icon}
        width={24}
        height={24}
        alt="search"
        className="cursor-pointer"
      />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="bg-transparent! paragraph-regular no-focus text-dark400_light700 border-none shadow-none outline-none"
        // paragraph-regular no-focus placeholder text-dark400_light700 border-none shadow-none outline-none
      />
    </div>
  );
}

export default LocalSearch;
