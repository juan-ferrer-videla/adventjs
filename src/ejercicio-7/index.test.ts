import { describe, it, expect } from "vitest";
import { fixPackages } from ".";

describe("fixPackages", () => {
  it("Segui las instrucciones del README", () => {
    expect(fixPackages("a(cb)de")).toBe("abcde");
    expect(fixPackages("a(bc(def)g)h")).toBe("agdefcbh");
    expect(fixPackages("abc(def(gh)i)jk")).toBe("abcighfedjk");
    expect(fixPackages("a(b(c))e")).toBe("acbe");
  });
});
