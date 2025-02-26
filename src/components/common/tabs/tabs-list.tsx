"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

const tabs = ["All", "Spot", "Futures", "Favorites", "New Listings"];

interface ITabItem {
  name: string;
  link: string;
  id: string;
}

interface IProps {
  items: ITabItem[];
}

const TabsList: React.FC<IProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState(items[0].id);

  const onClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex">
      {items.map((i) => (
        <Link
          href={i.link}
          onClick={() => {
            onClick(i.id);
          }}
          className={cn(
            "px-[24px] py-[8px] text-16-16-600 text-neutral-05 relative cursor-pointer",
            i.id === activeTab && "text-neutral-00 font-[700]"
          )}
          key={i.id}
        >
          {i.name}
          {i.id === activeTab && (
            <div className="absolute w-full h-[2px] bottom-0 left-0 bg-neutral-01" />
          )}
        </Link>
      ))}
    </div>
  );
};

export default TabsList;
