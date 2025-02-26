import { cn } from "@/lib/utils";

interface IProps {
  type: "up" | "down";
  value: string;
  className?: string;
}

const UpDownTag: React.FC<IProps> = ({ type, value, className }) => {
  const isUp = type === "up";
  const color = isUp ? "bg-greenish-04" : "bg-red-04";
  return (
    <div
      className={cn(
        "px-[10px] rounded-[4px] w-fit min-h-[20px] text-12-20-500 text-white",
        color,
        className
      )}
    >
      {value}
    </div>
  );
};

export default UpDownTag;
