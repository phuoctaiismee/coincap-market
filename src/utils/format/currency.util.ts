export function formatCurrency(
  amount: number,
  locale: string = "vi-VN"
): string {
  return new Intl.NumberFormat(locale, {
    useGrouping: true,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}
