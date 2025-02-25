import { Image } from "@/components/common/images";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";

type MainContentProps = {
  src: string;
  type?: "image" | "video";
};

export const MainContent = ({ src, type }: MainContentProps) => {
  const fileType = type || (/\.(mp4|webm|ogg)$/i.test(src) ? "video" : "image");

  return (
    <div
      className={cn(
        "h-screen relative w-full flex items-center justify-center",
        (type == "image" || fileType == "image" && "bg-black")
      )}
    >
      {fileType === "image" ? (
        <Image
          src={src}
          alt="Media"
          className="max-w-full max-h-full object-contain rounded-xl overflow-hidden"
          loading="lazy"
        />
      ) : (
        <video
          src={src}
          className="w-full min-w-full max-w-full max-h-full object-cover absolute inset-0 rounded-xl overflow-hidden"
          autoPlay
          loop
          muted
          controls
        />
      )}

      {/* Navigation */}
      <div className="absolute top-1/2 -translate-y-1/2 right-3">
        <div className="flex flex-col justify-center items-end gap-4">
          <Button
            variant={"default"}
            size={"icon"}
            className={cn(
              "size-12 bg-[#FFFFFF8D] text-black hover:bg-neutral-800 hover:text-neutral-200 transition-all ease-in-out rounded-full"
            )}
          >
            <ChevronUp className="h-4 w-4" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant={"default"}
            size={"icon"}
            className={cn(
              "size-12 bg-[#FFFFFF8D] text-black hover:bg-neutral-800 hover:text-neutral-200 transition-all ease-in-out rounded-full"
            )}
          >
            <ChevronDown className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
