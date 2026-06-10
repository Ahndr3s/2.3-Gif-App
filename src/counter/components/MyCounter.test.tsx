import { describe, expect, test } from "vitest";
import { render, screen, act, fireEvent } from "@testing-library/react";
import { MyCounter } from "./MyCounter";

describe("MyCounter", () => {
  test("Should render the counter component correctly", () => {
    render(<MyCounter />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      `Counter: 10`,
    );
    expect(screen.getByRole("button", { name: "+1" })).toBeDefined();
    expect(screen.getByRole("button", { name: "-1" })).toBeDefined();
    expect(screen.getByRole("button", { name: "Reset" })).toBeDefined();
  });

  test("Should increment the value of the counter state", () => {
    render(<MyCounter />);

    const labelH1 = screen.getByRole("heading", { level: 1 });
    const button = screen.getByRole("button", { name: "+1" });

    fireEvent.click(button);

    expect(labelH1.innerHTML).toContain(["Counter: 11"]);
  });
});
