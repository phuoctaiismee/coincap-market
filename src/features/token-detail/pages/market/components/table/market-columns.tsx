"use client";

import bitcoinIcon from "@/assets/icons/bitcoin-icon.svg";
import shareIcon from "@/assets/icons/share-icon.svg";
import { Button } from "@/components/ui/button";
import UpDownNumber from "@/features/overview/components/ui/up-down-number";
import UpDownTag from "@/features/overview/components/ui/up-down-tag";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { IoMenuSharp } from "react-icons/io5";

export const MarketColumns: ColumnDef<any>[] = [
  {
    accessorKey: "rank",
    header: "#",
  },
  {
    accessorKey: "Exchange",
    header: "Exchange",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-[12px]">
          <Image src={bitcoinIcon} alt="coin" width={36} height={36} />
          <div className="text-14-18-600">Bitcoin</div>
        </div>
      );
    },
  },
  {
    accessorKey: "Pair",
    header: "Pair",
    cell: ({ row }) => {
      return (
        <div className="flex gap-[6px]">
          <div className="text-14-18-600 text-blue-primary">BTC/USDT</div>
          <Image src={shareIcon} alt="coin" width={14} height={14} />
        </div>
      );
    },
  },
  {
    accessorKey: "Price & CHG",
    header: "Price & CHG",
    cell: ({ row }) => {
      return (
        <div className="text-14-18-600">
          <div>$219.78</div>
          <UpDownNumber type="down" value="0.02%" />
        </div>
      );
    },
  },
  {
    accessorKey: "Confidence",
    header: "Confidence",
    cell: ({ row }) => {
      return (
        <div>
          <div className="text-14-18-600">396</div>
          <UpDownTag type="up" value="High" />
        </div>
      );
    },
  },
  {
    accessorKey: "Volume(24h)",
    header: "Volume(24h)",
    cell: ({ row }) => {
      return (
        <div>
          <div className="text-14-18-600">$2,345,678,901</div>
          <div className="text-12-18-600 text-neutral-07">14,253 BTC</div>
        </div>
      );
    },
  },
  {
    accessorKey: "Updated",
    header: "Updated",
    cell: ({ row }) => {
      return (
        <div className="text-14-18-600 text-gray-03 flex items-center gap-[10px]">
          <span>5 hours ago</span>
          <Button size={"icon"} variant={"ghost"}>
            <IoMenuSharp />
          </Button>
        </div>
      );
    },
  },
];
