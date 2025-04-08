import { describe, it, expect } from "vitest";
import { createXmasTree } from ".";

describe("createXmasTree", () => {
  it("Segui las instrucciones del README", () => {
    expect(createXmasTree(5, "*")).toBe(
      `
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
`.trim()
    );

    expect(createXmasTree(3, "+")).toBe(
      `
__+__
_+++_
+++++
__#__
__#__
`.trim()
    );
  });
});
