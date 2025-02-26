"use client";

import sample from "@/assets/images/NFTs/sample-nft.png";
import UpDownNumber from "@/features/overview/components/ui/up-down-number";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

export const TopNFTColumns: ColumnDef<any>[] = [
  {
    accessorKey: "rank",
    header: "#",
  },
  {
    accessorKey: "Name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-[12px]">
          <Image src={sample} alt="coin" width={36} height={36} />
          <div className="text-14-18-600">Bitcoin</div>
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
          <div className="text-14-18-600">1.2537 BTC</div>
          <UpDownNumber className="text-14-18-600" type="down" value="0.02%" />
        </div>
      );
    },
  },
  {
    accessorKey: "Floor price",
    header: "Floor price",
    cell: ({ row }) => {
      return <div className="text-14-18-600">0.49 BTC</div>;
    },
  },
  {
    accessorKey: "Avg. Price (24h)",
    header: "Avg. Price (24h)",
    cell: ({ row }) => {
      return (
        <div>
          <div className="text-14-18-600">1.2537 BTC</div>
          <UpDownNumber className="text-14-18-600" type="down" value="0.02%" />
        </div>
      );
    },
  },
  {
    accessorKey: "Sales (24h)",
    header: "Sales (24h)",
    cell: ({ row }) => {
      return <div className="text-14-18-600">22</div>;
    },
  },
  {
    accessorKey: "Assets",
    header: "Assets",
    cell: ({ row }) => {
      return <div className="text-14-18-600">3,454</div>;
    },
  },
];
