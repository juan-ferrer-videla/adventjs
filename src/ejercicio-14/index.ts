export function minMovesToStables(
  reindeer: number[],
  stables: number[]
): number {
  const sortedReindeers = reindeer.slice().sort((a, b) => a - b);
  const sortedStables = stables.slice().sort((a, b) => a - b);
  let total = 0;

  for (let i = 0; i < sortedReindeers.length; i++) {
    const reindeer = sortedReindeers[i]!;
    const stable = sortedStables[i]!;
    const diff = Math.abs(reindeer - stable);
    total += diff;
  }
  return total;
}
