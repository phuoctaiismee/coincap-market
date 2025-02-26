import { cn } from "@/lib/utils";
import { MoveDownLeft, MoveUpRight } from "lucide-react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

interface IProps {
  type: "up" | "down";
  value: string;
  className?: string;
  iconSize?: number;
  iconType?: "default" | "move";
}

const UpDownNumber: React.FC<IProps> = ({
  type,
  value,
  className,
  iconSize = 15,
  iconType = "default",
}) => {
  const isUp = type === "up";
  const color = isUp ? "text-greenish-04" : "text-red-04";
  const isIconDefault = iconType === "default";
  return (
    <div className={cn("flex gap-[2px] items-center", className)}>
      {isUp ? (
        <>
          {isIconDefault ? (
            <MoveUpRight className="text-greenish-04" size={iconSize} />
          ) : (
            <FaCaretUp className="text-greenish-04" size={iconSize} />
          )}
        </>
      ) : (
        <>
          {isIconDefault ? (
            <MoveDownLeft className="text-red-04" size={iconSize} />
          ) : (
            <FaCaretDown className="text-red-04" size={iconSize} />
          )}
        </>
      )}
      <div className={cn(color)}>{value}</div>
    </div>
  );
};

export default UpDownNumber;
