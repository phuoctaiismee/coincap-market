"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  showHeader?: boolean;
  showIndex?: boolean;
  showScrollBar?: boolean;
  currentSelectedIds?: string[];
  lastColumnClassName?: string;
  onClickRow?: (row: TData) => void;
  handleDelete?: (id: string) => void;
  handleSetSelectedIds?: (ids: string[]) => void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  showHeader = true,
  showIndex = false,
  showScrollBar = false,
  lastColumnClassName,
  onClickRow,
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
    <main className="relative">
      {/* Bọc shadow riêng biệt, không bị ảnh hưởng bởi ScrollArea */}
      <div className="relative rounded-3xl">
        {/* Shadow riêng biệt, không bị cắt */}
        <div className="absolute inset-0 rounded-3xl shadow-[0px_12px_48px_0px_#0000001F] pointer-events-none"></div>

        {/* ScrollArea chỉ xử lý scroll, không ảnh hưởng đến shadow */}
        <ScrollArea
          type="always"
          className={cn("relative rounded-3xl bg-transparent", {
            "pb-12": showScrollBar,
          })}
        >
          <div className="overflow-auto rounded-3xl bg-white relative z-10">
            <Table className="bg-transparent">
              <TableHeader className={cn("bg-white", !showHeader && "hidden")}>
                {table?.getHeaderGroups()?.map((headerGroup, index) => (
                  <TableRow key={headerGroup.id}>
                    {showIndex && (
                      <TableHead className="pt-8 pb-3 pl-7 w-[60px]">
                        <div className="flex items-center text-neutral-900">
                          # <IoMdArrowDropdown className="size-5" />
                        </div>
                      </TableHead>
                    )}
                    {headerGroup.headers?.map((header, index) => (
                      <TableHead
                        className={cn(
                          "pt-7 pb-3 capitalize text-base whitespace-nowrap text-[#141416] pl-6",
                          index === headerGroup.headers.length - 1 &&
                            cn("text-right", lastColumnClassName),
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
                    ))}
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
                            if (
                              !["actions", "select"].includes(cell.column.id)
                            ) {
                              onClickRow?.(row.original);
                            }
                          }}
                          className={cn(
                            "py-4 min-h-[48px] pl-6",
                            index === row.getVisibleCells()?.length - 1 &&
                              cn(
                                "flex justify-center items-center",
                                lastColumnClassName
                              ),
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
          </div>

          {/* ScrollBar nằm bên trong ScrollArea */}
          {showScrollBar && (
            <ScrollBar
              orientation="horizontal"
              className="bg-neutral-200 max-w-[160px] rounded-full !p-0 border-none h-[3px] mt-2"
            />
          )}
        </ScrollArea>
      </div>
    </main>
  );
}
