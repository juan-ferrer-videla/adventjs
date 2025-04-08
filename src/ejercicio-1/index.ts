export function prepareGifts(gifts: number[]): number[] {
  const set = new Set(gifts);
  return Array.from(set).sort((a, b) => a - b);
}
