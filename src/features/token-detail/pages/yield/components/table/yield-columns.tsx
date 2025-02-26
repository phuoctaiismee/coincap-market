"use client";

import bitcoinIcon from "@/assets/icons/bitcoin-icon.svg";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

export const YieldColumns: ColumnDef<any>[] = [
  {
    accessorKey: "rank",
    header: "#",
  },
  {
    accessorKey: "Service Provider",
    header: "Service Provider",
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
    accessorKey: "Net APY",
    header: "Net APY",
    cell: ({ row }) => {
      return <div className="text-14-18-600">0.03% - 0.28%</div>;
    },
  },
  {
    accessorKey: "Yield Type",
    header: "Yield Type",
    cell: ({ row }) => {
      return <div className="text-14-18-600">Earn (Flexi)</div>;
    },
  },
  {
    accessorKey: "DeFi/CeFi",
    header: "DeFi/CeFi",
    cell: ({ row }) => {
      return <div className="text-14-18-600 text-gray-03">CeFi</div>;
    },
  },
];
