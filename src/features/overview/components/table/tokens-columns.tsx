"use client";

import bitcoinIcon from "@/assets/icons/bitcoin-icon.svg";
import { Progress } from "@/components/ui/progress";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Line, LineChart } from "recharts";
import UpDownNumber from "../ui/up-down-number";
import PopupActions from "./popup-actions";

export const tokenColumns: ColumnDef<any>[] = [
  {
    accessorKey: "no",
    header: "#",
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-[12px]">
          <Image src={bitcoinIcon} alt="coin" width={36} height={36} />
          <div>
            <div className="text-14-18-600">Bitcoin</div>
            <div className="text-12-18-500 text-neutral-07">BTC</div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: "Price & CHG",
    cell: ({ row }) => {
      return (
        <div>
          <div className="text-14-18-600">$40,000</div>
          <UpDownNumber className="text-14-20-600" type="up" value="0.02%" />
        </div>
      );
    },
  },
  {
    accessorKey: "7d",
    header: "7d%",
    cell: ({ row }) => {
      return (
        <UpDownNumber className="text-14-20-600" type="down" value="0.02%" />
      );
    },
  },
  {
    accessorKey: "marketCap",
    header: "Market Cap",
    cell: ({ row }) => {
      return <div className="text-14-18-600">$40,000</div>;
    },
  },
  {
    accessorKey: "volume",
    header: "Volume(24h)",
    cell: ({ row }) => {
      return (
        <div>
          <div className="text-14-18-600">$40,000</div>
          <div className="text-12-18-500 text-neutral-07 font-[600]">
            $4,000 BTC
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "circulating",
    header: "Circulating",
    cell: ({ row }) => {
      return (
        <div className="space-y-[6px] w-fit">
          <div className="text-14-18-600">$40,000</div>
          <Progress value={33} className="h-[6px] w-[171px]" />
        </div>
      );
    },
  },
  {
    accessorKey: "last7Days",
    header: "Last 7 Days",
    cell: ({ row }) => {
      const red_chart = {
        status: Math.random() > 0.5 ? "up" : "down",
        data: Array.from({ length: 10 }, (_, i) => ({
          date: `2024-01-${String(i + 1).padStart(2, "0")}`,
          volume: Math.floor(Math.random() * 150) + 1,
        })),
      };

      return (
        <div className="flex items-center gap-[8px]">
          <LineChart width={120} height={50} data={red_chart.data}>
            <Line
              dataKey="volume"
              type="monotone"
              stroke={red_chart.status === "down" ? "#E53E3E" : "#00C49F"}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
          <PopupActions />
        </div>
      );
    },
  },
];
