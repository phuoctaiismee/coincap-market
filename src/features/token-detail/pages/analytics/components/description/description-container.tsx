import Heading from "@/components/common/typography/heading";
import { Info } from "lucide-react";
import Link from "next/link";
import { MdNavigateNext } from "react-icons/md";
import DescriptionAccordion from "./description-accordion";

const DescriptionContainer = () => {
  return (
    <div className="space-y-[24px]">
      <div className="flex justify-between items-center">
        <Heading size="sm" className="flex items-center gap-[6px]">
          About Bitcoin
          <Info className="text-gray-03" size={20} />
        </Heading>
        <Link
          href={"#"}
          className="flex items-center gap-[2px] text-blue-primary"
        >
          <span className="text-16-20-600 ">Explore More</span>{" "}
          <MdNavigateNext size={20} />
        </Link>
      </div>
      <DescriptionAccordion />
    </div>
  );
};

export default DescriptionContainer;
