import BaseModal from "@/components/common/modal/base-modal";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/custom/slider";
import { formatCurrency } from "@/utils/currency";
import { ChevronDown, ChevronRight, Info, Search } from "lucide-react";
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdSearch } from "react-icons/io";
import { MdLockOpen, MdVerified } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsFileEarmark } from "react-icons/bs";
import { FaGithub, FaRedditAlien } from "react-icons/fa";
import VisionAppleBorder from "@/components/common/containers/vision-apple-border";
import { StarRating } from "@/components/custom/rating";
import { GoCopy } from "react-icons/go";
import InputIcon from "@/components/custom/inputs/input-icon";
import InputGroup from "@/components/custom/inputs/input-group";
import { FiEdit2 } from "react-icons/fi";

const FillterInfomation = () => {
  return (
    <BaseModal
      title="Infomation"
      trigger={
        <Button variant={"border"}>
          <Info />
          Info
        </Button>
      }
    >
      <div className="flex flex-col gap-6">
        {/* Overview */}
        <div className="flex flex-col gap-4">
          {/* Market cap */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Label className="text-base text-neutral-04">Market cap</Label>
                <Info className="size-4 text-neutral-04" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="flex items-center gap-0.5 text-red-04">
                  <IoMdArrowDropdown className="size-4" />
                  0.38%
                </span>
                <span className="font-medium">
                  {formatCurrency({ value: 680711807796 })}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2">
              <Slider defaultValue={[33]} max={100} step={1} />
              <div className="px-1 py-0.5 rounded bg-[#f2f2f2] flex items-center justify-center">
                <span className="text-sm text-neutral-03 font-medium">#81</span>
              </div>
            </div>
          </div>
          {/* Volume (24h) */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Label className="text-base text-neutral-04">
                  Volume (24h)
                </Label>
                <Info className="size-4 text-neutral-04" />
                <ChevronRight className="size-4 text-neutral-04" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="flex items-center gap-0.5 text-greenish-04">
                  <IoMdArrowDropup className="size-4" />
                  0.26%
                </span>
                <span className="font-medium">
                  {formatCurrency({ value: 680711807796 })}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2">
              <Slider defaultValue={[33]} max={100} step={1} />
              <div className="px-1 py-0.5 rounded bg-[#f2f2f2] flex items-center justify-center">
                <span className="text-sm text-neutral-03 font-medium">
                  #538
                </span>
              </div>
            </div>
          </div>
          {/* Volume/Market cap (24h) */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <Label className="text-base text-neutral-04">
                Volume/Market cap (24h)
              </Label>
              <Info className="size-4 text-neutral-04" />
            </div>
          </div>
          {/* Circulating supply */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <Label className="text-base text-neutral-04">
                Circulating supply
              </Label>
              <MdVerified className="text-primary" />
              <Info className="size-4 text-neutral-04" />
            </div>

            <div className="flex items-center justify-between gap-2">
              <Slider defaultValue={[33]} max={100} step={1} />
              <div className="px-1 py-0.5 rounded flex items-center justify-center">
                <span className="text-sm text-neutral-03 font-medium">
                  93.03%
                </span>
              </div>
            </div>
          </div>
          {/* Total supply */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Label className="text-base text-neutral-04">
                  Total supply
                </Label>
                <Info className="size-4 text-neutral-04" />
              </div>
              <p className="text-[#141416] font-medium">19,535,550 QUC</p>
            </div>
          </div>
          {/* Max supply */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Label className="text-base text-neutral-04">Max supply</Label>
              </div>
              <p className="text-[#141416] font-medium">21,8524,726 QUC</p>
            </div>
          </div>
          {/* Fully diluted market cap   */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Label className="text-base text-neutral-04">
                  Fully diluted market cap
                </Label>
                <Info className="size-4 text-neutral-04" />
              </div>
              <p className="text-[#141416] font-medium">
                {formatCurrency({ value: 746201637562 })}
              </p>
            </div>
          </div>
          {/* Divide */}
          <div className="h-[1px] bg-[#0000001F] w-full" />
          {/* Official links */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <Label className="text-base text-[#141416]">Official links</Label>
            </div>
            <div className="flex items-center gap-2">
              <VisionAppleBorder>
                <Button
                  variant={"ghost"}
                  className="bg-vision-pro-bg text-[#848484] rounded-full"
                >
                  <AiOutlineGlobal className="size-4 text-[#141416]" />
                  Website
                </Button>
              </VisionAppleBorder>
              <VisionAppleBorder>
                <Button
                  variant={"ghost"}
                  className="bg-vision-pro-bg text-[#848484] rounded-full"
                >
                  <BsFileEarmark className="size-4 text-[#141416]" />
                  White paper
                </Button>
              </VisionAppleBorder>
              <VisionAppleBorder>
                <Button
                  variant={"ghost"}
                  className="bg-vision-pro-bg text-[#848484] rounded-full"
                >
                  <FaGithub className="size-4 text-[#141416]" />
                  Github
                </Button>
              </VisionAppleBorder>
            </div>
          </div>
          {/* Divide */}
          <div className="h-[1px] bg-[#0000001F] w-full" />
          {/* Socials */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <Label className="text-base text-[#141416]">Socials</Label>
            </div>
            <div className="flex items-center gap-2">
              <VisionAppleBorder>
                <Button
                  variant={"ghost"}
                  className="bg-vision-pro-bg text-[#848484] rounded-full"
                >
                  <FaRedditAlien className="size-4 text-[#141416]" />
                  Reddit
                </Button>
              </VisionAppleBorder>
            </div>
          </div>
          {/* Divide */}
          <div className="h-[1px] bg-[#0000001F] w-full" />
          {/* Ratings */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Label className="text-base text-[#141416]">Ratings</Label>
              <span className="text-neutral-04 text-xs">•</span>
              <span className="text-neutral-04">
                Based on 3 institutional ratings
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-neutral-04">4.9</span>
              <StarRating size="xs" defaultValue={4.5} readonly />
              <Info className="size-4 text-neutral-04" />
            </div>
          </div>
          {/* Divide */}
          <div className="h-[1px] bg-[#0000001F] w-full" />
          {/* Network infomation */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <Label className="text-base text-[#141416]">
                Network infomation
              </Label>
            </div>
            <div className="flex w-full items-center gap-1">
              <VisionAppleBorder className="flex-1">
                <InputIcon
                  prefix={<IoMdSearch className="size-5 text-neutral-01" />}
                  suffix={<ChevronDown className="size-6 text-neutral-04" />}
                  className="rounded-full border-none bg-vision-pro-bg"
                  placeholder="Chain explorers"
                />
              </VisionAppleBorder>
              <VisionAppleBorder className="flex-1">
                <InputIcon
                  prefix={<IoMdSearch className="size-5 text-neutral-01" />}
                  suffix={<ChevronDown className="size-6 text-neutral-04" />}
                  className="rounded-full border-none bg-vision-pro-bg"
                  placeholder="Support wallets"
                />
              </VisionAppleBorder>
            </div>
          </div>
          {/* Divide */}
          <div className="h-[1px] bg-[#0000001F] w-full" />
          {/* UCID */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <Label className="text-base text-[#141416]">UCID</Label>
            </div>
            <div className="flex items-center gap-1">
              <VisionAppleBorder>
                <Button
                  variant={"ghost"}
                  className="bg-vision-pro-bg text-neutral-01 rounded-full"
                >
                  1
                  <GoCopy />
                </Button>
              </VisionAppleBorder>
            </div>
          </div>
          {/* Divide */}
          <div className="h-[1px] bg-[#0000001F] w-full" />
          {/* BTC to USD Converter */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <Label className="text-base text-[#141416]">
                BTC to USD Converter
              </Label>
            </div>
            <div className="flex items-center gap-1">
              <InputGroup
                placeholderFrom="BTC"
                subFixFrom={
                  <span className="text-neutral-01 font-medium">1</span>
                }
                placeholderTo="USD"
                subFixTo={
                  <span className="text-neutral-01 font-medium">1.0</span>
                }
                className="rounded-full border-none bg-vision-pro-bg w-full"
              />
            </div>
          </div>
          {/* Divide */}
          <div className="h-[1px] bg-[#0000001F] w-full" />
          {/* Price performance */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-1">
              <Label className="text-base text-[#141416]">
                Price performance
              </Label>
              <VisionAppleBorder>
                <Button
                  variant={"ghost"}
                  className="bg-vision-pro-bg px-4 rounded-full text-base"
                >
                  24h
                  <ChevronDown className="size-5 text-neutral-04" />
                </Button>
              </VisionAppleBorder>
            </div>
            {/* RANGE */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-base text-neutral-04">Low</span>
                <span className="text-base text-neutral-04">High</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-base text-[#141416] font-semibold">
                  $34,454.82
                </span>
                <span className="text-base text-[#141416] font-semibold">
                  $35,892.42
                </span>
              </div>

              <Slider defaultValue={[33]} max={100} step={1} />
            </div>
            {/* INFO */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Label className="text-base text-neutral-04">
                  All-time high
                </Label>
              </div>
              <p className="text-[#141416] font-medium">$68,454.82</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Label className="text-base text-neutral-04">
                  Nov 10, 2023 (1 month ago)
                </Label>
              </div>
              <p className="text-red-04 font-medium">-42.38%</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Label className="text-base text-neutral-04">
                  All-time low
                </Label>
              </div>
              <p className="text-[#141416]  font-medium">$65.53</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Label className="text-base text-neutral-04">
                  Nov 10, 2023 (1 month ago)
                </Label>
              </div>
              <p className="text-greenish-04 font-medium">+52.38%</p>
            </div>
            <Button variant={"link"} className="w-fit px-0 text-base underline">
              See historical data
            </Button>
          </div>
          {/* Divide */}
          <div className="h-[1px] bg-[#0000001F] w-full" />
          {/* Popularity */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1">
              <Label className="text-base text-[#141416]">Popularity</Label>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Label className="text-base text-neutral-04">
                    In Watchlist
                  </Label>
                  <Info className="size-4 text-neutral-04" />
                </div>
                <div className="flex items-center gap-">
                  <span className="font-medium">4,226,219x</span>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2">
                <Slider defaultValue={[33]} max={100} step={1} />
                <span className="text-base text-neutral-03 font-medium">
                  31st/8.8K
                </span>
              </div>
            </div>
          </div>
          {/* Divide */}
          <div className="h-[1px] bg-[#0000001F] w-full" />
          {/* Tags */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1">
              <Label className="text-base text-[#141416]">Tags</Label>
            </div>
            <div className="flex items-center gap-2">
              <VisionAppleBorder>
                <Button
                  variant={"ghost"}
                  className="bg-vision-pro-bg text-[#848484] rounded-full px-6"
                >
                  Mineable
                </Button>
              </VisionAppleBorder>
              <VisionAppleBorder>
                <Button
                  variant={"ghost"}
                  className="bg-vision-pro-bg text-[#848484] rounded-full px-6"
                >
                  PoW
                </Button>
              </VisionAppleBorder>
              <VisionAppleBorder>
                <Button
                  variant={"ghost"}
                  className="bg-vision-pro-bg text-[#848484] rounded-full px-6"
                >
                  SHA-256
                </Button>
              </VisionAppleBorder>
              <Button variant={"link"} className="text-base">
                Show all
              </Button>
            </div>
          </div>
          {/* Divide */}
          <div className="h-[1px] bg-[#0000001F] w-full" />
          {/* Do you own this project? */}
          <VisionAppleBorder className="rounded-3xl w-full">
            <div className="p-6 rounded-3xl bg-[#0077ED14] flex flex-col gap-3">
              <h3 className="text-lg text-[#141416] font-medium">
                Do you own this project?
              </h3>
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2 text-primary">
                  <FiEdit2 /> Update Token Info
                </p>
                <p className="flex items-center gap-2 text-primary">
                <MdLockOpen /> Submit Token Unlocks
                </p>
              </div>
            </div>
          </VisionAppleBorder>
        </div>
      </div>
    </BaseModal>
  );
};

export default FillterInfomation;
