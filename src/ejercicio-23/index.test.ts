import { describe, it, expect } from "vitest";
import { findMissingNumbers } from ".";

describe("findMissingNumbers", () => {
  it("debería encontrar los números faltantes en [1, 2, 4, 6]", () => {
    expect(findMissingNumbers([1, 2, 4, 6])).toEqual([3, 5]);
  });

  it("debería encontrar los números faltantes en [4, 8, 7, 2]", () => {
    expect(findMissingNumbers([4, 8, 7, 2])).toEqual([1, 3, 5, 6]);
  });

  it("debería devolver un array vacío cuando no falta ningún número", () => {
    expect(findMissingNumbers([3, 2, 1, 1])).toEqual([]);
  });

  it("debería encontrar los números faltantes en [5, 5, 5, 3, 3, 2, 1]", () => {
    expect(findMissingNumbers([5, 5, 5, 3, 3, 2, 1])).toEqual([4]);
  });

  it("debería manejar un array vacío", () => {
    expect(findMissingNumbers([])).toEqual([]);
  });

  it("debería manejar un array con un solo número", () => {
    expect(findMissingNumbers([1])).toEqual([]);
    expect(findMissingNumbers([3])).toEqual([1, 2]);
  });
});
