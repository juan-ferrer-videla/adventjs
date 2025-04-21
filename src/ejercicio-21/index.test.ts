import { describe, it, expect } from "vitest";
import { treeHeight } from ".";

describe("treeHeight", () => {
  it("debería devolver 3 para el árbol de ejemplo con 🎁 como raíz", () => {
    const tree = {
      value: "🎁",
      left: {
        value: "🎄",
        left: { value: "⭐", left: null, right: null },
        right: { value: "🎅", left: null, right: null },
      },
      right: {
        value: "❄️",
        left: null,
        right: { value: "🦌", left: null, right: null },
      },
    };

    expect(treeHeight(tree)).toBe(3);
  });

  it("debería devolver 0 si el árbol está vacío (null)", () => {
    expect(treeHeight(null)).toBe(0);
  });

  it("debería devolver 1 para un solo nodo", () => {
    const tree = {
      value: "🎁",
      left: null,
      right: null,
    };
    expect(treeHeight(tree)).toBe(1);
  });

  it("debería devolver 4 si el árbol tiene una rama larga izquierda", () => {
    const tree = {
      value: "🎁",
      left: {
        value: "🎄",
        left: {
          value: "⭐",
          left: {
            value: "🎈",
            left: null,
            right: null,
          },
          right: null,
        },
        right: null,
      },
      right: null,
    };

    expect(treeHeight(tree)).toBe(4);
  });

  it("debería devolver 2 si hay un nodo raíz con un solo hijo", () => {
    const tree = {
      value: "🎁",
      left: null,
      right: {
        value: "🎄",
        left: null,
        right: null,
      },
    };

    expect(treeHeight(tree)).toBe(2);
  });
});
