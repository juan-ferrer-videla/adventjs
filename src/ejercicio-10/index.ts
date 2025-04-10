type Instructions =
  | [instruction: "MOV", value: string, registry: string]
  | [instruction: "JMP", registry: string, index: string]
  | [instruction: "INC", registry: string]
  | [instruction: "DEC", registry: string];

export function compile(instructions: string[]): number | undefined {
  const map = new Map<string, number | undefined>([["A", undefined]]);
  let index = 0;
  while (instructions.length > index) {
    const instruction = instructions[index]!;
    const [op, arg1, arg2] = instruction.split(" ") as Instructions;
    switch (op) {
      case "MOV":
        const toNumber = parseInt(arg1);
        const value = Number.isNaN(toNumber) ? map.get(arg1) ?? 0 : toNumber;
        map.set(arg2, value);
        break;
      case "INC":
        map.set(arg1, (map.get(arg1) ?? 0) + 1);
        break;
      case "DEC":
        map.set(arg1, (map.get(arg1) ?? 0) - 1);
        break;
      case "JMP":
        if (!map.get(arg1)) {
          index = parseInt(arg2);
          continue;
        }
        break;

      default:
        const _: never = op;
    }

    index++;
  }
  return map.get("A");
}
