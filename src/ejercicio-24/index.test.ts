import { describe, it, expect } from "vitest";
import { isTreesSynchronized } from ".";

describe("isTreesSynchronized", () => {
  it("debería retornar [true, ‘🎄’] para dos árboles espejo", () => {
    const tree1 = {
      value: "🎄",
      left: { value: "⭐" },
      right: { value: "🎅" },
    };

    const tree2 = {
      value: "🎄",
      left: { value: "🎅" },
      right: { value: "⭐" },
    };

    expect(isTreesSynchronized(tree1, tree2)).toEqual([true, "🎄"]);
  });

  it("debería retornar [false, ‘🎄’] para árboles que no son espejo", () => {
    const tree1 = {
      value: "🎄",
      left: { value: "⭐" },
      right: { value: "🎅" },
    };

    const tree3 = {
      value: "🎄",
      left: { value: "🎅" },
      right: { value: "🎁" },
    };

    expect(isTreesSynchronized(tree1, tree3)).toEqual([false, "🎄"]);
  });

  it("debería retornar [false, ‘🎄’] para árboles con mismo shape pero diferente estructura interna", () => {
    const tree1 = {
      value: "🎄",
      left: { value: "⭐" },
      right: { value: "🎅" },
    };

    const tree4 = {
      value: "🎄",
      left: { value: "⭐" },
      right: { value: "🎅" },
    };

    expect(isTreesSynchronized(tree1, tree4)).toEqual([false, "🎄"]);
  });

  it("debería retornar [false, ‘🎅’] si las raíces son distintas", () => {
    const treeA = { value: "🎅" };
    const treeB = { value: "🧑‍🎄" };

    expect(isTreesSynchronized(treeA, treeB)).toEqual([false, "🎅"]);
  });

  it("debería manejar árboles vacíos correctamente", () => {
    const treeEmpty = null;
    const tree = { value: "⭐" };

    expect(isTreesSynchronized(treeEmpty, tree)).toEqual([false, undefined]);
    expect(isTreesSynchronized(tree, treeEmpty)).toEqual([false, "⭐"]);
    expect(isTreesSynchronized(null, null)).toEqual([true, undefined]);
  });
});
