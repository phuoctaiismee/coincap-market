interface PaginationInfoProps {
  currentPage: number;
  perPage: number;
  totalItems: number;
}

const PaginationInfo = ({
  currentPage,
  perPage,
  totalItems,
}: PaginationInfoProps) => {
  const start = (currentPage - 1) * perPage + 1;
  const end = Math.min(start + perPage - 1, totalItems);

  return (
    <div className="text-neutral-04 text-base">
      Showing{" "}
      <span className="font-semibold text-neutral-01">
        {start}-{end}
      </span>{" "}
      out of <span className=" text-neutral-04">{totalItems}</span>
    </div>
  );
};

export default PaginationInfo;
