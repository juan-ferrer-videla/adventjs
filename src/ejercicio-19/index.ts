export function distributeWeight(weight: number): string {
  let result = "";
  const weights = [1, 2, 5, 10];
  const weightMap = new Map<number, number>();

  const boxRepresentations: Record<
    number,
    [string, string] | [string, string, string]
  > = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"],
  };

  while (weight > 0) {
    for (let i = weights.length - 1; i >= 0; i--) {
      const element = weights[i]!;
      if (weight < element) continue;
      const boxes = Math.floor(weight / element);
      weight -= boxes * element;
      weightMap.set(element, (weightMap.get(element) ?? 0) + boxes);
    }
  }
  const boxesTupple: [size: number, count: number][] = Array.from(
    weightMap
  ).sort((a, b) => a[0] - b[0]);

  const firstBox = boxRepresentations[boxesTupple[0]![0]!]!;
  result += firstBox.join("\n");
  let prevLength = firstBox[1].length;
  boxesTupple[0]![1]! = boxesTupple[0]![1]! - 1;

  for (let i = 0; i < boxesTupple.length; i++) {
    const [size, count] = boxesTupple[i]!;
    const representation = boxRepresentations[size]!;
    let diff = representation[1]!.length - prevLength;
    for (let j = 0; j < count; j++) {
      let parsed = [...representation];
      parsed[0] = diff > 0 ? `${"_".repeat(diff - 1)}` : "";
      result += parsed.join("\n");
      diff = 0;
    }
    prevLength = representation[1].length;
  }
  return result;
}

distributeWeight(21);
