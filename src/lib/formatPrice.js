export function formatPriceAmount(amount) {
  const n = Math.round(Number(amount));
  return String(Math.abs(n)).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function formatReviewsCount(count) {
  if (count >= 1000) {
    const k = count / 1000;
    const text = Number.isInteger(k) ? String(k) : k.toFixed(1);
    return `(${text}k)`;
  }
  return `(${count})`;
}
