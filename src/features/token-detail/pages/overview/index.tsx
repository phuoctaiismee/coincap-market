import { SlideTabs } from "@/components/common/tabs/slide-tabs";
import { MdOutlineCandlestickChart, MdOutlineShowChart } from "react-icons/md";
import CandlestickChart from "./components/charts/candlestick-chart";

const OverviewFeature = () => {
  const priceMarketTabs = [
    { id: "Price", label: "Price" },
    { id: "Market cap", label: "Market cap" },
  ];

  const timeRangeTabs = [
    { id: "1D", label: "1 Day" },
    { id: "7D", label: "7D" },
    { id: "1M", label: "1M" },
    { id: "1Y", label: "1Y" },
    { id: "ALL", label: "All" },
    { id: "LOG", label: "LOG" },
    { id: "MORE", label: "..." },
  ];

  const typeChart = [
    { id: "Line", label: <MdOutlineShowChart size={20} /> },
    { id: "Candle", label: <MdOutlineCandlestickChart size={20} /> },
  ];

  return (
    <div
      style={{
        boxShadow: " 0px 12px 48px 0px #0000001F",
      }}
      className="p-[24px] rounded-[24px] bg-white space-y-[24px]"
    >
      <div className="flex justify-between">
        <SlideTabs tabs={priceMarketTabs} />
        <div className="flex gap-[8px]">
          <SlideTabs itemClassName="px-[20px]" tabs={timeRangeTabs} />
          <SlideTabs itemClassName="px-[6px]" tabs={typeChart} />
        </div>
      </div>
      <div data-lenis-prevent>
        <CandlestickChart />
      </div>
    </div>
  );
};

export default OverviewFeature;
