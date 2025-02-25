"use client";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
interface TabLinkProps {
  className?: string;
  tabs: {
    label: string;
    href: string;
    icon?: React.ReactNode;
  }[];
}

const TabLink = ({ tabs, className }: TabLinkProps) => {
  const pathname = usePathname();
  return (
    <div className={cn("flex items-center pt-3", className)}>
      {tabs.map((tab) => (
        <Link
          href={tab.href}
          key={tab.href}
          className={cn(
            "px-6 py-1  border-b-2 border-transparent text-neutral-05 transition-all duration-300",
            pathname === tab.href &&
              "border-neutral-01 font-semibold text-neutral-01"
          )}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
};

export default TabLink;
