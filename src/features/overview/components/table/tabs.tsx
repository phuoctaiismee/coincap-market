"use client";

import TabsList from "@/components/common/tabs/tabs-list";

const overViewTabs = [
  { name: "All", link: "#", id: "all" },
  { name: "Spot", link: "#", id: "spot" },
  { name: "Futures", link: "#", id: "futures" },
  { name: "Favorites", link: "#", id: "favorites" },
  { name: "New Listings", link: "#", id: "new-listings" },
];

const Tabs = () => {
  return <TabsList items={overViewTabs} />;
};

export default Tabs;
