"use client";
import Bounded from "@/components/common/containers/bounded";
import React from "react";
import HeadingExchange from "../../components/heading";
import InputIcon from "@/components/custom/inputs/input-icon";
import { Search } from "lucide-react";
import PaginationInfo from "@/components/common/pagination/pagination-info";
import TableSpot from "./components/table";
import { Pagination } from "@/components/common/pagination/pagination";
import TabsExchange from "../../components/tabs";

const ExchangeSpotFeatures = () => {
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
            <div className="overflow-x-auto scrollbar-none">
              <TabsExchange />
            </div>
            <div className="hidden lg:block">
              <PaginationInfo currentPage={1} perPage={10} totalItems={6201} />
            </div>
          </div>
        </div>
        <TableSpot />

        <div className="block lg:hidden">
          <PaginationInfo currentPage={1} perPage={10} totalItems={6201} />
        </div>

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

export default ExchangeSpotFeatures;
