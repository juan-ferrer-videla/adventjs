type Board = string[];
type Movement = "U" | "D" | "R" | "L";
type Result = "none" | "crash" | "eat";

export function moveTrain(board: Board, mov: Movement): Result {
  for (let i = 0; i < board.length; i++) {
    const line = board[i]!;
    for (let j = 0; j < line.length; j++) {
      let next;
      const char = line[j]!;
      if (char !== "@") continue;
      switch (mov) {
        case "D":
          next = board[i + 1]?.[j];
          break;
        case "L":
          next = line[j - 1];
          break;
        case "R":
          next = line[j + 1];
          break;
        case "U":
          next = board[i - 1]?.[j];
          break;
        default:
          const _: never = mov;
      }
      if (next === "*") return "eat";
      if (next === "·") return "none";
      return "crash";
    }
  }
  return "none";
}
