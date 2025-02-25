import { DataTable } from "@/components/common/table/table-tanstack-core";
import { formatCurrency } from "@/utils/currency";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import Image from "next/image";
import { Line, LineChart } from "recharts";

const TableDEXSpot = () => {
  const data = [
    {
      networks: {
        name: "PancakeSwap v3 (BSC)",
        logo: "https://s3-alpha-sig.figma.com/img/df50/a78d/eb0c304ef4a296dae018344170852ec7?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Q2LKgnTAhZg-OpyK17djRh916~UF85NGlpH1VK9qRtP~aGbX1oF8speiNP-w1y78zipNNs~iUwfqhmfSi9dkWQTMxyyysU9YKrdsYRIAmkavlUPTqlC5b1CR~p~46P3J85XuS3GD7~qmpo6N~SQjHyJiA04IUVTRn0guda1rVmT4RipWkw~4TOfVitlCHLIcjJKCiLNQctkBBbkF0wSwuXl5bojJ6RPgK36w5qZMkgnaeamXl7CL5cd85Wg~rtV-cjtggeai4Yn7YYghFdLasMsAKTm7mMPAccB8Gz-fedA1x8uCMlO83oIX3CtQ0~myq~2KWiOJLfPOE7Z5c1YXGQ__",
      },
      volume: 1789012345,
      mkt_share: 15.524,
      no_markets: 7546,
      type: "--",
      launched: "2024-01-01",

      volume_graph: {
        status: "up",
        data: Array.from({ length: 10 }, (_, i) => ({
          date: `2024-01-${String(i + 1).padStart(2, "0")}`,
          volume: Math.floor(Math.random() * 150) + 1,
        })),
      },
    },
    ...Array.from({ length: 10 }, (_, index) => ({
      networks: {
        name: `Network ${index + 1}`,
        logo: `https://s3-alpha-sig.figma.com/img/df50/a78d/eb0c304ef4a296dae018344170852ec7?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Q2LKgnTAhZg-OpyK17djRh916~UF85NGlpH1VK9qRtP~aGbX1oF8speiNP-w1y78zipNNs~iUwfqhmfSi9dkWQTMxyyysU9YKrdsYRIAmkavlUPTqlC5b1CR~p~46P3J85XuS3GD7~qmpo6N~SQjHyJiA04IUVTRn0guda1rVmT4RipWkw~4TOfVitlCHLIcjJKCiLNQctkBBbkF0wSwuXl5bojJ6RPgK36w5qZMkgnaeamXl7CL5cd85Wg~rtV-cjtggeai4Yn7YYghFdLasMsAKTm7mMPAccB8Gz-fedA1x8uCMlO83oIX3CtQ0~myq~2KWiOJLfPOE7Z5c1YXGQ__`,
      },
      volume: Math.floor(Math.random() * 2000000000) + 500000000,
      mkt_share: Math.floor(Math.random() * 1000),
      no_markets: Math.floor(Math.random() * 10000),
      type: "Swap",
      launched: "2024-01-01",
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
      header: "Name",
      accessorKey: "networks",
      cell: ({ row }) => {
        return (
          <div className="flex items-center gap-2">
            <div className="relative size-9 rounded-full overflow-hidden">
              <Image
                src={row.original.networks.logo}
                alt={row.original.networks.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-neutral-01 font-medium ">
                {row.original.networks.name}
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
            {formatCurrency({
              value: row.original.volume,
            })}
          </p>
        );
      },
    },
    {
      header: "% Mkt Share",
      accessorKey: "mkt_share",
      cell: ({ row }) => {
        return (
          <p className="text-sm text-neutral-01 font-medium">
            {row.original.mkt_share}%
          </p>
        );
      },
    },
    {
      header: "No. Markets",
      accessorKey: "no_markets",
      cell: ({ row }) => {
        return (
          <p className="text-sm text-neutral-01 font-medium">
            {row.original.no_markets}
          </p>
        );
      },
    },
    {
      header: "Type",
      accessorKey: "type",
      cell: ({ row }) => {
        return (
          <p className="text-sm text-neutral-01 font-medium">
            {row.original.type}
          </p>
        );
      },
    },
    {
      header: "Launched",
      accessorKey: "launched",
      cell: ({ row }) => {
        return (
          <p className="text-sm text-neutral-01 font-medium">
            {format(new Date(row.original.launched), "MMM yyyy")}
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

export default TableDEXSpot;
