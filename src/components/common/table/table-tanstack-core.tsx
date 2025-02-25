"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { IoMdArrowDropdown } from "react-icons/io";
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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  showHeader?: boolean;
  showIndex?: boolean;
  showScrollBar?: boolean;
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
  showScrollBar = false,
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
    <div
      className={cn(
        "pb-12"
      )}
    >
      <ScrollArea type="always" className="rounded-3xl bg-transparent shadow-[0px_12px_48px_0px_#0000001F] ">
        <Table className="bg-transparent">
          <TableHeader className={cn("bg-white", !showHeader && "hidden")}>
            {table?.getHeaderGroups()?.map((headerGroup, index) => (
              <TableRow key={headerGroup.id}>
                {showIndex && (
                  <TableHead className="pt-6 pb-3 pl-8 w-[60px]">
                    <div className="flex items-center text-neutral-900">
                      # <IoMdArrowDropdown className="size-5" />
                    </div>
                  </TableHead>
                )}
                {headerGroup.headers?.map((header, index) => {
                  return (
                    <TableHead
                      className={cn(
                        "pt-6 pb-3 capitalize text-base whitespace-nowrap text-[#141416]  pl-6",
                        index === headerGroup.headers.length - 1 &&
                          "flex justify-end items-center",
                        index === 0 && showIndex && "pl-0"
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
                    "cursor-pointer border-none odd:bg-[#f5f5f5] hover:bg-transparent odd:hover:bg-muted/50"
                  )}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {showIndex && (
                    <TableCell className="pl-8 w-[60px]">
                      <div className="text-neutral-900 font-medium text-center">
                        {index + 1}
                      </div>
                    </TableCell>
                  )}
                  {row.getVisibleCells()?.map((cell, index) => (
                    <TableCell
                      onClick={() => {
                        if (!["actions", "select"].includes(cell.column.id)) {
                          onClickRow?.(row.original);
                        }
                      }}
                      className={cn(
                        "py-4 min-h-[48px] pl-6",
                        index === row.getVisibleCells()?.length - 1 &&
                          "flex justify-end items-center ",
                        index === 0 && showIndex && "pl-0"
                      )}
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        {showScrollBar && (
          <ScrollBar
            orientation="horizontal"
            className={cn(
              "max-w-sm bg-neutral-06 rounded-full !p-0 border-none h-[3px] !-bottom-5 !z-10",
              showScrollBar && "mt-10"
            )}
          />
        )}
      </ScrollArea>
    </div>
  );
}
