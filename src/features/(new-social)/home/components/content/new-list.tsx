import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AdvertisingBanner,
  NewCard,
} from "@/features/(new-social)/shared-components";
import React from "react";
import { Stories } from "../stories";

export const NewList = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-8">
        <Tabs defaultValue={tabs[0].value} className="w-full h-full">
          <TabsList className="h-14 w-full flex items-center gap-4 p-0 bg-background justify-start rounded-none">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="rounded-none bg-background h-full py-0 data-[state=active]:shadow-none 
              text-[#B1B1B1] font-semibold text-base border-b-2 
              border-transparent data-[state=active]:border-neutral-900 data-[state=active]:font-bold"
              >
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <AdvertisingBanner />
        <Stories />

        <div className="w-full border-b border-neutral-400" />

        <div className="grid gap-4">
          {Array(3)
            .fill(1)
            .map((_, index) => (
              <React.Fragment key={index}>
                <NewCard />
                <div className="w-full border-b my-4 border-neutral-300" />
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

const tabs = [
  {
    name: "Feed",
    value: "feed",
    content: "pnpm dlx shadcn@latest add tabs",
  },
  {
    name: "Topics",
    value: "topics",
    content: "npx shadcn@latest add tabs",
  },
  {
    name: "Videos",
    value: "videos",
    content: "npx shadcn@latest add tabs",
  },
  {
    name: "Lives",
    value: "lives",
    content: "bunx --bun shadcn@latest add tabs",
  },
  {
    name: "Articles",
    value: "articles",
    content: "bunx --bun shadcn@latest add tabs",
  },
];
