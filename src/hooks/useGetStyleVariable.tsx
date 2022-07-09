import { useEffect, useState } from "react";

export const useGetStyleVariable = (name: string) => {
  const [styleValue, setStyleValue] = useState("");

  const getStyleVariable = () => {
    const variableValue = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(name);

    setStyleValue(variableValue);
  };

  useEffect(() => {
    getStyleVariable();
  }, []);

  return styleValue;
};
