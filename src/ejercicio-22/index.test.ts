import { describe, it, expect } from "vitest";
import { generateGiftSets } from ".";

describe("generateGiftSets", () => {
  it("debería generar todas las combinaciones posibles de ['car', 'doll', 'puzzle']", () => {
    const result = generateGiftSets(["car", "doll", "puzzle"]);
    expect(result).toEqual([
      ["car"],
      ["doll"],
      ["puzzle"],
      ["car", "doll"],
      ["car", "puzzle"],
      ["doll", "puzzle"],
      ["car", "doll", "puzzle"],
    ]);
  });

  it("debería generar todas las combinaciones posibles de ['ball']", () => {
    const result = generateGiftSets(["ball"]);
    expect(result).toEqual([["ball"]]);
  });

  it("debería generar todas las combinaciones posibles de ['game', 'pc']", () => {
    const result = generateGiftSets(["game", "pc"]);
    expect(result).toEqual([["game"], ["pc"], ["game", "pc"]]);
  });

  it("debería generar todas las combinaciones posibles de ['a', 'b', 'c', 'd']", () => {
    const result = generateGiftSets(["a", "b", "c", "d"]);
    expect(result).toEqual([
      ["a"],
      ["b"],
      ["c"],
      ["d"],
      ["a", "b"],
      ["a", "c"],
      ["a", "d"],
      ["b", "c"],
      ["b", "d"],
      ["c", "d"],
      ["a", "b", "c"],
      ["a", "b", "d"],
      ["a", "c", "d"],
      ["b", "c", "d"],
      ["a", "b", "c", "d"],
    ]);
  });
});
