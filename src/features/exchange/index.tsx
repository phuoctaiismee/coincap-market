import React from "react";
import HeadingExchange from "./components/heading";
import InputIcon from "@/components/custom/inputs/input-icon";
import { Search } from "lucide-react";
import Bounded from "@/components/common/containers/bounded";

const ExchangesFeatures = () => {
  return (
    <div className="py-12 w-full">
      <Bounded className="flex w-full justify-between items-start">
        <HeadingExchange />
        <div className="w-[300px]">
          <InputIcon
            placeholder="Search coin..."
            className=" rounded-full  border-neutral-500"
            prefix={<Search className="w-4 h-4" />}
          />
        </div>
      </Bounded>
    </div>
  );
};

export default ExchangesFeatures;
