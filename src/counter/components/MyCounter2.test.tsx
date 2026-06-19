/*
    Simularemos el state de un hook complejo para probar TODAS sus
    funcinalidades
*/

import { describe, test, vi, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MyCounter } from "./MyCounter";

// Creacion de mocks a llamar
const handleAddMock = vi.fn();
const handleSubstractMock = vi.fn();
const handleResetMock = vi.fn();

// Creamos Mock del hook a evaluar
vi.mock("../hooks/useCounter", () => ({
  useCounter: () => ({
    counter: 40,
    handleAdd: handleAddMock,
    handleSubstract: handleSubstractMock,
    handleReset: handleResetMock,
  }),
}));

// Avaluamos el rednderizado del componente
describe("useCounter", () => {
  test("Should render the compoenent correctly", () => {
    render(<MyCounter />);

    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      `Counter: 40`,
    );
    expect(screen.getByRole("button", { name: "+1" })).toBeDefined();
    expect(screen.getByRole("button", { name: "-1" })).toBeDefined();
    expect(screen.getByRole("button", { name: "Reset" })).toBeDefined();
  });

  test("should call handleAdd if add button is pushed", () => {
    render(<MyCounter />);
    const button = screen.getByRole("button", { name: "+1" });
    fireEvent.click(button);

    expect(handleAddMock).toHaveBeenCalled();
    expect(handleAddMock).toHaveBeenCalledTimes(1);
    expect(handleSubstractMock).not.toHaveBeenCalled();
    expect(handleResetMock).not.toHaveBeenCalled();
  });
});
