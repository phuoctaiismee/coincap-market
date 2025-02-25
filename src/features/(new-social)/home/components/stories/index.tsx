import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CreateStoryCard } from "./components/create-story-card";
import { StoryCard } from "./components/story-card";

const STORIES = [
  {
    image: "/assets/images/socials/5b1a412419229057ead7b585eb75a350.png",
  },
  {
    image: "/assets/images/socials/96b56537235849685cd763cadd9a122d.png",
  },
  {
    image: "/assets/images/socials/3332db7583b67f9ed05b2a1d43fba4d5.png",
  },
  {
    image: "/assets/images/socials/ad716b38bf6ad08ed652ba2c7bfdf0ff.png",
  },
  {
    image: "/assets/images/socials/5b1a412419229057ead7b585eb75a350.png",
  },
  {
    image: "/assets/images/socials/96b56537235849685cd763cadd9a122d.png",
  },
  {
    image: "/assets/images/socials/3332db7583b67f9ed05b2a1d43fba4d5.png",
  },
  {
    image: "/assets/images/socials/ad716b38bf6ad08ed652ba2c7bfdf0ff.png",
  },
];

export const Stories = () => {
  return (
    <div className="flex items-center justify-start gap-3 overflow-hidden">
      <div className="block">
        <CreateStoryCard />
      </div>
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="flex w-full">
          {STORIES.map((story, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4 max-w-full"
            >
              <StoryCard
                type={index === 0 ? "live" : "story"}
                image={story.image}
                slug={`${index + 1}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselNext className="absolute size-12 right-32 z-30 border-2 border-neutral-800 bg-neutral-800 p-2 text-neutral-100 hover:bg-neutral-900 hover:text-neutral-100" /> */}
      </Carousel>
    </div>
  );
};
