"use client";
import Heading from "@/components/common/typography/heading";
import React from "react";
import TableSpotMarkets from "./table";
import PaginationInfo from "@/components/common/pagination/pagination-info";
import { Pagination } from "@/components/common/pagination/pagination";
import FilterSpotMarkets from "./filter";

const ExchangeFinancialReservesContent = () => {
  return (
    <div className="flex flex-col gap-9">
      <div className="flex items-center justify-between">
        <Heading size="xs">Spot Markets</Heading>
        <FilterSpotMarkets />
      </div>
      <TableSpotMarkets />
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
      <p className="text-sm italic text-[#636363]">
        Only wallets with &gt; 500,000 USD balance are shown
        <br />
        <span className="text-primary">
          * Balances from these wallets may be delayed
        </span>
      </p>
    </div>
  );
};

export default ExchangeFinancialReservesContent;
