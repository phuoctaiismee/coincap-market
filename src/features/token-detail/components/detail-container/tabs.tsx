"use client";

import TabsList from "@/components/common/tabs/tabs-list";
import { usePathname } from "next/navigation";

const Tabs = () => {
  const pathname = usePathname();

  const getUpdatedPathname = (lastEndpoint: string) => {
    return pathname.split("/").slice(0, -1).concat(lastEndpoint).join("/");
  };

  const detailTokenTabs = [
    {
      name: "Overview",
      id: "overview",
      link: getUpdatedPathname(""),
    },
    {
      name: "Market",
      id: "market",
      link: getUpdatedPathname("market"),
    },
    {
      name: "Yield",
      id: "yield",
      link: getUpdatedPathname("yield"),
    },
    {
      name: "Analytics",
      id: "analytics",
      link: getUpdatedPathname("analytics"),
    },
    {
      name: "NFT on Bitcoin",
      id: "nft-on-bitcoin",
      link: getUpdatedPathname("nft-on-bitcoin"),
    },
    {
      name: "Top NFT on Bitcoin",
      id: "top-nft-on-bitcoin",
      link: getUpdatedPathname("top-nft-on-bitcoin"),
    },
    {
      name: "Rewards",
      id: "rewards",
      link: getUpdatedPathname("rewards"),
    },
  ];

  return <TabsList items={detailTokenTabs} />;
};

export default Tabs;
