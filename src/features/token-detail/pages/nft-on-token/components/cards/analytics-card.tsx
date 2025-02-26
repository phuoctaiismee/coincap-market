import UpDownNumber from "@/features/overview/components/ui/up-down-number";
import { cn } from "@/lib/utils";
import { BiInfoCircle } from "react-icons/bi";
import AnalyticsBarChart from "../charts/analytics-bar-chart";

interface IProps {
  active?: boolean;
  title: string;
}

const AnalyticsCard: React.FC<IProps> = ({ title, active }) => {
  return (
    <div
      style={{
        boxShadow: active ? "0px 12px 48px 0px #0000001F" : "",
      }}
      className={cn("rounded-[24px] p-[1px]", active && "bg-border-gradient")}
    >
      <div className="bg-white p-[24px] rounded-[24px] space-y-[36px]">
        <div className="space-y-[24px]">
          <div className="text-20-20-700 flex gap-[8px]">
            <span>{title}</span>
            <BiInfoCircle className="text-neutral-04" />
          </div>
          <div className="space-y-[10px]">
            <UpDownNumber type="up" iconType="move" value="0.27% (24h)" />
            <div className="text-18-25-600">$255,606.45</div>
          </div>
          <div>
            <AnalyticsBarChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
