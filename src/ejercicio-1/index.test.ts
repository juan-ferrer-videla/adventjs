import { describe, it, expect } from "vitest";
import { prepareGifts } from ".";

describe("prepareGifts", () => {
  it("Deberia eliminar duplicados y ordenarlo de forma ascendente", () => {
    expect(prepareGifts([3, 1, 2, 3, 4, 2, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(prepareGifts([6, 5, 5, 5, 5])).toEqual([5, 6]);
    expect(prepareGifts([])).toEqual([]);
  });
});
