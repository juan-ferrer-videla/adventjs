export function detectBombs(grid: boolean[][]): number[][] {
  const result: number[][] = [];
  for (let i = 0; i < grid.length; i++) {
    const lineUp = grid[i - 1];
    const lineDown = grid[i + 1];
    const line = grid[i]!;
    result.push([]);
    for (let j = 0; j < line.length; j++) {
      let nearBombs = 0;

      const next = line[j + 1] ?? false;
      const previous = line[j - 1] ?? false;
      let upperLeft = false;
      let upperMiddle = false;
      let upperRight = false;
      let downLeft = false;
      let downMiddle = false;
      let downRight = false;

      if (lineUp) {
        upperLeft = lineUp[j - 1] ?? false;
        upperMiddle = lineUp[j] ?? false;
        upperRight = lineUp[j + 1] ?? false;
      }
      if (lineDown) {
        downLeft = lineDown[j - 1] ?? false;
        downMiddle = lineDown[j] ?? false;
        downRight = lineDown[j + 1] ?? false;
      }
      const near = [
        next,
        previous,
        upperLeft,
        upperMiddle,
        upperRight,
        downLeft,
        downMiddle,
        downRight,
      ];
      near.forEach((isBomb) => {
        if (isBomb) nearBombs++;
      });
      result[i]!.push(nearBombs);
    }
  }
  return result;
}
