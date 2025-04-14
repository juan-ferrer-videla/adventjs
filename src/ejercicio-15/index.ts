export function drawTable(
  data: Array<Record<string, string | number>>
): string {
  if (data.length <= 0) return "";
  const headers = Object.keys(data[0]!).map(
    (key) => `${key[0]?.toUpperCase()}${key.slice(1)}`
  );
  const colsMax = headers.map((header) => header.length);
  const values = Object.values(data);
  const cols: string[][] = [];

  for (const row of values) {
    const tuppleRow = Object.values(row).map((value) => String(value));
    cols.push(tuppleRow);
    for (let i = 0; i < tuppleRow.length; i++) {
      const value = tuppleRow[i]!;
      if (colsMax[i]! < value.length) {
        colsMax[i] = value.length;
      }
    }
  }

  let body = "";
  let border = `+${colsMax.map((num) => `-`.repeat(num + 2)).join("+")}+`;
  const header = `|${headers
    .map((header, i) => ` ${header}${" ".repeat(colsMax[i]! - header.length)} `)
    .join("|")}|`;

  let content = "";
  cols.forEach((col) => {
    content += `|${col
      .map((value, i) => ` ${value}${" ".repeat(colsMax[i]! - value.length)} `)
      .join("|")}|\n`;
  });
  body += `${border}\n${header}\n${border}\n${content}${border}`;

  return body;
}
