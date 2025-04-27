export function findMissingNumbers(nums: number[]): number[] {
  const maxItem = Math.max(...nums);
  const numsSet = new Set(nums);
  const missingNumbers: number[] = [];

  for (let i = 1; i < maxItem; i++) {
    if (numsSet.has(i)) continue;
    numsSet.add(i);
    missingNumbers.push(i);
  }
  return Array.from(missingNumbers);
}
