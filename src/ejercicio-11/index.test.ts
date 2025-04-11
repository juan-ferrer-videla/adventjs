import { describe, it, expect } from "vitest";
import { decodeFilename } from ".";

describe("decodeFilename", () => {
  it("should be 2", () => {
    expect(decodeFilename("2023122512345678_sleighDesign.png.grinchwa")).toBe(
      "sleighDesign.png"
    );
    expect(decodeFilename("42_chimney_dimensions.pdf.hack2023")).toBe(
      "chimney_dimensions.pdf"
    );
    expect(decodeFilename("987654321_elf-roster.csv.tempfile")).toBe(
      "elf-roster.csv"
    );
  });
});
