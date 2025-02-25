import { NextIntlClientProvider } from "next-intl";
import { useMessages } from "next-intl";

const IntlProvider = ({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) => {
  const messages = useMessages();
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
};

export default IntlProvider;
