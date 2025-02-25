import React from "react";
import FillterDropdown from "./fillter-dropdown";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const FillterLending = () => {
  const fillters = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/da67/5eec/59fdda2e9ff087c079c268c4d2d01b92?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dukD26ZdSLSDhG6jDp5Qi4OIVgAnqW2pinlTAx6Mk5RG0m0qF~s3JUXMAvWENOQQqlpn3FnAWSmuMPZxhiLwtYVNn-3S6RpPjt81UPxo9631Cl1pMZqKqPxktQrLhW0QQ6lzvucs6GUGNjVKKi91JOS2fFwgkk-yik28misSUQvTDX~Y4n53Y7s3G1xv7KXIFfKC~B8CsTZ47pHyFfTxTrZuvtKZjdKON9jObO85qLs~x0TmLXneqHnpD3Y8djssccCKoeJpLGjwIXrYLE-WW1on5kt6qIc3YK14K-ekIHdauE~OdT157J0D~v~4jKUa-lPaw-xohO6HyHQBVoI-Kg__",
      name: "BSC",
      value: "bsc",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/6df7/7990/8a61ee258686f979f30c52e576c9d8fb?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Bb9waqwSrrjFiuPj5tbD03-7op3dPA76mEIMaG6FqudHXN-syF2gNY0~vtUWJXt7MhweWf1W0x6wE832GKl-pr3SAcD-ZZ6AD5-zbL3h9XIar2DwxA~QKhYf8N9UzH9zbJcPlfCTTDp9wibzWHgHNT7wGAkmR2x5X~TJnNEha8EoRoeqiuvaEx58N4Y5DSAY5uIe~OptTJUB71SwHJWq7fFGL834-74u7hoPgyOB3zYa10d~UYKFal-eMxDlKu-H4bym1gtP648Q8xrhvFpq4Cl9HpT-uWdWn9Pas7RxTOcN9gRAldYY0j2c5CLRPxflyo4xsjE-a36a1mPK4nYr2A__",
      name: "Solana",
      value: "solana",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/b019/7315/e84ea61496a007da53b30921ec3a7448?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CVKn~Cnpcus9Cz5rJqLW9sRtbzqcmFOvl~vrK12PKyRbfE81Y3ahaRj1Yi4r97k-0oVsTOWfAdbVo1PpSa5mvXfdzZPJTd9OZdl2qrqyKva4MS7oLaTfK~0eWpte~rAfPiupGNkzXu90PGSJRLMl4-fFuhh9LWFstt6KorqwNpFB88~Lp4gxG6CtLelxppW6eN-FTu4raLx2d0RZ8kxEjStL~WPSgrM6YYYn741lRieW~OVPdvJCWHvGRvyWWDWj5u~u9AvsCIFX7NwKblSrG-lGqnZ9FItagepZT7ZQ8ZVy8k9Vev6ZvGS42qa4puHhOPjMN9e1WIo6ipe1ieEuGQ__",
      name: "Ethereum",
      value: "ethereum",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/3066/bffb/23b8fc1d552c5b05afc08d5ab55579b6?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Lj2jXxF8Y9h1ydkE0xv3EtIrknscLXYKJy1kmqViD3L6Hbux9RVEcbeOhNPMyt18XxxyleTay3lUve69LJd5MJoBJ~I3o6sraCyy01k2Kp2rPoQ2xwEXUorE9FUd~R8Fz4jvGfUJEZFpHSTQUza0mKU6fa~-SEWkyjajNj2z~RGU~P4yR0FhDlt81hGk6rJXOD0FDSwykV7RqaqDFGEqmM6M~EeW-Ar4SChEejBxmfX2lvabyNa2ktEZj3NJCQv2Dqs6Z1TBQzWpPPhMo7xaNuoJD7XuF0coQ2oUySSU7~yaQuCT6EVBRGSNfqsXPBn8UwzpyncHliSOlom4lwKPsA__",
      name: "Base",
      value: "base",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/c745/b47f/de4d517dcdc60e54c9fa8fedc49eda49?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bC2umXb5aG1q5tWdhuYIRZJzjdXO25n~~ZzDxU65KcZSXFcx6J57iL0Oib3rJedrR78ckslRYQn5zD7Kph~L17dyJlZyWkDeN7T6ggfjdoJjOpCYI0-Nfjq2PcuW-jFKj1JD~u58c-bsjs~2iBc1Q8RYPsF3-QTokda246z1N-VleEuDy6aMFmeHGVFUAvtCVWMlAaBNswj3a8GZ2ESwu8GBIH~FD6TYihy060qb~3f2tiXMtCNB2qWgzUZ8JtK47~Vu57HyZa71ATasgKrSbUFqaavfC9Z3CpbrIEpZtgI38YmQy3l5lzNYF8e25ZWj0EubS8jYjCrQdy5A5tg2kw__",
      name: "Arbitrum",
      value: "arbitrum",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/914e/6923/f40e8c4ff30fdf7659047ec322fe673d?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZaxQsqVahQjbczD~2htR2g8KeMaQZfZjZNUiSpyVRfB93IEn6aUlBUDUfBsmPtWbO~TW-lVW29Euqirm5z9ldqqMsS-Sw6hmAVnuUy7bzPfsTUocLloWwKeQP3au2es3QXDrr8swOx~OTHw7pcISxw3I22gWRHovljxJ6j0wc-qvEjrKqdk6BLjJffSqafsP4P2r7Ha-EqwpWAYrxa~OnbZ1AY3yTgv-kn1jSW6zYVb0tdrfqq7aGasFg3sjfOWfhYfZAWW0uW28kwTVfMpgebmiuu3p1b0cs1lGHC~KQhxH6SoWgUL9EIPUJTAYKSriBI6CXpHwwdSQMgweTHiDCg__",
      name: "Sui Network",
      value: "sui",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center gap-8">
        <FillterDropdown networks={fillters} />
        {fillters.map((network) => (
          <div key={network.value} className="flex items-center gap-3">
            <div className="relative size-6 aspect-square rounded-full overflow-hidden">
              <Image
                src={network.image}
                alt={network.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm">{network.name}</span>
          </div>
        ))}
      </div>
      <Button variant="link">
        View all pairs
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default FillterLending;
