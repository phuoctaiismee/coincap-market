import { IGlobalLayoutProps } from "@/types";
import ReactLenis from "lenis/react";

const LenisProvider = ({ children }: IGlobalLayoutProps) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        smoothWheel: true,
        touchMultiplier: 2,
        touchInertiaMultiplier: 2,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default LenisProvider;
