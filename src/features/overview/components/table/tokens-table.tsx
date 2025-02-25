"use client";

import { Pagination } from "@/components/common/pagination/pagination";
import PaginationInfo from "@/components/common/pagination/pagination-info";
import { DataTable } from "@/components/common/table/table-tanstack-core";
import { tokenColumns } from "./tokens-columns";

const TokenTables = () => {
  const tokenData = [
    {
      no: 1,
      name: "Bitcoin",
      price: "$219.78",
      change: "↓ 0.02%",
      "7d": "↓ 0.02%",
      marketCap: "$7,890,123,456",
      volume: "$2,345,678,901",
      circulating: "$293.01 BTC",
      last7Days: "red_chart", // Giả lập biểu đồ
    },
    {
      no: 2,
      name: "Ethereum",
      price: "$219.78",
      change: "↑ 0.02%",
      "7d": "↓ 0.02%",
      marketCap: "$7,890,123,456",
      volume: "$2,345,678,901",
      circulating: "$293.01 ETH",
      last7Days: "red_chart",
    },
    {
      no: 3,
      name: "Tether",
      price: "$219.78",
      change: "↓ 0.02%",
      "7d": "↑ 0.07%",
      marketCap: "$7,890,123,456",
      volume: "$2,345,678,901",
      circulating: "$293.01 USDT",
      last7Days: "green_chart",
    },
    {
      no: 4,
      name: "Polygon",
      price: "$219.78",
      change: "↑ 0.02%",
      "7d": "↑ 0.02%",
      marketCap: "$7,890,123,456",
      volume: "$2,345,678,901",
      circulating: "$293.01 MATIC",
      last7Days: "green_chart",
    },
    {
      no: 5,
      name: "Solana",
      price: "$219.78",
      change: "↓ 0.02%",
      "7d": "↓ 0.02%",
      marketCap: "$7,890,123,456",
      volume: "$2,345,678,901",
      circulating: "$293.01 SOL",
      last7Days: "red_chart",
    },
    {
      no: 6,
      name: "Avalanche",
      price: "$219.78",
      change: "↑ 0.02%",
      "7d": "↑ 0.02%",
      marketCap: "$7,890,123,456",
      volume: "$2,345,678,901",
      circulating: "$293.01 AVAX",
      last7Days: "green_chart",
    },
    {
      no: 7,
      name: "TRON",
      price: "$219.78",
      change: "↓ 0.02%",
      "7d": "↑ 0.07%",
      marketCap: "$7,890,123,456",
      volume: "$2,345,678,901",
      circulating: "$293.01 TRON",
      last7Days: "green_chart",
    },
    {
      no: 8,
      name: "Dogecoin",
      price: "$219.78",
      change: "↑ 0.02%",
      "7d": "↑ 0.02%",
      marketCap: "$7,890,123,456",
      volume: "$2,345,678,901",
      circulating: "$293.01 DOGE",
      last7Days: "green_chart",
    },
  ];

  return (
    <div className="space-y-[26px]">
      <DataTable columns={tokenColumns} data={tokenData} />
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

export default TokenTables;
