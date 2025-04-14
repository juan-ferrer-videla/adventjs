import { describe, it, expect } from "vitest";
import { drawTable } from ".";

describe("drawTable", () => {
  it("should draw a table with names and cities", () => {
    const input = [
      { name: "Alice", city: "London" },
      { name: "Bob", city: "Paris" },
      { name: "Charlie", city: "New York" },
    ];

    const expected = `
+---------+----------+
| Name    | City     |
+---------+----------+
| Alice   | London   |
| Bob     | Paris    |
| Charlie | New York |
+---------+----------+`.trim();

    expect(drawTable(input)).toBe(expected);
  });

  it("should draw a table with gifts and quantities", () => {
    const input = [
      { gift: "Doll", quantity: 10 },
      { gift: "Book", quantity: 5 },
      { gift: "Music CD", quantity: 1 },
    ];

    const expected = `
+----------+----------+
| Gift     | Quantity |
+----------+----------+
| Doll     | 10       |
| Book     | 5        |
| Music CD | 1        |
+----------+----------+`.trim();

    expect(drawTable(input)).toBe(expected);
  });

  it("should handle an empty array", () => {
    expect(drawTable([])).toBe("");
  });

  it("should handle single entry", () => {
    const input = [{ name: "Diana", city: "Madrid" }];

    const expected = `
+-------+--------+
| Name  | City   |
+-------+--------+
| Diana | Madrid |
+-------+--------+`.trim();

    expect(drawTable(input)).toBe(expected);
  });

  it("should handle numeric and string fields", () => {
    const input = [
      { item: "Toy", stock: 50 },
      { item: "Game", stock: 1234 },
    ];

    const expected = `
+------+-------+
| Item | Stock |
+------+-------+
| Toy  | 50    |
| Game | 1234  |
+------+-------+`.trim();

    expect(drawTable(input)).toBe(expected);
  });
});
