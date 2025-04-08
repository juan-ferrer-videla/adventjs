export type Shoe = {
  type: "I" | "R";
  size: number;
};

export function organizeShoes(shoes: Shoe[]): number[] {
  const output = [];
  const list: Record<number, Record<"I" | "R", number>> = {};
  for (const { size, type } of shoes) {
    if (!(size in list)) {
      list[size] = {
        I: type === "I" ? 1 : 0,
        R: type === "R" ? 1 : 0,
      };
      continue;
    }
    list[size]![type]++;
    if (list[size]!.I > 0 && list[size]!.R > 0) {
      list[size]!.I--;
      list[size]!.R--;
      output.push(size);
    }
  }
  return output;
}
