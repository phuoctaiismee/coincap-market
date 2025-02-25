import Image from "next/image";
import AuthorPost from "./author";
import { BiSolidLike } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { ImSad2 } from "react-icons/im";
import { Button } from "@/components/ui/button";
import { MdSync } from "react-icons/md";
import { formatNumberToKMBT } from "@/utils/text";
import { LuSmilePlus } from "react-icons/lu";
import { LuMessageSquareMore } from "react-icons/lu";
import { Eclipse } from "lucide-react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

interface Author {
  name: string;
  avatar: string;
  follow: number;
  isFollow: boolean;
  isVerified: boolean;
}

export interface CardPostProps {
  author: Author;
  isNotify: boolean;
  reactions: Reaction[];
  image?: boolean;
  comments: number;
  shares: number;
  reacts: number;
}

export interface Reaction {
  type: "like" | "favorite" | "bad";
  count: number;
}

interface Comment {
  id: string;
  content: string;
  createdAt: string;
}

const CardPost = ({
  author,
  isNotify,
  reactions,
  comments,
  shares,
  reacts,
  image,
}: CardPostProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <AuthorPost author={author} isNotify={isNotify} />
      </div>
      {isNotify ? (
        <div className="flex items-center rounded-xl p-[1px] overflow-hidden border border-neutral-[#D1D1D1]">
          <div className="relative aspect-[1.3855421687] rounded-l-xl overflow-hidden min-w-[115px] h-full">
            <Image
              src="https://s3-alpha-sig.figma.com/img/a800/4915/3fb7405cdd5436ee957aac03cd84b741?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sV2NqCuLtI9eyFu8WWq0JtPqH3BZBG9Wp8AqQyAvikCYsdt-0oZ2S5Ayl8qhSl18mdfXXqfWXDEjSCL4yQYZS9hubYQLpUe4QVwJzcuAa2ZJ6rOLEjvVottada43fz2p53t3ILkaCDC-0HyayN~1sANrPGLVu7eDDCuvTRCfMaHAvuT7gEc9QgQ8nrNnM1fjqf562x~GAH5EnvMczfouX~D8nMFScSIg1J3E2qgWxzNckHxCwEv-cdcY-E68uoizjkrShZn~clc5neOkyE1ZXP-q7GWzLNa9obrEaylnPRzYBWDfgrBS0dFuZdpguZ~IxnuZEjVvScvTYZW3fRTWEw__"
              alt="notify"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-1.5 p-3">
            <p className="text-base font-medium line-clamp-1">
              Bitcoin having…
            </p>
            <p className="text-sm font-normal text-neutral-04 line-clamp-2">
              Use our Quantum halving countdown to...
            </p>
          </div>
        </div>
      ) : (
        <>
          {image ? (
            <div className="relative h-[183px] w-full rounded-lg overflow-hidden">
              <Image
                src="https://s3-alpha-sig.figma.com/img/095f/e892/9f16158e81f88d0d9785a5d07b74a945?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KudhJy5zs9~CfeCs78BM8MbYbI7VT6crSKFWPtppcz1BC3Vq8gNa34egR1YUFnCVDZckQNeuKeY1XmE02KK4Spqdts9d3MmcIvcsaCbGxYcD61hEHOTE4WL6ahECMlvbvlljtqYo89t3-17X8ftIFdrl5DdZA9pNRuIU9YX306HRmPGQz0n5XdDJq3eLJdSq9mp5VMhtMem1BIRewxFa4Qh9utcbflJV90fZg3n7yX4~ziquXH0YkOlkVxZu4dW4U8t6exJ2Yrkh9AXa899Nj3R7kk-nXAiIwlyfa0jwud2sc~Bw5LWhFiwctK5Ix3D~EamUXlBznLOQbjxaM1iP2Q__"
                alt="notify"
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <p className="text-[13px] leading-[19.5px]">
              reBTC - Always has the same value as BTC ✅ <br />
              What is reBTC? A token representing real BTC on the RENEC
              blockchain. 🪙 <br />
              Each 1 reBTC always = 1 BTC. ➗ <br />
              Because RENEC Foundation only releases reBTC when users deposit
              BTC. <br />
              📥 So the value of reBTC is always guaranteed 1:1 with real BTC.
              🤝 <br />
              BTC Reserve:{" "}
              <span className="text-primary-light">t.co/nxNuOgFtZQ</span> <br />
              reBTC: <span className="text-primary-light">
                t.co/5PcrAKhdQX
              </span>{" "}
              <br />
              This helps users feel secure when using reBTC on RENEC Blockchain.
              😌 <br />
              #RENEC #reBTC #reMoney #CaraxDemonWallet
            </p>
          )}
        </>
      )}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          {reactions.map((reaction) => (
            <Button
              key={reaction.type}
              variant="ghost"
              className="bg-[#0077ED14]  rounded-full"
              size="sm"
            >
              {reaction.type === "like" && (
                <BiSolidLike className="text-primary !size-5" />
              )}
              {reaction.type === "favorite" && (
                <FcLike className="text-[#F42829] !size-5" />
              )}
              {reaction.type === "bad" && (
                <ImSad2 className="text-[#FFBA51] !size-5" />
              )}
              <p className="text-sm font-normal">
                {formatNumberToKMBT(reaction.count)}
              </p>
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="rounded-full">
              <LuMessageSquareMore className="!size-5" />
              <p className="text-sm font-normal">{comments}</p>
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="rounded-full">
              <MdSync className="!size-5" />
              <p className="text-sm font-normal">{shares}</p>
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="rounded-full">
              <LuSmilePlus className="!size-5" />
              <p className="text-sm font-normal">{reacts}</p>
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <HiOutlineDotsHorizontal className="!size-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPost;
