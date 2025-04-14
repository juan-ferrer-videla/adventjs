export function findInAgenda(
  agenda: string,
  phone: string
): { name: string; address: string } | null {
  interface Item {
    name: string;
    phone: string;
    address: string;
  }
  const parsedAgenda: Item[] = [];
  const matches: Omit<Item, "phone">[] = [];

  for (const line of agenda.split("\n")) {
    let isReadingName = false;
    let isReadingPhone = false;
    const objToMutate = {
      name: "",
      phone: "",
      address: "",
    };

    for (const char of line) {
      if (char === "<") {
        isReadingName = true;
        continue;
      }
      if (char === ">") {
        isReadingName = false;
        continue;
      }
      if (char === "+") {
        isReadingPhone = true;
        continue;
      }
      if (isReadingPhone && char === " ") {
        isReadingPhone = false;
        continue;
      }

      if (isReadingName) {
        objToMutate.name += char;
        continue;
      }
      if (isReadingPhone) {
        objToMutate.phone += char;
        continue;
      }
      objToMutate.address += char;
      continue;
    }
    parsedAgenda.push({ ...objToMutate, address: objToMutate.address.trim() });
  }

  for (const element of parsedAgenda) {
    if (element.phone.includes(phone)) {
      matches.push({ address: element.address, name: element.name });
    }
  }
  if (matches.length > 1) return null;
  return matches[0] ?? null;
}
