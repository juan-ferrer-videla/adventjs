import { describe, it, expect } from "vitest";
import { organizeInventory } from ".";

describe("prepareGifts", () => {
  it("Segui las instrucciones del README", () => {
    const inventory = [
      { name: "doll", quantity: 5, category: "toys" },
      { name: "car", quantity: 3, category: "toys" },
      { name: "ball", quantity: 2, category: "sports" },
      { name: "car", quantity: 2, category: "toys" },
      { name: "racket", quantity: 4, category: "sports" },
    ];
    expect(organizeInventory(inventory)).toEqual({
      toys: {
        doll: 5,
        car: 5,
      },
      sports: {
        ball: 2,
        racket: 4,
      },
    });

    const inventory2 = [
      { name: "book", quantity: 10, category: "education" },
      { name: "book", quantity: 5, category: "education" },
      { name: "paint", quantity: 3, category: "art" },
    ];

    expect(organizeInventory(inventory2)).toEqual({
      education: {
        book: 15,
      },
      art: {
        paint: 3,
      },
    });
  });
});
