type Inventory = Array<{ name: string; quantity: number; category: string }>;

type Output = Record<string, Record<string, number>>;

export function organizeInventory(inventory: Inventory): Output {
  const output: Output = {};

  for (const { category, name, quantity } of inventory) {
    if (!(category in output)) {
      output[category] = { [name]: quantity };
      continue;
    }
    if (!(name in output[category]!)) {
      output[category]![name] = quantity;
      continue;
    }

    output[category]![name]! += quantity;
  }

  return output;
}
