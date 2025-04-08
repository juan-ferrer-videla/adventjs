export function createXmasTree(height: number, ornament: string): string {
  let output = "";
  for (let i = 0; i < height; i++) {
    const air = "_".repeat(height - i - 1);
    const sideOrnaments = ornament.repeat(i);
    output += `${air}${sideOrnaments}${ornament}${sideOrnaments}${air}\n`;
  }
  const air = "_".repeat(height - 1);
  const base = `${air}#${air}`;
  const bottom = base + "\n" + base;
  output += bottom;

  return output;
}
