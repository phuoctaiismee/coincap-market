"use client";
import VisionAppleBorder from "@/components/common/containers/vision-apple-border";
import BaseModal from "@/components/common/modal/base-modal";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ChevronDown, LucideColumns3, X } from "lucide-react";
import React, { useState } from "react";

const filters = [
  {
    name: "Price",
    fillter_keys: [
      "Price in BTC",
      "Price in ETH",
      "ATH",
      "24h high",
      "24h low",
      "From ALT",
      "From ATL",
    ],
  },
  {
    name: "Price change",
    fillter_keys: ["1h%", "24h%", "7d%", "30d%", "90d%", "YTD%", "24h in BTC"],
  },
  {
    name: "Market cap",
    fillter_keys: ["Market cap", "Fully diluted Mcap"],
  },
  {
    name: "Volume",
    fillter_keys: [
      "Volume 1h",
      "Volume 24h",
      "Volume 7d",
      "Volume 30d",
      "Volume 90d",
      "Volume YTD",
      "Volume in BTC",
    ],
  },
];

const FilterColumn = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const handleSelectFilter = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters((prev) => prev.filter((f) => f !== filter));
    } else {
      setSelectedFilters((prev) => [...prev, filter]);
    }
  };
  return (
    <BaseModal
      title="Filters"
      trigger={
        <Button variant={"border"}>
          <LucideColumns3 />
          Columns
        </Button>
      }
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <Label className="text-base text-neutral-04 font-normal">
            Add, delete and sort metrics just how you need it
          </Label>
          <VisionAppleBorder>
            <Button variant={"ghost"} className="bg-vision-pro-bg rounded-full">
              Classic
              <ChevronDown className="size-4" />
            </Button>
          </VisionAppleBorder>
        </div>
        {selectedFilters.length > 0 && (
          <div className="flex items-center justify-end text-neutral-04">
            <span className="text-primary">{selectedFilters.length}</span>
            /12 selected
          </div>
        )}
        {selectedFilters.length > 0 && (
          <VisionAppleBorder className="rounded-3xl">
            <div className="flex items-center flex-wrap gap-2 p-4 bg-[#0077ED1F] rounded-3xl">
              {selectedFilters.map((filter, index) => (
                <div
                  key={index}
                  className="bg-neutral-09 rounded-full px-3 py-1.5 flex items-center gap-2"
                >
                  {filter}
                  <Button
                    size="icon"
                    className="!size-5 rounded-full"
                    onClick={() => handleSelectFilter(filter)}
                  >
                    <X className="size-4" />
                  </Button>
                </div>
              ))}
            </div>
          </VisionAppleBorder>
        )}
        {filters.map((filter) => (
          <React.Fragment key={filter.name}>
            <div key={filter.name} className="flex items-start gap-4">
              <p className="text-neutral-04 text-base font-medium whitespace-nowrap">
                {filter.name}
              </p>
              <div className="flex items-center flex-wrap justify-end">
                {filter.fillter_keys.map((key) => (
                  <div
                    key={key}
                    className="bg-neutral-09 rounded-full px-3 py-1.5 flex items-center gap-2"
                  >
                    <Button
                      variant={"ghost"}
                      className={cn(
                        "rounded-full bg-[#F8F8F8] text-neutral-01 text-base",
                        {
                          "opacity-50": selectedFilters.includes(key),
                        }
                      )}
                      onClick={() => handleSelectFilter(key)}
                    >
                      {key}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            {/* Divide */}
            <div className="w-full h-[1px] bg-neutral-06" />
          </React.Fragment>
        ))}
      </div>
    </BaseModal>
  );
};

export default FilterColumn;
