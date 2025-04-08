export function inBox(box: string[]): boolean {
  for (let i = 1; i < box.length - 1; i++) {
    const line = box[i]!;
    let start = false;
    for (let j = 0; j < line.length; j++) {
      const char = line[j]!;
      if (!start && char !== "#") continue;
      if (!start && char === "#") {
        start = true;
        continue;
      }
      if (char === "#") break;
      if (char === "*") return true;
    }
  }
  return false;
}

/*
Con regex, mejor puntuado segun el adventjs, para mi es mas ineficiente, tanto en espacio como tiempo.
export function inBox(box: string[]): boolean {
  for (let i = 1; i < box.length - 1; i++) {
    const line = box[i]!;
    if (/^#.*\*.*#$/.test(line)) return true;
  }
  return false;
}
 */
