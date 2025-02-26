
import FillterInfomation from "./filter-info";
import FilterCatefory from "./filter-category";
import FilterColumn from "./filter-column";
const FilterActions = () => {
  return (
    <div className="flex gap-[8px]">
      <FilterCatefory />
      <FillterInfomation />
      <FilterColumn />
    </div>
  );
};

export default FilterActions;
