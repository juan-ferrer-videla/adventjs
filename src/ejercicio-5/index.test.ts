import { describe, it, expect } from "vitest";
import { organizeShoes, Shoe } from ".";

describe("createXmasTree", () => {
  it("Segui las instrucciones del README", () => {
    const shoes: Shoe[] = [
      { type: "I", size: 38 },
      { type: "R", size: 38 },
      { type: "R", size: 42 },
      { type: "I", size: 41 },
      { type: "I", size: 42 },
    ];
    expect(organizeShoes(shoes)).toEqual([38, 42]);
    const shoes2: Shoe[] = [
      { type: "I", size: 38 },
      { type: "R", size: 38 },
      { type: "I", size: 38 },
      { type: "I", size: 38 },
      { type: "R", size: 38 },
    ];
    expect(organizeShoes(shoes2)).toEqual([38, 38]);

    const shoes3: Shoe[] = [
      { type: "I", size: 38 },
      { type: "R", size: 36 },
      { type: "R", size: 42 },
      { type: "I", size: 41 },
      { type: "I", size: 43 },
    ];

    expect(organizeShoes(shoes3)).toEqual([]);
  });
});
