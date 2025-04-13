function getValue(char: string): number | undefined {
  switch (char) {
    case "*":
      return 1;
    case "o":
      return 5;
    case "^":
      return 10;
    case "#":
      return 50;
    case "@":
      return 100;
    default:
      return undefined;
  }
}

export function calculatePrice(ornaments: string): number | undefined {
  let total = 0;

  for (let i = 0; i < ornaments.length; i++) {
    const char = ornaments[i]!;
    const nextChar = ornaments[i + 1];
    const current = getValue(char!);
    const next = nextChar !== undefined ? getValue(nextChar) : nextChar;

    if (!current) return undefined;
    if (next && current < next) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
}
