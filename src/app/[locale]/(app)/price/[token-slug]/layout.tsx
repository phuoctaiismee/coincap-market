import bitcoinIcon from "@/assets/icons/bitcoin-icon.svg";
import Bounded from "@/components/common/containers/bounded";
import { Button } from "@/components/ui/button";
import Tabs from "@/features/token-detail/components/detail-container/tabs";
import NewsFeed from "@/features/token-detail/components/newsfeed";
import Image from "next/image";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";

interface IProps {
  children: React.ReactNode;
}

const DetailTokenLayout: React.FC<IProps> = ({ children }) => {
  return (
    <Bounded>
      <div className="py-[48px] flex divide-x divide-neutral-05">
        <div className="flex-1 pr-[24px] space-y-[36px]">
          <div className="space-y-[8px]">
            <div className="space-y-[8px] relative">
              <div className="flex items-center gap-[8px]">
                <Image src={bitcoinIcon} alt="coin" width={32} height={32} />
                <div className="text-20-18-600">Bitcoin</div>
                <div className="text-20-18-500 text-neutral-07">BTC</div>
                <div
                  style={{
                    boxShadow:
                      "0px 1px 2px 0px #1018280F, 0px 1px 3px 0px #1018281A",
                  }}
                  className="bg-yellow-01 px-[8px] pt-[5px] pb-[2px] text-16-16-500 rounded-[8px]"
                >
                  #1
                </div>
              </div>
              <div className="flex items-end gap-[8px]">
                <div className="text-48-62-700">$97,539.65</div>
                <div className="flex items-center gap-[4px] -translate-y-2.5">
                  <FaCaretUp className="text-greenish-04" />{" "}
                  <span className="text-16-22-500 text-greenish-04">
                    +0.27% (1d)
                  </span>
                </div>
                <div className="flex gap-[2px] items-center -translate-y-2 cursor-pointer">
                  <span>USD</span>
                  <FaCaretDown />
                </div>
              </div>
              <div className="absolute top-0 right-0 flex gap-[8px]">
                <Button
                  variant={"ghost"}
                  className="bg-gray-04"
                  styling={"rounded"}
                  size={"icon"}
                >
                  <MdOutlineStarPurple500
                    size={17}
                    className="text-blue-primary"
                  />
                </Button>
                <Button styling={"rounded"}>View Details</Button>
              </div>
            </div>
            <Tabs />
          </div>
          <div>{children}</div>
        </div>
        <div className="pl-[24px]">
          <NewsFeed />
        </div>
      </div>
    </Bounded>
  );
};

export default DetailTokenLayout;
