export function createFrame(names: string[]): string {
  const lengths = names.map((name) => name.length);
  const max = Math.max(...lengths);

  const top = "*".repeat(max + 4) + "\n";
  const bottom = "*".repeat(max + 4);

  let body = "";

  for (const name of names) {
    body += `* ${name}${" ".repeat(max - name.length + 1)}*\n`;
  }
  return `${top}${body}${bottom}`;
}
