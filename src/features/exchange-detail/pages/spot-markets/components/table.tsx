import { useMemo } from "react";
import { DataTable } from "@/components/common/table/table-tanstack-core";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { formatCurrency } from "@/utils/currency";
import { formatThousandsWithCommas } from "@/utils/text";

const TableSpotMarkets = () => {
  const data = useMemo(
    () => [
      {
        token: {
          name: "Bitcoin",
          logo: "/logos/bitcoin.svg",
          code: "BTC",
        },
        pair: "BTC/USDT",
        price: 23456789012,
        plusdepth: 43456789012,
        minusdepth: 23456789012,
        volume: 23456789012,
        volumePercent: 4.5,
        update: "Recently",
      },
      {
        token: {
          name: "Ethereum",
          logo: "/logos/ethereum.svg",
          code: "ETH",
        },
        pair: "BTC/USDT",
        price: 23456789012,
        plusdepth: 43456789012,
        minusdepth: 23456789012,
        volume: 23456789012,
        volumePercent: 4.5,
        update: "Recently",
      },
      {
        token: {
          name: "Tether",
          logo: "/logos/tether.svg",
          code: "USDT",
        },
        pair: "BTC/USDT",
        price: 23456789012,
        plusdepth: 43456789012,
        minusdepth: 23456789012,
        volume: 23456789012,
        volumePercent: 4.5,
        update: "Recently",
      },
      {
        token: {
          name: "Polygon",
          logo: "/logos/polygon.svg",
          code: "POL",
        },
        pair: "BTC/USDT",
        price: 23456789012,
        plusdepth: 43456789012,
        minusdepth: 23456789012,
        volume: 23456789012,
        volumePercent: 4.5,
        update: "Recently",
      },
    ],
    []
  );
  const columns: ColumnDef<any>[] = [
    {
      header: "Name",
      accessorKey: "token",
      cell: ({ row }) => {
        return (
          <div className="flex items-center gap-2">
            <div className="relative size-9 rounded-full overflow-hidden">
              <Image
                src={row.original.token.logo}
                alt={row.original.token.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-neutral-01 font-medium ">
                {row.original.token.name}
              </p>
              <p className="text-xs text-neutral-02 font-normal flex items-center gap-1 text-[#7C7C7C]">
                {row.original.token.code}
              </p>
            </div>
          </div>
        );
      },
    },
    {
      header: "Pair",
      accessorKey: "pair",
      cell: ({ row }) => {
        return (
          <p className="text-sm text-neutral-01 font-medium flex items-center gap-1">
            {row.original.pair}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_362_17418"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="20"
                height="20"
              >
                <rect width="20" height="20" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_362_17418)">
                <path
                  d="M6 11.5V7.25C6 6.8375 6.14687 6.48438 6.44062 6.19063C6.73438 5.89688 7.0875 5.75 7.5 5.75H14.125L12.4375 4.0625L13.5 3L17 6.5L13.5 10L12.4375 8.95833L14.125 7.25H7.5V11.5H6ZM4.5 17C4.0875 17 3.73437 16.8531 3.44062 16.5594C3.14687 16.2656 3 15.9125 3 15.5V4H4.5V15.5H14.5V12H16V15.5C16 15.9125 15.8531 16.2656 15.5594 16.5594C15.2656 16.8531 14.9125 17 14.5 17H4.5Z"
                  fill="#6D6D6D"
                />
              </g>
            </svg>
          </p>
        );
      },
    },
    {
      header: "Price",
      accessorKey: "price",
      cell: ({ row }) => {
        return (
          <p className="text-sm text-neutral-01 font-medium">
            {formatCurrency({
              value: row.original.price,
            })}
          </p>
        );
      },
    },
    {
      header: "+2% Depth",
      accessorKey: "plusdepth",
      cell: ({ row }) => {
        return (
          <p className="text-sm text-neutral-01 font-medium">
            {formatCurrency({
              value: row.original.plusdepth,
            })}
          </p>
        );
      },
    },
    {
      header: "-2% Depth",
      accessorKey: "minusdepth",
      cell: ({ row }) => {
        return (
          <p className="text-sm text-neutral-01 font-medium">
            {formatCurrency({
              value: row.original.minusdepth,
            })}
          </p>
        );
      },
    },
    {
      header: "Volume",
      accessorKey: "volume",
      cell: ({ row }) => {
        return (
          <p className="text-sm text-neutral-01 font-medium">
            {formatCurrency({
              value: row.original.volume,
            })}
          </p>
        );
      },
    },
    {
      header: "Volume %",
      accessorKey: "volumePercent",
      cell: ({ row }) => {
        return (
          <p className="text-sm text-neutral-01 font-medium">
            {row.original.volumePercent}%
          </p>
        );
      },
    },
    {
      header: "Update",
      accessorKey: "update",
      cell: ({ row }) => {
        return <p className="text-sm text-neutral-01 font-medium">{row.original.update}</p>;
      },
    },
  ];

  return <DataTable columns={columns} data={data} showIndex showScrollBar />;
};

export default TableSpotMarkets;
