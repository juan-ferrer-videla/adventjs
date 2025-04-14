import { describe, it, expect } from "vitest";
import { findInAgenda } from "."; // ajustá el path si es necesario

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`;

describe("findInAgenda", () => {
  it("debería encontrar a Juan Perez por teléfono exacto", () => {
    expect(findInAgenda(agenda, "34-600-123-456")).toEqual({
      name: "Juan Perez",
      address: "Calle Gran Via 12",
    });
  });

  it("debería encontrar a Maria Gomez por coincidencia parcial de teléfono", () => {
    expect(findInAgenda(agenda, "600-987")).toEqual({
      name: "Maria Gomez",
      address: "Plaza Mayor 45 Madrid 28013",
    });
  });

  it("debería devolver null si no hay coincidencias", () => {
    expect(findInAgenda(agenda, "111")).toBeNull();
  });

  it("debería devolver null si hay múltiples coincidencias", () => {
    expect(findInAgenda(agenda, "1")).toBeNull();
  });
});
