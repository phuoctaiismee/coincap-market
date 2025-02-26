import { SlideTabs } from "@/components/common/tabs/slide-tabs";
import Heading from "@/components/common/typography/heading";
import AnalyticsCard from "./components/cards/analytics-card";

const NFTOnTokenFeature = () => {
  const timeFilterTabs = [
    { id: "24h", label: "24h" },
    { id: "7d", label: "7d" },
    { id: "30d", label: "30d" },
    { id: "All", label: "All" },
  ];

  return (
    <div className="space-y-[26px]">
      <div className="flex items-center justify-between">
        <Heading size="sm">NFTs on Bitcoin</Heading>
        <SlideTabs tabs={timeFilterTabs} />
      </div>
      <div className="grid grid-cols-2 gap-[24px]">
        <AnalyticsCard active title="Bitcoin Average Transaction Fees (30d)" />
        <AnalyticsCard title="Total Sales (24h)" />
      </div>
    </div>
  );
};

export default NFTOnTokenFeature;
