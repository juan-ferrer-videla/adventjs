import { describe, it, expect } from "vitest";
import { fixGiftList } from ".";

describe("fixGiftList", () => {
  it("debería devolver el regalo 'ball' como faltante y un 'car' como extra", () => {
    const received = ["puzzle", "car", "doll", "car"];
    const expected = ["car", "puzzle", "doll", "ball"];
    const result = fixGiftList(received, expected);
    expect(result).toEqual({
      missing: { ball: 1 },
      extra: { car: 1 },
    });
  });

  it("debería devolver 'ball' y un 'kite' como faltantes, y un 'train' como extra", () => {
    const received = ["book", "train", "kite", "train"];
    const expected = ["train", "book", "kite", "ball", "kite"];
    const result = fixGiftList(received, expected);
    expect(result).toEqual({
      missing: { ball: 1, kite: 1 },
      extra: { train: 1 },
    });
  });

  it("debería devolver 'puzzle' y dos 'car' como faltantes", () => {
    const received = ["bear", "bear", "car"];
    const expected = ["bear", "car", "puzzle", "bear", "car", "car"];
    const result = fixGiftList(received, expected);
    expect(result).toEqual({
      missing: { puzzle: 1, car: 2 },
      extra: {},
    });
  });

  it("no debería devolver ni regalos faltantes ni extras", () => {
    const received = ["bear", "bear", "car"];
    const expected = ["car", "bear", "bear"];
    const result = fixGiftList(received, expected);
    expect(result).toEqual({
      missing: {},
      extra: {},
    });
  });
});
