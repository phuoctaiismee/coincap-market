import { Image } from "@/components/common/images";
import { PlusIcon } from "lucide-react";

export const CreateStoryCard = () => {
  return (
    <div className="h-[350px] w-[165px] lg:w-[225px] overflow-hidden rounded-3xl">
      {/* Image */}
      <div className="relative h-full w-full bg-gradient-to-b from-[#A3CEF8] to-[#EAFBFF] ">
        <Image
          src="/assets/images/socials/Logo.png"
          alt=""
          loading="lazy"
          className="absolute left-[50%] right-0 top-[50%] size-fit -translate-y-1/2 -translate-x-1/2 object-cover"
        />
        
        {/* Bottom */}
        <div className="absolute bottom-3 inset-x-0 w-full px-0 z-30">
          <div className="flex items-center justify-center px-0 gap-10 w-full">
            <span className="text-center font-medium text-base text-black">
              Share your story
            </span>
            <div className="flex items-center justify-center p-2 bg-blueDarkPrimary rounded-full w-fit">
              <PlusIcon className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
