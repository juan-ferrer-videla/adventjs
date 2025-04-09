import { describe, it, expect } from "vitest";
import { moveTrain } from ".";

describe("drawRace", () => {
  const board = ["·····", "*····", "@····", "o····", "o····"];
  it("should eat", () => {
    expect(moveTrain(board, "U")).toBe("eat");
  });
  it("should crash", () => {
    expect(moveTrain(board, "D")).toBe("crash");
  });
  it("should crash", () => {
    expect(moveTrain(board, "L")).toBe("crash");
  });
  it("should none", () => {
    expect(moveTrain(board, "R")).toBe("none");
  });
});
