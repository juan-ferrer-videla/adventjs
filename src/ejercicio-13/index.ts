export function isRobotBack(moves: string): true | [number, number] {
  const movesSet = new Set<string>();

  let y = 0;
  let x = 0;
  let unique = false;
  let modifier = 1;

  const opposites = {
    D: "U",
    U: "D",
    L: "R",
    R: "L",
  };

  for (const char of moves) {
    switch (char) {
      case "!":
        modifier *= -1;
        continue;
      case "*":
        modifier *= 2;
        continue;
      case "?":
        unique = true;
        continue;
    }

    if (unique && movesSet.has(char)) {
      unique = false;
      continue;
    }

    switch (char) {
      case "L":
        x -= modifier;
        break;
      case "R":
        x += modifier;
        break;
      case "U":
        y += modifier;
        break;
      case "D":
        y -= modifier;
        break;
      default:
        continue;
    }
    movesSet.add(modifier < 0 ? opposites[char] : char);

    unique = false;
    modifier = 1;
  }

  if (y === 0 && x === 0) return true;
  return [x, y];
}
