/*  
"2023122512345678_sleighDesign.png.grinchwa" ->  "sleighDesign.png"
*/

export function decodeFilename(filename: string): string {
  const [idWithName, extension] = filename.split(".") as [
    idWithName: string,
    extension: string,
    extra: string
  ];

  let name = "";
  for (let i = 1; i < idWithName.length; i++) {
    if (idWithName[i] !== "_") continue;
    name = idWithName.slice(i + 1);
    break;
  }

  return `${name}.${extension}`;
}
