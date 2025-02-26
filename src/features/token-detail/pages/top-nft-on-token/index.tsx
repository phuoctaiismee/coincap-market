import Heading from "@/components/common/typography/heading";
import TopNFTTable from "./table/top-nft-table";

const TopNFTOnTokenFeature = () => {
  return (
    <div className="space-y-[26px]">
      <Heading size="sm">Top NFT Collections on Bitcoin</Heading>
      <TopNFTTable />
    </div>
  );
};

export default TopNFTOnTokenFeature;
