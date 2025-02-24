import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import IntlProvider from "@/providers/intl-provider";
import SiteHeader from "@/components/common/header";
import SiteFooter from "@/components/common/footer";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  return (
    <IntlProvider>
      <SiteHeader />
      {children}
      <SiteFooter />
    </IntlProvider>
  );
}
