export function fixPackages(packages: string): string {
  const stack: string[] = [];
  for (const char of packages) {
    if (char !== ")") {
      stack.push(char);
      continue;
    }

    let reverse = "";
    while (stack.length && stack[stack.length - 1] !== "(") {
      reverse += stack.pop();
    }
    stack.pop();
    for (const char of reverse) {
      stack.push(char);
    }
  }
  return stack.join("");
}
