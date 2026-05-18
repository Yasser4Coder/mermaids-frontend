export const SHIPPING_DZD = 1100;

export function formatDZD(amount) {
  const n = Math.round(Number(amount));
  const s = String(Math.abs(n)).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${n < 0 ? "−" : ""}${s} DZD`;
}
