import { Button } from "@/components/ui/button";
import { SlidersVertical } from "lucide-react";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const FilterSpotMarkets = () => {
  return (
    <div className="flex items-center gap-2">
      <div
        style={{
          boxShadow: "0px 4px 6px -2px #10182808",
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)), linear-gradient(156.52deg, rgba(0, 0, 0, 0.4) 2.12%, rgba(0, 0, 0, 0.0001) 39%, rgba(0, 0, 0, 0.0001) 54.33%, rgba(0, 0, 0, 0.1) 93.02%)",
        }}
        className="p-[1px] relative rounded-full w-fit"
      >
        <div className="flex items-center gap-2 w-full h-full bg-white rounded-full p-[3px]">
          <Button className="rounded-full bg-black text-white px-6 py-1">
            Spot
          </Button>
          <Button variant="ghost" className="rounded-full  px-6 py-1">
            Perpetual
          </Button>
          <Button variant="ghost" className="rounded-full  px-6 py-1">
            Features
          </Button>
        </div>
      </div>
      <Button variant="border">
        All Pairs <IoMdArrowDropdown className="size-4" />
      </Button>
    </div>
  );
};

export default FilterSpotMarkets;
