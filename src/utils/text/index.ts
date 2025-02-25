/**
 * Format number to K, M, B, T
 * @param number
 * @returns
 */
export const formatNumberToKMBT = (number: number) => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  }
  if (number >= 1000) {
    return (number / 1000).toFixed(1) + "K";
  }
  if (number >= 1000000000) {
    return (number / 1000000000).toFixed(1) + "B";
  }
  if (number >= 1000000000000) {
    return (number / 1000000000000).toFixed(1) + "T";
  }
  return number;
};

export const formatThousandsWithCommas = (
  number: number,
  commas = ","
) => {
  return number.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};
