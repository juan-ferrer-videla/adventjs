import { describe, it, expect } from "vitest";
import { calculatePrice } from ".";

describe("calculatePrice", () => {
  it("(1 + 1 + 1)", () => {
    expect(calculatePrice("***")).toBe(3);
  });
  it("(5 - 1)", () => {
    expect(calculatePrice("*o")).toBe(4);
  });
  it("(5 + 1)", () => {
    expect(calculatePrice("o*")).toBe(6);
  });
  it("(-1 + 5 + 1)", () => {
    expect(calculatePrice("*o*")).toBe(5);
  });
  it("(1 - 1 + 5 + 1)", () => {
    expect(calculatePrice("**o*")).toBe(6);
  });
  it("(5 + 3)", () => {
    expect(calculatePrice("o***")).toBe(8);
  });
  it("(- 1 - 5 + 100)", () => {
    expect(calculatePrice("*o@")).toBe(94);
  });
  it("(-1 + 50)", () => {
    expect(calculatePrice("*#")).toBe(49);
  });
  it("(100 + 100 + 100)", () => {
    expect(calculatePrice("@@@")).toBe(300);
  });
  it("(-50 + 100)", () => {
    expect(calculatePrice("#@")).toBe(50);
  });
  it("(Z es desconocido)", () => {
    expect(calculatePrice("#@Z")).toBe(undefined);
  });
});
