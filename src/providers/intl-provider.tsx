import { NextIntlClientProvider } from "next-intl";
import { useMessages } from "next-intl";

const IntlProvider = ({ children }: { children: React.ReactNode }) => {
  const messages = useMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
};

export default IntlProvider;
