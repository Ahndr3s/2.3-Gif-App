import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { CustomHeader } from "./CustomHeader";

describe("CustomHeader", () => {
  test("Should render the title correctly", () => {
    const testTitle = "Test Title";
    render(<CustomHeader title={testTitle} />);

    expect(screen.getByText(testTitle)).toBeDefined();
  });

  test("Should render the description when provided", () => {
    const testTitle = "Test Title";
    const testSubTitle = "Test Subtitle";

    render(<CustomHeader title={testTitle} subtitle={testSubTitle} />);
    expect(screen.getByText(testSubTitle)).toBeDefined();
    expect(screen.getByRole("paragraph")).toBeDefined();
    expect(screen.getByRole("paragraph").innerHTML).toBe(testSubTitle);
  });

  // -----------------PORQUE NO USAR SCREEN---------------------
  // Cuando usamos screen el elemento debe existir si o si

  // test("Should not render the description when no provided", () => {
  //   const testTitle = "Test Title";

  //   render(<CustomHeader title={testTitle} />);
  //   expect(screen.getByRole("paragraph")).not.toBeDefined();
  // });

  test("Should not render the description when no provided", () => {
    const testTitle = "Test Title";

    const { container } = render(<CustomHeader title={testTitle} />);
    const h1 = container.querySelector("h1");
    expect(h1?.innerHTML).toBe(testTitle);

    const p = container.querySelector("p");
    expect(p).toBeNull();
  });
});
