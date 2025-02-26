"use client";

import { Pagination } from "@/components/common/pagination/pagination";
import PaginationInfo from "@/components/common/pagination/pagination-info";
import { DataTable } from "@/components/common/table/table-tanstack-core";
import { TopNFTColumns } from "./top-nft-columns";

const TopNFTTable = () => {
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

  const financeTypeTabs = [
    { id: "CeFi", label: "CeFi" },
    { id: "DeFi", label: "DeFi" },
    { id: "All", label: "All" },
  ];

  return (
    <div className="space-y-[26px]">
      <DataTable columns={TopNFTColumns} data={marketData} />
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
    </div>
  );
};

export default TopNFTTable;
