import { DataTable } from "@/components/common/table/table-tanstack-core";
import { formatCurrency } from "@/utils/currency";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

const TableDerivatives = () => {
  const data = [
    {
      exchange: {
        name: "Binance",
        logo: "/images/binance.png",
      },
      volume: 1789012345,
      market_fee: 0.22,
      tax_fee: 0.04,
      open_internet: 24035835935,
      no_market: 442,
      lauched: "2024-01-01",
    },
    ...Array.from({ length: 10 }, (_, index) => ({
      exchange: {
        name: `Exchange ${index + 1}`,
        logo: `/images/binance.png`,
      },
      volume: Math.floor(Math.random() * 2000000000) + 500000000,
      market_fee: Math.floor(Math.random() * 1000),
      tax_fee: Math.floor(Math.random() * 1000),
      open_internet: Math.floor(Math.random() * 200000000),
      no_market: Math.floor(Math.random() * 10000),
      lauched: "2024-01-01",
    })),
  ];

  const columns: ColumnDef<any>[] = [
    {
      header: "Crypto",
      accessorKey: "crypto",
      cell: ({ row }) => {
        return (
          <div className="flex items-center gap-2">
            <div className="relative size-9 rounded-full overflow-hidden">
              <Image
                src={row.original.exchange.logo}
                alt={row.original.exchange.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-neutral-01 font-medium ">
                {row.original.exchange.name}
              </p>
            </div>
          </div>
        );
      },
    },
    {
      header: "Volume(24h)",
      accessorKey: "volume",
      cell: ({ row }) => {
        return (
          <p className="text-sm text-neutral-01 font-medium">
            {formatCurrency({ value: row.original.volume })}
          </p>
        );
      },
    },
    {
      header: "Market Fees",
      accessorKey: "market_fee",
      cell: ({ row }) => {
        return (
          <p className="text-sm text-neutral-01 font-medium">
            {row.original.market_fee}%
          </p>
        );
      },
    },
    {
      header: "Tax Fees",
      accessorKey: "tax_fee",
      cell: ({ row }) => {
        return (
          <p className="text-sm text-neutral-01 font-medium">
            {row.original.tax_fee}%
          </p>
        );
      },
    },
    {
      header: "Open Internet",
      accessorKey: "open_internet",
      cell: ({ row }) => {
        return (
          <p className="text-sm text-neutral-01 font-medium flex flex-col gap-0.5">
            {formatCurrency({ value: row.original.open_internet })}
          </p>
        );
      },
    },
    {
      header: "No. Markets",
      accessorKey: "no_market",
      cell: ({ row }) => {
        return (
          <p className="text-sm text-neutral-01 font-medium">
            {row.original.no_market}
          </p>
        );
      },
    },
    {
      header: "Launched",
      accessorKey: "lauched",
      cell: ({ row }) => {
        return (
          <p className="text-sm text-neutral-01 font-medium">
            {row.original.lauched}
          </p>
        );
      },
    },
  ];
  return <DataTable columns={columns} data={data} />;
};

export default TableDerivatives;
