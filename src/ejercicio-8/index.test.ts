import { describe, it, expect } from "vitest";
import { drawRace } from ".";

describe("drawRace", () => {
  it("Segui las instrucciones del README", () => {
    expect(drawRace([0, 5, -3], 10)).toBe(`  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3`);
    expect(drawRace([2, -1, 0, 5], 8)).toBe(`   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4`);
    expect(drawRace([3, 7, -2], 12)).toBe(`  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3`);
  });
});
