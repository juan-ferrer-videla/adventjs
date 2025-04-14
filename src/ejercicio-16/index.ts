export function removeSnow(s: string): string {
  let index = 1;
  let current;
  let prev;
  const array = s.split("");
  while (index < array.length) {
    if (index === 0) {
      index++;
      continue;
    }
    current = array[index];
    prev = array[index - 1];

    if (current === prev) {
      array.splice(index - 1, 2);
      if (index > 1) index--;
      continue;
    }
    index++;
  }
  return array.join("");
}
