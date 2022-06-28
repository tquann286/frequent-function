export const formatNumber = (num) => {
  return Intl.NumberFormat('en-US', {
    notation: "compact",
    maximumFractionDigits: 1
  }).format(num);
}

formatNumber(389210)
// output: '389.2K'