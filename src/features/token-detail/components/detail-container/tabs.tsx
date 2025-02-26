"use client";

import TabsList from "@/components/common/tabs/tabs-list";
import { usePathname } from "next/navigation";

const Tabs = () => {
  const pathname = usePathname();
  const currentTokenSlug = pathname.split("/")[2];
  const detailTokenTabs = [
    {
      name: "Overview",
      id: "overview",
      link: `/price/${currentTokenSlug}`,
    },
    {
      name: "Market",
      id: "market",
      link: `/price/${currentTokenSlug}/market`,
    },
    {
      name: "Yield",
      id: "yield",
      link: `/price/${currentTokenSlug}/yield`,
    },
    {
      name: "Analytics",
      id: "analytics",
      link: `/price/${currentTokenSlug}/analytics`,
    },
    {
      name: "NFT on Bitcoin",
      id: "nft-on-token",
      link: `/price/${currentTokenSlug}/nft-on-token`,
    },
    {
      name: "Top NFT on Bitcoin",
      id: "top-nft-on-token",
      link: `/price/${currentTokenSlug}/top-nft-on-token`,
    },
    {
      name: "Rewards",
      id: "rewards",
      link: `/price/${currentTokenSlug}/rewards`,
    },
  ];

  return <TabsList items={detailTokenTabs} />;
};

export default Tabs;
