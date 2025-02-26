"use client";

import { Pagination } from "@/components/common/pagination/pagination";
import PaginationInfo from "@/components/common/pagination/pagination-info";
import { DataTable } from "@/components/common/table/table-tanstack-core";
import { SlideTabs } from "@/components/common/tabs/slide-tabs";
import { Button } from "@/components/ui/button";
import { IoMdArrowDropdown } from "react-icons/io";
import { MarketColumns } from "./market-columns";

const MarketTable = () => {
  const marketData = [
    {
      rank: 1,
      exchange: "Binance",
      pair: "BTC/USDT",
      price: 219.78,
      change: -0.02,
      confidence: 396,
      confidenceLevel: "High",
      volume24h: "2,345,678,901",
      updated: "5 Hours Ago",
    },
    {
      rank: 2,
      exchange: "Bybit",
      pair: "BTC/USDT",
      price: 219.78,
      change: 0.02,
      confidence: 245,
      confidenceLevel: "Low",
      volume24h: "2,345,678,901",
      updated: "5 Hours Ago",
    },
    {
      rank: 3,
      exchange: "Coinbase",
      pair: "BTC/USDT",
      price: 219.78,
      change: -0.02,
      confidence: 678,
      confidenceLevel: "High",
      volume24h: "2,345,678,901",
      updated: "5 Hours Ago",
    },
    {
      rank: 4,
      exchange: "OKX",
      pair: "BTC/USDT",
      price: 219.78,
      change: 0.02,
      confidence: 512,
      confidenceLevel: "High",
      volume24h: "2,345,678,901",
      updated: "5 Hours Ago",
    },
    {
      rank: 5,
      exchange: "Bitget",
      pair: "BTC/USDT",
      price: 219.78,
      change: -0.02,
      confidence: 834,
      confidenceLevel: "High",
      volume24h: "2,345,678,901",
      updated: "5 Hours Ago",
    },
    {
      rank: 6,
      exchange: "KuCoin",
      pair: "BTC/USDT",
      price: 219.78,
      change: 0.02,
      confidence: 159,
      confidenceLevel: "Low",
      volume24h: "2,345,678,901",
      updated: "5 Hours Ago",
    },
    {
      rank: 7,
      exchange: "Gate.io",
      pair: "BTC/USDT",
      price: 219.78,
      change: -0.02,
      confidence: 402,
      confidenceLevel: "High",
      volume24h: "2,345,678,901",
      updated: "5 Hours Ago",
    },
    {
      rank: 8,
      exchange: "BingX",
      pair: "BTC/USDT",
      price: 219.78,
      change: 0.02,
      confidence: 723,
      confidenceLevel: "High",
      volume24h: "2,345,678,901",
      updated: "5 Hours Ago",
    },
  ];

  const tradingPlatformsTabs = [
    { id: "All", label: "All" },
    { id: "CEX", label: "CEX" },
    { id: "DEX", label: "DEX" },
  ];
  const tradeTypeTabs = [
    { id: "Spot", label: "Spot" },
    { id: "Perpetual", label: "Perpetual" },
    { id: "Futures", label: "Futures" },
  ];

  return (
    <div className="space-y-[26px]">
      <div className="flex items-center justify-between">
        <h2 className="text-28-28-700">Bitcoin Markets</h2>
        <div className="flex gap-[8px]">
          <SlideTabs tabs={tradingPlatformsTabs} />
          <SlideTabs tabs={tradeTypeTabs} />
          <Button
            styling={"rounded"}
            variant={"border"}
            className="!h-[34px] max-h-[34px] min-h-[34px] !text-12-18-600"
          >
            <span>All Pairs</span>
            <IoMdArrowDropdown />
          </Button>
        </div>
      </div>
      <DataTable columns={MarketColumns} data={marketData} />
      <div className="flex items-center justify-between">
        <PaginationInfo currentPage={1} perPage={10} totalItems={6201} />
        <Pagination
          page={1}
          totalPages={10}
          handlePagination={(page) => console.log(page)}
          handleNextPage={() => console.log("next")}
          handlePrevPage={() => console.log("prev")}
        />
      </div>
      <p className="text-14-21-400 italic text-gray-01">
        This page may contain affiliate links. CoinCap.Market may be compensated
        if you visit any affiliate links and you take certain actions such as
        signing up and transacting with these affiliate platforms. Please refer
        to{" "}
        <span className="text-blue-primary underline">
          Affiliate Disclosure
        </span>
      </p>
    </div>
  );
};

export default MarketTable;
