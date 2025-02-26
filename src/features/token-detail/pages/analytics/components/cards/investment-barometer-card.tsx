import sample from "@/assets/images/3d-chart/sample-gauge-chart.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BiInfoCircle } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";

const InvestmentBarometerCard = () => {
  return (
    <div className="p-[24px] rounded-[24px] bg-white ">
      <div className="flex flex-col gap-[24px] relative">
        <div className="absolute top-0 right-0">
          <Button size={"sm"} variant={"border"} styling={"rounded"}>
            <span>24h</span>
            <IoMdArrowDropdown />
          </Button>
        </div>
        <div className="text-20-20-700 flex gap-[8px]">
          <span>Investment Barometer</span>
          <BiInfoCircle className="text-neutral-04" />
        </div>
        <Image
          className="w-full object-contain"
          src={sample}
          alt="line"
          width={420}
          height={102}
        />
      </div>
    </div>
  );
};

export default InvestmentBarometerCard;
