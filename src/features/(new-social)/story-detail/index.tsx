import Bounded from "@/components/common/containers/bounded";
import { Link } from "@/i18n/routing";
import { StoryDetailComment } from "./components/comments";
import { StoryDetailNavigation } from "./components/navigation";
import { MainContent } from "./components/main-content";

const StoryDetailFeature = () => {
  // const { slug } = useParams();

  // const story = STORIES?.filter((item) => item.id == slug);

  // if (!story) return <div>Story not found</div>;

  return (
    <Bounded className="w-full py-10">
      <div className="w-full grid grid-cols-12 gap-2">
        {/* Navigation */}
        <div className="w-full col-span-3 border-r border-neutral-300 pr-4">
          <div className="w-full flex justify-start items-start flex-col gap-2">
            <Link href="/news" className="flex items-center gap-2 mb-5">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_369_31658"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="17"
                >
                  <rect y="0.5" width="16" height="16" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_369_31658)">
                  <path
                    d="M10.4 14.6694L4.23083 8.50022L10.4 2.33105L11.2962 3.22722L6.023 8.50022L11.2962 13.7732L10.4 14.6694Z"
                    fill="#00359E"
                  />
                </g>
              </svg>

              <span className="text-base font-semibold text-blueDarkPrimary">
                Back
              </span>
            </Link>

            <StoryDetailNavigation />
          </div>
        </div>

        {/* Story */}
        <div className="w-full h-full col-span-5 border-r border-neutral-300 pr-4">
          <div className="w-full h-full flex justify-start items-start flex-col gap-2">
            <MainContent src="/assets/videos/5896379-sd_540_960_24fps.mp4" />
            {/* <MainContent src="/assets/images/socials/5b1a412419229057ead7b585eb75a350.png" /> */}
          </div>
        </div>

        {/* Comment */}
        <div className="col-span-4 pl-3">
          <div className="flex flex-col gap-4">
            <StoryDetailComment />
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default StoryDetailFeature;
