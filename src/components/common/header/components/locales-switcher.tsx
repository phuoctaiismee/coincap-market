import { useLocale, useTranslations } from "next-intl";
import LocalesSwitcher from "./locales";

export default function LocaleSwitcher() {
  const t = useTranslations("global");
  const locale = useLocale();

  return (
    <LocalesSwitcher
      defaultValue={locale}
      label={t(locale === "en" ? "english" : "vietnamese")}
    />
  );
}
