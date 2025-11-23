"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SheetClose } from "../ui/sheet";
import React from "react";

function NavLinks({ isMobileNav = false }: { isMobileNav?: boolean }) {
  const pathname = usePathname();
  const userId = 1;

  return (
    <>
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        if (item.label === "profile") {
          if (userId) item.route = `${item.route}/${userId}`;
          else return null;
        }
        const LinkComponent = (
          <Link
            key={item.label}
            href={item.route}
            className={cn(
              "flex gap-4 items-center justify-start bg-transparent p-4",
              isActive
                ? "primary-gradient rounded-lg text-light-900"
                : "text-dark300_light900"
            )}
          >
            <Image
              src={item.imgURL}
              width={20}
              height={20}
              alt={item.label}
              className={cn({ "invert-colors": !isActive })}
            />
            <p
              className={cn(
                isActive ? "base-bold" : "base-medium",
                !isMobileNav && "max-lg:hidden"
              )}
            >
              {item.label}
            </p>
          </Link>
        );

        return isMobileNav ? (
          <SheetClose key={item.label} asChild>
            {LinkComponent}
          </SheetClose>
        ) : (
          <React.Fragment key={item.label}>{LinkComponent}</React.Fragment>
        );
      })}
    </>
  );
}

export default NavLinks;
