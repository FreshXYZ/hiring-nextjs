import { useEffect, useRef } from 'react';

export const useSearchShortcut = () => {
  const searchFocusRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        searchFocusRef?.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeydown);
    return () => {
      window.removeEventListener('keydown', onKeydown);
    };
  }, []);
  return { searchFocusRef };
};
