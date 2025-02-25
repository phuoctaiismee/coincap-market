import { Image } from "@/components/common/images";
import { Link } from "@/i18n/routing";
import { Check, Eye } from "lucide-react";
import React from "react";

type StoryCardProps = {
  type: "live" | "story";
  image: string;
  slug: string;
};

export const StoryCard = ({ type, image, slug }: StoryCardProps) => {
  return (
    <Link
      href={`/story/${slug || "1"}`}
      className="h-[350px] overflow-hidden rounded-3xl"
    >
      <div className="relative h-[350px]">
        {/* Image */}
        <Image
          src={image}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        {/* Top */}
        <div className="absolute left-3 right-3 top-3">
          {type === "live" && (
            <div className="flex w-full items-center justify-between">
              <div className="flex w-fit items-center gap-1 rounded-md bg-red-500 px-2 py-1">
                <span className="text-xs font-medium text-white">Live</span>
              </div>
              <div className="flex w-fit items-center justify-center gap-1 rounded-md bg-neutral-900 px-2 py-1 text-white opacity-50">
                <Eye className="size-3 stroke-neutral-200" />
                <p className="text-xs text-white">1,999</p>
              </div>
            </div>
          )}

          {type === "story" && (
            <div className="w-fit rounded-md bg-neutral-900 px-2 py-1 text-white opacity-50">
              <p className="text-xs text-white">2h ago</p>
            </div>
          )}
        </div>

        {/* Bottom */}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex flex-col items-center justify-start gap-3">
            <div className="flex w-full items-center justify-start gap-1">
              <Image
                src="/assets/images/avatar.png"
                alt="logo"
                width={20}
                height={20}
                className="size-5"
                loading="lazy"
              />
              <p className="mt-1 text-xs font-medium text-neutral-100">
                Crypto Rand
              </p>
              <div className="ml-1 mt-1 flex aspect-square size-3 items-center justify-center rounded-full bg-blue-600 p-0.5">
                <Check className="h-full w-full text-black" />
              </div>
            </div>
            <p className="line-clamp-2 text-xs text-neutral-200">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Eligendi, consequuntur? Quaerat aspernatur voluptates natus ad et,
              maiores laboriosam iste consequuntur!
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
