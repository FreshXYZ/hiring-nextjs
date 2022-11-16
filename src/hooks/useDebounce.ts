import { useEffect, useState } from 'react';

export const useDebounce = ({
  value,
  delay,
}: {
  value: string | number | undefined;
  delay: number;
}) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};
