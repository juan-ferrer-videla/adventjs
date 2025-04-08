export function drawRace(indices: number[], length: number): string {
  let output = "";
  for (let i = 0; i < indices.length; i++) {
    const r = indices[i]!;

    const space = " ".repeat(indices.length - 1 - i);
    let race = Array.from({ length }).fill("~");
    if (r > 0) {
      race[r] = "r";
    } else if (r < 0) {
      race[length + r] = "r";
    }

    const position = i + 1;
    output += `${space}${race.join("")} /${position}\n`;
  }
  return output.trimEnd();
}
