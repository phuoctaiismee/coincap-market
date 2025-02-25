import fireIcon from "@/assets/icons/fire-icon.svg";
import { cn } from "@/lib/utils";
import { Dot } from "lucide-react";
import Image from "next/image";
import { FaCaretUp } from "react-icons/fa";

interface IProps {
  className?: string;
}

const TradingTokenCard: React.FC<IProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex relative py-[16px] px-[20px] bg-white h-[92px] overflow-hidden gap-[16px] min-w-[324px] w-fit rounded-full",
        className
      )}
    >
      <div
        className="absolute bottom-0 left-0 w-full h-[30%]
      bg-gradient-to-t from-white to-transparent
      "
      />
      <Image src={fireIcon} width={20} height={31} alt="icon" />
      <div className="space-y-[6px] w-full">
        <div className="flex items-center">
          <span className="text-16-20-700 text-neutral-00">Trending Token</span>
          <Dot className="px-1" size={20} />
          <span className="text-13-20-600 text-neutral-03">1h ago</span>
        </div>
        <div className="space-y-[6px] w-full">
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <div className="flex justify-between items-center" key={index}>
                <div className="gap-[12px] flex items-center">
                  <div className="size-[16px] rounded-full bg-red-200" />
                  <span className="text-14-18-500 text-neutral-02">DOGE</span>
                </div>
                <div className="flex items-center gap-[12px]">
                  <span className="text-14-18-600 text-neutral-00">
                    $98,303.63
                  </span>
                  <div className="text-11-15-600 flex items-center text-greenish-04">
                    <span>+0.26%</span>
                    <FaCaretUp size={15} />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TradingTokenCard;
