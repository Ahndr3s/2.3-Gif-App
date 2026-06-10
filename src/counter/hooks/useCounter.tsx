import { useState } from "react";

export const useCounter = (initalValue: number = 3) => {
  const [counter, setCounter] = useState(initalValue);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubstract = () => {
    setCounter((prev) => prev - 1);
  };

  const handleReset = () => {
    setCounter(initalValue);
  };

  return { counter, handleAdd, handleSubstract, handleReset };
};
