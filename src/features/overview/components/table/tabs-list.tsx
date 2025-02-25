"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

const tabs = ["All", "Spot", "Futures", "Favorites", "New Listings"];

const TabsList = () => {
  const [activeTab, setActiveTab] = useState("All");

  const onClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex">
      {tabs.map((i, index) => (
        <div
          onClick={() => {
            onClick(i);
          }}
          className={cn(
            "px-[24px] py-[8px] text-16-16-600 text-neutral-05 relative cursor-pointer",
            i === activeTab && "text-neutral-00 font-[700]"
          )}
          key={i}
        >
          {i}
          {i === activeTab && (
            <div className="absolute w-full h-[2px] bottom-0 left-0 bg-neutral-00" />
          )}
        </div>
      ))}
    </div>
  );
};

export default TabsList;
