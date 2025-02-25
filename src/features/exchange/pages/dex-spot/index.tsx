'use client'
import Bounded from "@/components/common/containers/bounded";
import React from "react";
import HeadingExchange from "@/features/exchange/components/heading";
import InputIcon from "@/components/custom/inputs/input-icon";
import { Search } from "lucide-react";
import TabsExchange from "@/features/exchange/components/tabs";
import PaginationInfo from "@/components/common/pagination/pagination-info";
import { Pagination } from "@/components/common/pagination/pagination";
import TableDEXSpot from "./components/table";
import FillterDEXSpot from "./components/fillter";

const ExchangeDEXSpotFeatures = () => {
  return (
    <div className="py-12 w-full">
      <Bounded className="flex w-full flex-col gap-9">
        <div className="flex flex-col w-full">
          <div className="flex justify-between w-full items-start">
            <HeadingExchange />
            <div className="w-[300px]">
              <InputIcon
                placeholder="Search coin..."
                className=" rounded-full  border-neutral-500"
                prefix={<Search className="w-4 h-4" />}
              />
            </div>
          </div>
          <div className="flex justify-between w-full items-center">
            <TabsExchange />
            <PaginationInfo currentPage={1} perPage={10} totalItems={6201} />
          </div>
        </div>
        <FillterDEXSpot />
        <TableDEXSpot />
        <Pagination
          page={1}
          totalPages={10}
          handlePagination={() => {}}
          handleNextPage={() => {}}
          handlePrevPage={() => {}}
        />
      </Bounded>
    </div>
  );
};

export default ExchangeDEXSpotFeatures;
