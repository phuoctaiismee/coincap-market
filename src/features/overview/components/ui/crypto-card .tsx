import bitcoinIcon from "@/assets/icons/bitcoin-icon.svg";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/utils/format/currency.util";
import { Dot, MoveDownLeft, MoveUpRight } from "lucide-react";
import Image from "next/image";

interface IProps {
  className?: string;
  name: string;
  symbol: string;
  price: number;
  changePercent: number;
  changeAmount: number;
  type: "up" | "down";
  variant?: "default" | "border";
}

const CryptoCard: React.FC<IProps> = ({
  className,
  changeAmount,
  changePercent,
  name,
  price,
  symbol,
  type,
  variant = "default",
}) => {
  const isUp = type === "up";
  const isBorder = variant === "border";

  return (
    <div
      style={{
        boxShadow: isBorder ? "0px 12px 48px 0px #0000001F" : "",
        background: isBorder
          ? "linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)), linear-gradient(156.52deg, rgba(0, 0, 0, 0.4) 2.12%, rgba(0, 0, 0, 0.0001) 39%, rgba(0, 0, 0, 0.0001) 54.33%, rgba(0, 0, 0, 0.1) 93.02%)"
          : "",
      }}
      className={cn(
        "p-[1px] min-h-[92px] gap-[16px] min-w-[324px] w-auto rounded-full",
        className
      )}
    >
      <div className="gap-[16px] flex py-[16px] px-[20px] rounded-full bg-white">
        <Image src={bitcoinIcon} alt="coin" width={60} height={60} />
        <div className="space-y-[8px]">
          <div className="gap-[2px] flex items-center">
            <span className="text-neutral-03 text-16-20-600">{name}</span>
            <Dot className="text-neutral-05" size={20} />
            <span className="text-16-20-700 text-neutral-01">{symbol}</span>
          </div>
          <div className="space-x-[12px] flex items-end">
            <span className="text-32-32-600 text-blue-primary">
              {formatCurrency(price)}
            </span>
            <div
              className={cn(
                "flex gap-[1px] items-center text-15-20-600",
                isUp ? "text-greenish-04" : "text-red-04"
              )}
            >
              {isUp ? <MoveUpRight size={20} /> : <MoveDownLeft size={20} />}

              <span>{formatCurrency(changePercent)}%</span>
              <Dot size={20} className="opacity-50" />
              <div className="flex">
                <span>{isUp ? "+" : "-"}</span>
                <span>${formatCurrency(changeAmount)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
