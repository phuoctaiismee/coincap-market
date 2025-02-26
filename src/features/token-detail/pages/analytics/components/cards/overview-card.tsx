import sample from "@/assets/images/3d-chart/sample-columns-chart.png";
import sampleCube from "@/assets/images/3d-chart/sample-cube.png";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { BiInfoCircle } from "react-icons/bi";

interface IProps {
  title: string;
  active?: boolean;
}

const OverviewCard: React.FC<IProps> = ({ title, active = false }) => {
  return (
    <div
      style={{
        boxShadow: active ? "0px 12px 48px 0px #0000001F" : "",
      }}
      className={cn("rounded-[24px] p-[1px]", active && "bg-border-gradient")}
    >
      <div className="bg-white p-[24px] rounded-[24px] space-y-[36px]">
        <div className="text-20-20-700 flex gap-[8px]">
          <span>{title}</span>
          <BiInfoCircle className="text-neutral-04" />
        </div>
        <div className="flex h-full gap-[36px] items-center">
          <Image
            src={sample}
            alt="chart"
            width={60}
            height={187}
            className="object-contain"
          />
          <div className="h-full flex flex-col justify-between gap-[24px]">
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="flex items-start gap-[10px]">
                  <Image
                    src={sampleCube}
                    alt="chart"
                    width={20}
                    height={21}
                    className="object-contain"
                  />
                  <div>
                    <div className="text-14-20-600 text-neutral-04">Whales</div>
                    <div className="text-18-25-600">45.67%</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
