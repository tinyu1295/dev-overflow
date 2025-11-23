import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { techMap } from "@/constants/techMap";
import queryString from "query-string";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDeviconClassName = (techName: string) => {
  const normalizedTechName = techName.replace(/[ .]/g, "").toLowerCase();

  return techMap[normalizedTechName]
    ? `${techMap[normalizedTechName]} colored`
    : "devicon-devicon-plain";
};

export const formUrlQuery = ({
  params,
  key,
  value,
}: {
  params: string;
  key: string;
  value: string;
}) => {
  const parsed = queryString.parse(params);
  parsed[key] = value;
  return queryString.stringifyUrl({
    url: window.location.pathname,
    query: parsed,
  });
};

export const removeFromUrlQuery = ({
  params,
  keysToRemove,
}: {
  params: string;
  keysToRemove: string[];
}) => {
  const parsed = queryString.parse(params);
  keysToRemove.forEach((key) => {
    delete parsed[key];
  });
  return queryString.stringifyUrl(
    {
      url: window.location.pathname,
      query: parsed,
    },
    { skipNull: true }
  );
};
