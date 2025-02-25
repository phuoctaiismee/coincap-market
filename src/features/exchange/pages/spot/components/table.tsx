import { DataTable } from "@/components/common/table/table-tanstack-core";
import { formatCurrency } from "@/utils/currency";
import { formatThousandsWithCommas } from "@/utils/text";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { BiInfoCircle } from "react-icons/bi";
import { Line, LineChart } from "recharts";

const TableSpot = () => {
  const data = [
    {
      crypto: {
        name: "Binance",
        logo: "/images/binance.png",
      },
      volume: 1789012345,
      avg_liquidity: 798,
      weekly_visits: 123456789,
      market_cap: 8293,
      coin_price: 8249,
      fiat_supported: ["USD", "EUR", "GBP", "JPY", "CNY", "AUD", "CAD"],
      volume_graph: {
        status: "up",
        data: Array.from({ length: 10 }, (_, i) => ({
          date: `2024-01-${String(i + 1).padStart(2, "0")}`,
          volume: Math.floor(Math.random() * 150) + 1,
        })),
      },
    },
    ...Array.from({ length: 10 }, (_, index) => ({
      crypto: {
        name: `Exchange ${index + 1}`,
        logo: `/images/binance.png`,
      },
      volume: Math.floor(Math.random() * 2000000000) + 500000000,
      avg_liquidity: Math.floor(Math.random() * 1000),
      weekly_visits: Math.floor(Math.random() * 200000000),
      market_cap: Math.floor(Math.random() * 10000),
      coin_price: Math.floor(Math.random() * 10000),
      fiat_supported: ["USD", "EUR", "GBP", "JPY", "CNY"].slice(
        0,
        Math.floor(Math.random() * 5) + 1
      ),
      volume_graph: {
        status: Math.random() > 0.5 ? "up" : "down",
        data: Array.from({ length: 10 }, (_, i) => ({
          date: `2024-01-${String(i + 1).padStart(2, "0")}`,
          volume: Math.floor(Math.random() * 150) + 1,
        })),
      },
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
                src={row.original.crypto.logo}
                alt={row.original.crypto.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-neutral-01 font-medium ">
                {row.original.crypto.name}
              </p>
            </div>
          </div>
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
      header: "Avg. Liquidity",
      accessorKey: "avg_liquidity",
      cell: ({ row }) => {
        return (
          <p className="text-sm text-neutral-01 font-medium">
            {row.original.avg_liquidity}
          </p>
        );
      },
    },
    {
      header: "Weekly Visits",
      accessorKey: "weekly_visits",
      cell: ({ row }) => {
        return (
          <p className="text-sm text-neutral-01 font-medium">
            {formatThousandsWithCommas(row.original.weekly_visits)}
          </p>
        );
      },
    },
    {
      header: "#Markets",
      accessorKey: "market_cap",
      cell: ({ row }) => {
        return (
          <p className="text-sm text-neutral-01 font-medium">
            {row.original.market_cap}
          </p>
        );
      },
    },
    {
      header: "#Coins",
      accessorKey: "coin_price",
      cell: ({ row }) => {
        return (
          <p className="text-sm text-neutral-01 font-medium">
            {row.original.coin_price}
          </p>
        );
      },
    },
    {
      header: "Fiat Supported",
      accessorKey: "fiat_supported",
      cell: ({ row }) => {
        return (
          <p className="text-sm text-neutral-01 font-medium flex flex-col gap-0.5">
            {row.original.fiat_supported.slice(0, 3).join(", ")}
            {row.original.fiat_supported.length > 3 && (
              <span className="flex items-center gap-1">
                <span className="text-xs text-neutral-04">
                  {row.original.fiat_supported.length > 3
                    ? `and +${row.original.fiat_supported.length - 3} more`
                    : ""}
                </span>
                <BiInfoCircle className="text-neutral-04" />
              </span>
            )}
          </p>
        );
      },
    },
    {
      header: "Volume Graph",
      accessorKey: "volume_graph",
      cell: ({ row }) => {
        return (
          <LineChart
            width={120} // Điều chỉnh kích thước theo yêu cầu
            height={50}
            data={row.original.volume_graph.data}
          >
            <Line
              dataKey="volume"
              type="monotone"
              stroke={
                row.original.volume_graph.status === "down"
                  ? "#E53E3E"
                  : "#00C49F"
              } // Màu đỏ như hình
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        );
      },
    },
  ];

  return <DataTable columns={columns} data={data} showIndex />;
};

export default TableSpot;
