/**
 *
 * @param value
 * @returns
 */

interface FormatCurrencyProps {
  value: number;
  locale: "en-US" | "vi-VN";
  currency: string;
}

export const formatCurrency = ({
  value,
  locale = "en-US",
  currency,
}: FormatCurrencyProps) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(value);
};
