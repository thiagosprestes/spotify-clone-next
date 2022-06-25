export const getStyleVariable = (name: string) =>
  window.getComputedStyle(document.documentElement).getPropertyValue(name);
