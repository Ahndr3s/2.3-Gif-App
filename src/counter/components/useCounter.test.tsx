import { describe, expect, test } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../hooks/useCounter";

describe("useCounter", () => {
  test("Should initailize with default value of 3", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(3);
  });

  test("Should initailize with a custom value", () => {
    const testInitialValue = 10;
    const { result } = renderHook(() => useCounter(testInitialValue));
    expect(result.current.counter).toBe(testInitialValue);
  });

  test("Should increment the counter state when handleAdd is called", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleAdd();
    });

    expect(result.current.counter).toBe(4);
  });

  test("Should decrement the counter state when handleSubstract is called", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleSubstract();
    });

    expect(result.current.counter).toBe(2);
  });

  test("Should set the counter state to its initial value when handleReset is called", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleReset();
    });

    expect(result.current.counter).toBe(3);
  });
});
