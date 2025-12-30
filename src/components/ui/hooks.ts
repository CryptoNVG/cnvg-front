import { useMemo, useState, useCallback, useEffect } from "react";

/**
 * Hook для подсчета символов в контролируемых и неконтролируемых компонентах
 */
export function useCharCount(
  value: string | number | readonly string[] | undefined,
  defaultValue: string | number | readonly string[] | undefined
) {
  return useMemo(() => {
    if (value !== undefined) return String(value).length;
    if (defaultValue !== undefined) return String(defaultValue).length;
    return 0;
  }, [value, defaultValue]);
}

/**
 * Hook для управления состоянием фокуса и стилями
 */
export function useFocusStyles(error?: string) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const getInputStyles = useCallback(() => {
    return {
      backgroundColor: isFocused ? 'var(--input-focus-bg)' : 'var(--input-bg)',
      borderColor: error ? 'var(--accent-red)' : (isFocused ? 'var(--input-focus-border)' : 'var(--input-border)'),
      color: isFocused ? 'var(--input-focus-text)' : 'var(--input-text)',
    };
  }, [isFocused, error]);

  const getInputClassName = useCallback((baseClassName: string, errorClassName?: string) => {
    return `${baseClassName} ${error ? (errorClassName || 'focus:border-accent-red') : 'focus:border-[var(--input-focus-border)]'}`.trim();
  }, [error]);

  return {
    isFocused,
    handleFocus,
    handleBlur,
    getInputStyles,
    getInputClassName,
  };
}

/**
 * Hook для обработки Cmd/Ctrl+A для выделения всего текста
 */
export function useSelectAll(ref: React.RefObject<HTMLInputElement | HTMLTextAreaElement | null>) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleKeyDown = (e: Event) => {
      if (!(e instanceof KeyboardEvent)) return;
      
      if ((e.metaKey || e.ctrlKey) && (e.key === 'a' || e.key === 'A')) {
        e.preventDefault();
        e.stopPropagation();
        element.select();
        if ('setSelectionRange' in element) {
          element.setSelectionRange(0, element.value.length);
        }
      }
    };

    element.addEventListener('keydown', handleKeyDown, true);
    return () => {
      element.removeEventListener('keydown', handleKeyDown, true);
    };
  }, [ref]);
}

