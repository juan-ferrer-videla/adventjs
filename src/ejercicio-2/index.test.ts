import { describe, it, expect } from "vitest";
import { createFrame } from ".";

describe("prepareGifts", () => {
  it("Segui las instrucciones del readme", () => {
    expect(createFrame(["midu", "madeval", "educalvolpz"]))
      .toBe(`***************
* midu        *
* madeval     *
* educalvolpz *
***************`);
    expect(createFrame(["midu"])).toBe(`********
* midu *
********`);
  });
});
