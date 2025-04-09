type Board = string[];
type Movement = "U" | "D" | "R" | "L";
type Result = "none" | "crash" | "eat";

export function moveTrain(board: Board, mov: Movement): Result {
  let next: string | null = null;

  for (let i = 0; i < board.length; i++) {
    const line = board[i]!;
    for (let j = 0; j < line.length; j++) {
      const char = line[j]!;
      if (char !== "@") continue;
      switch (mov) {
        case "D":
          next = board[i + 1]?.[j] ?? null;
          break;
        case "L":
          next = line[j - 1] ?? null;
          break;
        case "R":
          next = line[j + 1] ?? null;
          break;
        case "U":
          next = board[i - 1]?.[j] ?? null;
          break;
      }
      console.log(char, next);
      if (next === "*") return "eat";
      if (next === "·") return "none";
      return "crash";
    }
  }
  return "none";
}
