import { describe, it, expect } from "vitest";
import { detectBombs } from "."; // Ajustá el path si es necesario

describe("detectBombs", () => {
  it("debería detectar bombas vecinas correctamente en una matriz 3x3", () => {
    const input = [
      [true, false, false],
      [false, true, false],
      [false, false, false],
    ];
    const expected = [
      [1, 2, 1],
      [2, 1, 1],
      [1, 1, 1],
    ];
    expect(detectBombs(input)).toEqual(expected);
  });

  it("debería detectar bombas vecinas en una matriz 2x2 con una bomba", () => {
    const input = [
      [true, false],
      [false, false],
    ];
    const expected = [
      [0, 1],
      [1, 1],
    ];
    expect(detectBombs(input)).toEqual(expected);
  });

  it("debería detectar bombas vecinas en una matriz 3x2 con bombas en los bordes", () => {
    const input = [
      [true, true],
      [false, false],
      [true, true],
    ];
    const expected = [
      [1, 1],
      [4, 4],
      [1, 1],
    ];
    expect(detectBombs(input)).toEqual(expected);
  });
});
