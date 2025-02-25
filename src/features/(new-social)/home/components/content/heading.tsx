import { SearchInput } from "@/features/(new-social)/shared-components";
import React from "react";

export const HomeHeading = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-4">
      <div className="flex justify-between items-center gap-6">
        <div className="flex-[3]">
          <p className="text-[#6D6D6D] text-base font-semibold">
            CoinCap.Market community brings you the best experience of
            information, social media, latest trends globally and always update
            the latest current trends.
          </p>
        </div>
        <div className="flex-1">
          <SearchInput />
        </div>
      </div>

      <p className="text-4xl font-semibold leading-[2.875rem]">
        <span className="text-[#101828]">CoinCap.Market</span>{" "}
        <span className="!text-blueDarkPrimary">News</span>
      </p>
    </div>
  );
};
