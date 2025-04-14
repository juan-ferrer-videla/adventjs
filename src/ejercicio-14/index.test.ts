import { describe, it, expect } from "vitest";
import { minMovesToStables } from ".";

describe("minMovesToStables", () => {
  it("should return 3 for [2, 6, 9] and [3, 8, 5]", () => {
    expect(minMovesToStables([2, 6, 9], [3, 8, 5])).toBe(3);
  });

  it("should return 8 for [1, 1, 3] and [1, 8, 4]", () => {
    expect(minMovesToStables([1, 1, 3], [1, 8, 4])).toBe(8);
  });

  it("should return 0 for same positions", () => {
    expect(minMovesToStables([1, 2, 3], [1, 2, 3])).toBe(0);
  });

  it("should handle reversed inputs", () => {
    expect(minMovesToStables([3, 2, 1], [1, 2, 3])).toBe(0);
  });

  it("should handle large distances", () => {
    expect(minMovesToStables([0, 100, 200], [50, 150, 250])).toBe(150);
  });

  it("should return 0 for empty arrays", () => {
    expect(minMovesToStables([], [])).toBe(0);
  });

  it("should work with negative positions", () => {
    expect(minMovesToStables([-5, -10, 0], [0, -10, -5])).toBe(0);
  });
});
