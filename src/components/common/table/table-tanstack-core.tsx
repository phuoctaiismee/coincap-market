"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Fragment, useState } from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  showHeader?: boolean;
  showIndex?: boolean;
  currentSelectedIds?: string[];
  onClickRow?: (row: TData) => void;
  handleDelete?: (id: string) => void;
  handleSetSelectedIds?: (ids: string[]) => void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  showHeader = true,
  onClickRow,
  showIndex = false,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
  });

  return (
    <Table className="rounded-3xl overflow-hidden">
      <TableHeader
        className={cn(
          "bg-white shadow-primary-shadow ",
          !showHeader && "hidden"
        )}
      >
        {table?.getHeaderGroups()?.map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers?.map((header, index) => {
              return (
                <TableHead
                  className={cn(
                    "py-2 capitalize text-base  text-[#141416]",
                    index === headerGroup.headers.length - 1 &&
                      "pr-8 flex justify-end items-center",
                    index === 0 && "pl-8"
                  )}
                  key={header.id}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows?.map((row, index) => (
            <TableRow
              key={index}
              className={cn(
                "cursor-pointer border-none !py-6",
                (row.original as any)?.activeRow && "bg-gray-100",
                index % 2 === 0 && "bg-[#12121205]"
              )}
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells()?.map((cell, index) => (
                <TableCell
                  onClick={() => {
                    if (!["actions", "select"].includes(cell.column.id)) {
                      onClickRow?.(row.original);
                    }
                  }}
                  className={cn(
                    "py-2 min-h-[48px]",
                    index === row.getVisibleCells()?.length - 1 &&
                      "pr-8 flex justify-end items-center",
                    index === 0 && "pl-8"
                  )}
                  key={cell.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No results
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
