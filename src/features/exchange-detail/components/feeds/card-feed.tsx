import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export interface CardFeedProps {
  title: string;
  description: string;
  image: string;
  link: string;
  createdAt: string;
}
const CardFeed = ({
  title,
  description,
  image,
  link,
  createdAt,
}: CardFeedProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative h-[158px] w-full rounded-lg overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-neutral-01 line-clamp-1">
            {title}
          </h3>
          <p className="text-xs text-neutral-01">
            {format(new Date(createdAt), "PPP")}
          </p>
        </div>
        <p className="text-[13px] text-[#141416] line-clamp-3">{description}</p>
        <Button
          variant="ghost"
          className="text-[15px] text-primary border border-primary rounded-full"
        >
          View more
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  );
};

export default CardFeed;
