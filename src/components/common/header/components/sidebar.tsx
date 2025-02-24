import Bounded from "@/components/common/containers/bounded";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import Locales from "./locales";
import Currency from "./currency";
import LocaleSwitcher from "./locales-switcher";

const Sidebar = () => {
  type SampleDataType = {
    [key: string]: {
      label: string;
      value?: string | number;
      change?: {
        percentage: number;
        direction: string;
      };
      values?: {
        [key: string]: string;
      };
    };
  };

  const sampleData: SampleDataType = {
    cryptos: {
      label: "Cryptos",
      value: "2M+",
    },
    exchanges: {
      label: "Exchanges",
      value: 672,
    },
    market_cap: {
      label: "Market Cap",
      value: "$1.33T",
      change: {
        percentage: 0.26,
        direction: "up",
      },
    },
    "24h_volume": {
      label: "24h Vol",
      value: "$40.08B",
      change: {
        percentage: -3.38,
        direction: "down",
      },
    },
    dominance: {
      label: "Dominance",
      values: {
        BTC: "51.5%",
        ETH: "17.2%",
      },
    },
  };

  const generateColor = (percentage: number, type: "up" | "down") => {
    if (type === "up")
      return (
        <p
          className={cn(
            "text-[11px] font-medium flex items-center gap-0.5 text-[#2DA262]"
          )}
        >
          <ChevronUp className="w-3 h-3 fill-current" />
          {percentage}%
        </p>
      );
    if (type === "down")
      return (
        <p className="text-[11px] font-medium flex items-center gap-0.5 text-[#CB3232]">
          <ChevronDown className="w-3 h-3 fill-current" />
          {percentage}%
        </p>
      );
    return "text-white";
  };

  return (
    <Bounded className="flex items-center justify-between gap-6">
      <div className="flex items-center gap-6">
        {Object.keys(sampleData).map((item, index) => (
          <div key={index} className="flex items-center gap-1 text-white">
            <p className="text-[11px]">{sampleData[item].label}:</p>
            <p className="text-[11px] font-medium text-[#0077ED]">
              {sampleData[item].value}
            </p>
            {sampleData[item].change &&
              generateColor(
                sampleData[item].change.percentage,
                sampleData[item].change.direction as "up" | "down"
              )}
            {sampleData[item].values && (
              <p className="text-[11px] text-[#0077ED] flex items-center gap-1">
                {Object.keys(sampleData[item].values).map((key, index) => (
                  <span key={index}>
                    {key}: {sampleData[item].values![key]}
                  </span>
                ))}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="flex">
        <LocaleSwitcher />
        <Currency />
      </div>
    </Bounded>
  );
};

export default Sidebar;
