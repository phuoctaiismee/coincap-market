import sample from "@/assets/images/3d-chart/sample-line-chart.png";
import Image from "next/image";
import { BiInfoCircle } from "react-icons/bi";

const AverageTransactionFeesCard = () => {
  return (
    <div className="p-[24px] rounded-[24px] bg-white space-y-[24px]">
      <div className="text-20-20-700 flex gap-[8px]">
        <span>Bitcoin Average Transaction Fees (30d)</span>
        <BiInfoCircle className="text-neutral-04" />
      </div>
      <div className="space-y-[4px]">
        <div className="text-14-20-600 text-neutral-04">0.00000012 BTC</div>
        <div className="text-18-25-600">$1.15</div>
      </div>
      <Image
        className="w-full object-contain"
        src={sample}
        alt="line"
        width={420}
        height={102}
      />
    </div>
  );
};

export default AverageTransactionFeesCard;
