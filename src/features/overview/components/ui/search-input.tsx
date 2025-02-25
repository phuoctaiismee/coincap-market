import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { IoMdSearch } from "react-icons/io";

interface IProps {
  className?: string;
  placeholder?: string;
}

const SearchInput: React.FC<IProps> = ({
  className,
  placeholder = "Search coinv",
}) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)), linear-gradient(156.52deg, rgba(0, 0, 0, 0.4) 2.12%, rgba(0, 0, 0, 0.0001) 39%, rgba(0, 0, 0, 0.0001) 54.33%, rgba(0, 0, 0, 0.1) 93.02%)",
      }}
      className="p-[1px] relative rounded-full w-fit"
    >
      <IoMdSearch
        size={20}
        className="absolute left-3 top-1/2 -translate-y-1/2"
      />
      <Input
        className={cn(
          "w-[300px] text-14-21-500 placeholder:text-neutral-05 pl-10 bg-white rounded-full border-none outline-none",
          className
        )}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchInput;
