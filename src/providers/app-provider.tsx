import { IGlobalLayoutProps } from "@/types";
import StoreProvider from "./store-provider";
import { ThemeProvider } from "./theme-provider";
import LenisProvider from "./lenis-provider";
import NextTopLoader from "nextjs-toploader";

export const AppProvider = ({ children }: IGlobalLayoutProps) => {
  return (
    <StoreProvider>
      <LenisProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader showSpinner={false} color="#00359E" />
          {children}
        </ThemeProvider>
      </LenisProvider>
    </StoreProvider>
  );
};
