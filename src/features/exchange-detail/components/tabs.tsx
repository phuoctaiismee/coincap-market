"use client";

import { COMMON_DATA } from "@/configs";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface TabsExchangeDetailProps {
  className?: string;
}

const TabsExchangeDetail = ({ className }: TabsExchangeDetailProps) => {
  const tabs = COMMON_DATA.exchange.detail_tabs;
  const pathname = usePathname();

  return (
    <div className={cn("flex items-center pt-3", className)}>
      {tabs.map((tab) => {
        const isActive = pathname.startsWith(
          tab.href.replace(":slug", pathname.split("/")[2])
        );

        return (
          <Link
            href={tab.href.replace(":slug", pathname.split("/")[2])}
            key={tab.href}
            className={cn(
              "px-6 py-1 border-b-2 border-transparent text-neutral-05 transition-all duration-300",
              isActive && "border-neutral-01 font-semibold text-neutral-01"
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
};

export default TabsExchangeDetail;
