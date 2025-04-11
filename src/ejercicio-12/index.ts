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
    const current = getValue(ornaments[i]!);
    const next = i < ornaments.length ? getValue(ornaments[i + 1]!) : undefined;

    if (!current) return undefined;
    if (!next) {
      total += current;
    } else if (current < next) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
}
