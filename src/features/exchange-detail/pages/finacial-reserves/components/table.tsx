import { useMemo } from "react";
import { DataTable } from "@/components/common/table/table-tanstack-core";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { formatCurrency } from "@/utils/currency";
import { formatThousandsWithCommas } from "@/utils/text";

const TableFinancialReserves = () => {
  const data = useMemo(
    () => [
      {
        token: {
          name: "Bitcoin",
          logo: "/logos/bitcoin.svg",
          code: "1DcT5W...8ahDAH",
        },
        balance: 2789012356,
        price: 23456789012,
        value: 23456789012,
      },
      {
        token: {
          name: "Ethereum",
          logo: "/logos/ethereum.svg",
          code: "1DcT5W...8ahDAH",
        },
        balance: 2789012356,
        price: 23456789012,
        value: 23456789012,
      },
      {
        token: {
          name: "Tether",
          logo: "/logos/tether.svg",
          code: "1DcT5W...8ahDAH",
        },
        balance: 2789012356,
        price: 23456789012,
        value: 23456789012,
      },
      {
        token: {
          name: "Polygon",
          logo: "/logos/polygon.svg",
          code: "1DcT5W...8ahDAH",
        },
        balance: 2789012356,
        price: 23456789012,
        value: 23456789012,
      },
    ],
    []
  );
  const columns: ColumnDef<any>[] = [
    {
      header: "Token",
      accessorKey: "token",
      cell: ({ row }) => {
        return (
          <div className="flex items-center gap-2">
            <div className="relative size-9 rounded-full overflow-hidden">
              <Image
                src={row.original.token.logo}
                alt={row.original.token.name}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-neutral-01 font-medium flex items-center gap-1">
                
              {row.original.token.name}
            </p>
          </div>
        );
      },
    },
    {
      header: "Balance",
      accessorKey: "balance",
      cell: ({ row }) => {
        return (
          <p className="text-sm text-neutral-01 font-medium">
            {formatThousandsWithCommas(row.original.balance)}
          </p>
        );
      },
    },
    {
      header: "Price",
      accessorKey: "price",
    },
    {
      header: "Value",
      accessorKey: "value",
    },
  ];

  return <DataTable columns={columns} data={data} />;
};

export default TableFinancialReserves;
