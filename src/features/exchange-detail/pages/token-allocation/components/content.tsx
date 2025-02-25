"use client";
import Heading from "@/components/common/typography/heading";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import React from "react";
import PaginationInfo from "@/components/common/pagination/pagination-info";
import { Pagination } from "@/components/common/pagination/pagination";
import Image from "next/image";

const ExchangeTokenAllocationContent = () => {
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
      <div className="px-20 py-4 rounded-3xl shadow-primary flex items-center justify-center">
        <div className="relative w-full h-[440px]">
          <Image
            src="/images/pie-chart.png"
            alt="token-allocation-chart"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <p className="text-sm italic text-[#636363]">
        All information and data relating to the holdings in the third-party
        wallet addresses are based on public third party information.
        CoinCap.Market does not confirm or verify the accuracy or timeliness of
        such information and data. <br /> CoinCap.Market shall have no
        responsibility or liability for this public third party information and
        data. CoinCap.Market shall have no duty to review, confirm, verify or
        otherwise perform any inquiry or investigation as to the completeness,
        accuracy, sufficiency, integrity, reliability or timeliness of any such
        information or data provided.
      </p>
    </div>
  );
};

export default ExchangeTokenAllocationContent;
