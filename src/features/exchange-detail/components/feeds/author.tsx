import { Button } from "@/components/ui/button";
import { formatNumberToKMBT } from "@/utils/text";
import { Plus } from "lucide-react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { MdOutlineCampaign } from "react-icons/md";

interface AuthorPostProps {
  author: Author;
  isNotify: boolean;
}

interface Author {
  name: string;
  avatar: string;
  follow: number;
  isFollow: boolean;
  isVerified: boolean;
}
const AuthorPost = ({ author, isNotify }: AuthorPostProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center gap-2">
          <div className="relative size-8 aspect-square rounded-full overflow-hidden">
            <Image
              src={author.avatar}
              alt={author.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <h4 className="text-neutral-01 text-base font-medium">
                {author.name}
              </h4>
              {author.isVerified && (
                <MdVerified className="w-4 h-4 text-primary" />
              )}
            </div>
            <p className="text-neutral-05 text-xs font-normal">
              {formatNumberToKMBT(author.follow)} followers
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          className="text-[15px] text-primary border border-primary rounded-full hover:bg-primary hover:text-white duration-300 transition-all"
        >
          <Plus className="w-4 h-4" />
          Follow
        </Button>
      </div>
      {isNotify && (
        <div className="flex items-center gap-2">
          <MdOutlineCampaign className="w-4 h-4" />
          <p className="text-sm font-normal">Project&apos;s announcements</p>
        </div>
      )}
    </div>
  );
};

export default AuthorPost;
