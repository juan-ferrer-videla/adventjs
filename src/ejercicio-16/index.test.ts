import { describe, it, expect } from "vitest";
import { removeSnow } from "."; // ajustá el path si hace falta

describe("removeSnow", () => {
  it('debería eliminar montículos repetidos de forma recursiva: caso "zxxzoz"', () => {
    expect(removeSnow("zxxzoz")).toBe("oz");
  });

  it('debería eliminar "dd" en "abcdd" y retornar "abc"', () => {
    expect(removeSnow("abcdd")).toBe("abc");
  });

  it('debería reducir "zzz" a "z" eliminando un par de "zz"', () => {
    expect(removeSnow("zzz")).toBe("z");
  });

  it('no debería cambiar la entrada si no hay montículos repetidos: "a"', () => {
    expect(removeSnow("a")).toBe("a");
  });
});
