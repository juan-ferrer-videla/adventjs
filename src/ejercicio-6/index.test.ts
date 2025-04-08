import { describe, it, expect } from "vitest";
import { inBox } from ".";

describe("inBox", () => {
  it("Segui las instrucciones del README", () => {
    expect(inBox(["###", "#*#", "###"])).toBe(true);
    expect(inBox(["####", "#* #", "#  #", "####"])).toBe(true);
    expect(inBox(["#####", "#   #", "#  #*", "#####"])).toBe(false);
    expect(inBox(["#####", "#   #", "#   #", "#   #", "#####"])).toBe(false);
  });
});
