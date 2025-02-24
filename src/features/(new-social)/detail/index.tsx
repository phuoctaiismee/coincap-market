import Bounded from "@/components/common/containers/bounded";
import { Link } from "@/i18n/routing";
import { RecommendAccount } from "../shared-components/recommon-account";
import { TrendingToken } from "../shared-components/trending-token";
import { TrendingTopic } from "../shared-components/trending-topic";
import { UpcomingLive } from "../shared-components/upcoming-live";
import { NewContent } from "./components/new-content";
import { CommentSection } from "./components/comments";

const NewDetailFeatures = () => {
  return (
    <Bounded className="w-full">
      <div className="w-full grid grid-cols-12 gap-2">
        {/* Left Column with Divider */}
        <div className="w-full col-span-9 border-r border-neutral-300 pr-4">
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

            <NewContent />
            <CommentSection />
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-3 pl-3">
          <div className="flex flex-col gap-4">
            <UpcomingLive />
            <TrendingTopic />
            <TrendingToken />
            <RecommendAccount />
            <p className="text-sm font-medium text-neutral-500 italic">
              The data and information contained therein are provided by a third
              party and CoinMarketCap does not create such data. See full terms{" "}
              <Link
                href="#"
                className="!text-blueDarkPrimary underline font-semibold"
              >
                Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default NewDetailFeatures;
