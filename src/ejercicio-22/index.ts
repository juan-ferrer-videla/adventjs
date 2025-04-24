export function generateGiftSets(gifts: string[]): string[][] {
  const result: string[][] = [];

  const combine = (
    start: number,
    combination: string[],
    combinationSize: number
  ) => {
    if (combination.length === combinationSize) {
      result.push([...combination]);
      return;
    }

    for (let i = start; i < gifts.length; i++) {
      combination.push(gifts[i]!);
      combine(i + 1, combination, combinationSize);
      combination.pop();
    }
  };

  for (let size = 1; size <= gifts.length; size++) {
    combine(0, [], size);
  }

  return result;
}
