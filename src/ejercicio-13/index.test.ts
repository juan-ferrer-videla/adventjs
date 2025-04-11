import { describe, it, expect } from "vitest";
import { isRobotBack } from ".";

describe("isRobotBack", () => {
  it("should return [1, 0] for 'R'", () => {
    expect(isRobotBack("R")).toEqual([1, 0]);
  });

  it("should return true for 'RL'", () => {
    expect(isRobotBack("RL")).toBe(true);
  });

  it("should return true for 'RLUD'", () => {
    expect(isRobotBack("RLUD")).toBe(true);
  });

  it("should return [2, 1] for '*RU'", () => {
    expect(isRobotBack("*RU")).toEqual([2, 1]);
  });

  it("should return [1, 2] for 'R*U'", () => {
    expect(isRobotBack("R*U")).toEqual([1, 2]);
  });

  it("should return [-4, 0] for 'LLL!R'", () => {
    expect(isRobotBack("LLL!R")).toEqual([-4, 0]);
  });

  it("should return [1, 0] for 'R?R'", () => {
    expect(isRobotBack("R?R")).toEqual([1, 0]);
  });

  it("should return true for 'U?D'", () => {
    expect(isRobotBack("U?D")).toBe(true);
  });

  it("should return [2, 0] for 'R!L'", () => {
    expect(isRobotBack("R!L")).toEqual([2, 0]);
  });

  it("should return [0, 2] for 'U!D'", () => {
    expect(isRobotBack("U!D")).toEqual([0, 2]);
  });

  it("should return true for 'R?L'", () => {
    expect(isRobotBack("R?L")).toBe(true);
  });

  it("should return [0, 1] for 'U?U'", () => {
    expect(isRobotBack("U?U")).toEqual([0, 1]);
  });

  it("should return [0, 2] for '*U?U'", () => {
    expect(isRobotBack("*U?U")).toEqual([0, 2]);
  });

  it("should return true for 'U?D?U'", () => {
    expect(isRobotBack("U?D?U")).toBe(true);
  });
});
