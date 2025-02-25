import { cn } from "@/lib/utils";
import { MoveDownLeft, MoveUpRight } from "lucide-react";

interface IProps {
  type: "up" | "down";
  value: string;
  className?: string;
  iconSize?: number;
}

const UpDownNumber: React.FC<IProps> = ({
  type,
  value,
  className,
  iconSize = 15,
}) => {
  const isUp = type === "up";
  const color = isUp ? "text-greenish-04" : "text-red-04";
  return (
    <div
      className={cn(
        "flex gap-[2px] items-center",

        className
      )}
    >
      <div></div>
      {isUp ? (
        <MoveUpRight className="text-greenish-04" size={iconSize} />
      ) : (
        <MoveDownLeft className="text-red-04" size={iconSize} />
      )}
      <div className={cn(color)}>{value}</div>
    </div>
  );
};

export default UpDownNumber;
