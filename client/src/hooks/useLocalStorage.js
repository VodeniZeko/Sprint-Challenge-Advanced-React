import { useState } from "react";

export const useLocalStorage = (key, initValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const localValue = window.localStorage.getItem(key);
    return localValue ? JSON.parse(localValue) : initValue;
  });
  const setValue = newValue => {
    setStoredValue(newValue);
    window.localStorage.setItem(key, JSON.stringify(newValue));
  };
  return [storedValue, setValue];
};
