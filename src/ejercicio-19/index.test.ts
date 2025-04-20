import { describe, it, expect } from "vitest";
import { distributeWeight } from ".";

describe("distributeWeight", () => {
  it("debería manejar el peso 1", () => {
    expect(distributeWeight(1)).toBe(
      `
      _
      |_|
      `.trim()
    );
  });
  it("debería manejar el peso 1", () => {
    expect(distributeWeight(2)).toBe(
      `
      __
      |__|
      `.trim()
    );
  });
});
