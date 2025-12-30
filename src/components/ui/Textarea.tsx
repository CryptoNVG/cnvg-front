"use client";

import React, { useId, useRef, useMemo, useCallback, useEffect, useState } from "react";
import { useCharCount, useSelectAll } from "./hooks";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  minLines?: number;
}

export function Textarea({
  label,
  error,
  helperText,
  className = "",
  id,
  maxLength,
  value,
  defaultValue,
  onChange,
  onKeyDown,
  rows,
  minLines,
  ...props
}: TextareaProps) {
  const generatedId = useId();
  const textareaId = id || generatedId;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  
  // Используем useMemo для вычисления charCount вместо useState
  const charCount = useCharCount(value, defaultValue);
  
  // Мемоизируем вычисления высоты
  const minHeight = useMemo(() => {
    const linesToUse = minLines !== undefined ? minLines : (rows || 3);
    // Примерно 24px на строку + 24px padding
    return linesToUse * 24 + 24;
  }, [minLines, rows]);
  
  const initialRows = useMemo(() => {
    if (rows !== undefined) return rows;
    if (minLines !== undefined) return minLines;
    return 3; // дефолт
  }, [rows, minLines]);
  
  // Мемоизируем функцию adjustHeight
  const adjustHeight = useCallback(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      const scrollHeight = textarea.scrollHeight;
      const newHeight = Math.max(scrollHeight, minHeight);
      textarea.style.height = `${newHeight}px`;
    }
  }, [minHeight]);
  
  // Hook для обработки Cmd/Ctrl+A
  useSelectAll(textareaRef);
  
  // Вызываем adjustHeight при изменении value/defaultValue
  useEffect(() => {
    adjustHeight();
  }, [value, defaultValue, adjustHeight]);
  
  // Вызываем adjustHeight при монтировании
  useEffect(() => {
    adjustHeight();
  }, [adjustHeight]);
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    adjustHeight();
    if (onChange) {
      onChange(e);
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  const textareaStyles = useMemo(() => ({
    backgroundColor: isFocused ? 'var(--input-focus-bg)' : 'var(--input-bg)',
    borderColor: error ? 'var(--accent-red)' : (isFocused ? 'var(--input-focus-border)' : 'var(--input-border)'),
    color: isFocused ? 'var(--input-focus-text)' : 'var(--input-text)',
    transition: 'background-color 600ms, border-color 600ms, color 600ms',
    overflow: 'hidden' as const,
    resize: 'none' as const,
    minHeight: `${minHeight}px`,
  }), [isFocused, error, minHeight]);
  
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={textareaId} className="text-sm text-heading flex items-center justify-between">
          <span>{label}</span>
          {maxLength && (
            <span className={`text-xs ${charCount >= maxLength ? 'text-accent-red' : 'text-muted'}`}>
              {charCount} / {maxLength}
            </span>
          )}
        </label>
      )}
      <textarea
        ref={textareaRef}
        id={textareaId}
        maxLength={maxLength}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        rows={initialRows}
        style={textareaStyles}
        className={`
          w-full px-4 py-3
          rounded-2xl border
          text-base
          focus:outline-none
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error ? "focus:border-accent-red" : "focus:border-[var(--input-focus-border)]"}
          ${className}
        `.trim()}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      {error && (
        <span className="text-xs text-accent-red">{error}</span>
      )}
      {helperText && !error && (
        <span className="text-xs text-muted">{helperText}</span>
      )}
    </div>
  );
}

export default Textarea;

