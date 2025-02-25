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
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-neutral-01 font-medium ">
                {row.original.token.name}
              </p>
              <p className="text-xs text-neutral-02 font-normal flex items-center gap-1 text-[#7C7C7C]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_313_12741"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="16"
                    height="16"
                  >
                    <rect width="16" height="16" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_313_12741)">
                    <path
                      d="M3.80523 13.2667C3.50512 13.2667 3.25145 13.1631 3.04423 12.9559C2.83701 12.7487 2.7334 12.495 2.7334 12.1949V3.80523C2.7334 3.50512 2.83701 3.25145 3.04423 3.04423C3.25145 2.83701 3.50512 2.7334 3.80523 2.7334H12.1949C12.495 2.7334 12.7487 2.83701 12.9559 3.04423C13.1631 3.25145 13.2667 3.50512 13.2667 3.80523V4.26673H8.60523C8.06679 4.26673 7.60912 4.45523 7.23223 4.83223C6.85523 5.20912 6.66673 5.66679 6.66673 6.20523V9.7949C6.66673 10.3333 6.85523 10.791 7.23223 11.1679C7.60912 11.5449 8.06679 11.7334 8.60523 11.7334H13.2667V12.1949C13.2667 12.4983 13.1631 12.7528 12.9559 12.9584C12.7487 13.164 12.495 13.2667 12.1949 13.2667H3.80523ZM8.60523 10.8667C8.30512 10.8667 8.05145 10.7631 7.84423 10.5559C7.63701 10.3487 7.5334 10.095 7.5334 9.7949V6.20523C7.5334 5.90512 7.63701 5.65145 7.84423 5.44423C8.05145 5.23701 8.30512 5.1334 8.60523 5.1334H12.9949C13.295 5.1334 13.5487 5.23701 13.7559 5.44423C13.9631 5.65145 14.0667 5.90512 14.0667 6.20523V9.7949C14.0667 10.095 13.9631 10.3487 13.7559 10.5559C13.5487 10.7631 13.295 10.8667 12.9949 10.8667H8.60523ZM10.8001 9.00007C11.0778 9.00007 11.314 8.90284 11.5084 8.7084C11.7028 8.51395 11.8001 8.27784 11.8001 8.00007C11.8001 7.72229 11.7028 7.48618 11.5084 7.29173C11.314 7.09729 11.0778 7.00007 10.8001 7.00007C10.5223 7.00007 10.2862 7.09729 10.0917 7.29173C9.89729 7.48618 9.80007 7.72229 9.80007 8.00007C9.80007 8.27784 9.89729 8.51395 10.0917 8.7084C10.2862 8.90284 10.5223 9.00007 10.8001 9.00007Z"
                      fill="#848484"
                    />
                  </g>
                </svg>
                {row.original.token.code}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_313_12745"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="16"
                    height="16"
                  >
                    <rect width="16" height="16" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_313_12745)">
                    <path
                      d="M6.0384 11.6664C5.73829 11.6664 5.48462 11.5628 5.2774 11.3556C5.07018 11.1484 4.96657 10.8947 4.96657 10.5946V3.00494C4.96657 2.70483 5.07018 2.45116 5.2774 2.24394C5.48462 2.03672 5.73829 1.93311 6.0384 1.93311H12.0281C12.3282 1.93311 12.5818 2.03672 12.7891 2.24394C12.9963 2.45116 13.0999 2.70483 13.0999 3.00494V10.5946C13.0999 10.8947 12.9963 11.1484 12.7891 11.3556C12.5818 11.5628 12.3282 11.6664 12.0281 11.6664H6.0384ZM6.0384 10.7998H12.0281C12.0794 10.7998 12.1264 10.7784 12.1691 10.7356C12.2118 10.6929 12.2332 10.6459 12.2332 10.5946V3.00494C12.2332 2.95361 12.2118 2.90661 12.1691 2.86394C12.1264 2.82116 12.0794 2.79977 12.0281 2.79977H6.0384C5.98707 2.79977 5.94007 2.82116 5.8974 2.86394C5.85462 2.90661 5.83324 2.95361 5.83324 3.00494V10.5946C5.83324 10.6459 5.85462 10.6929 5.8974 10.7356C5.94007 10.7784 5.98707 10.7998 6.0384 10.7998ZM3.97174 13.7331C3.67162 13.7331 3.41796 13.6295 3.21074 13.4223C3.00351 13.215 2.8999 12.9614 2.8999 12.6613V4.20494H3.76657V12.6613C3.76657 12.7126 3.78796 12.7596 3.83074 12.8023C3.8734 12.8451 3.9204 12.8664 3.97174 12.8664H10.8281V13.7331H3.97174Z"
                      fill="#00359E"
                    />
                  </g>
                </svg>
              </p>
            </div>
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
      header: "Value",
      accessorKey: "value",
      cell: ({ row }) => {
        return (
          <p className="text-sm text-neutral-01 font-medium">
            {formatCurrency({
              value: row.original.value,
            })}
          </p>
        );
      },
    },
  ];

  return <DataTable columns={columns} data={data} />;
};

export default TableFinancialReserves;
