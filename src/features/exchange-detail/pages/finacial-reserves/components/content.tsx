'use client'
import Heading from "@/components/common/typography/heading";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import React from "react";
import TableFinancialReserves from "./table";
import PaginationInfo from "@/components/common/pagination/pagination-info";
import { Pagination } from "@/components/common/pagination/pagination";

const ExchangeFinancialReservesContent = () => {
  return (
    <div className="flex flex-col gap-9">
      <div className="flex items-center justify-between">
        <Heading size="xs">
          Total: <span className="text-primary">$154,212,401,490.86</span>
        </Heading>
        <div className="flex items-center uppercase text-xs font-medium text-[#7c7c7c]">
          Updateed at 9:04:12 AM
          <Button variant="ghost" size="icon" className="text-primary !size-6">
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <TableFinancialReserves />
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
        <span className="text-primary">* Balances from these wallets may be delayed</span>
      </p>
    </div>
  );
};

export default ExchangeFinancialReservesContent;
