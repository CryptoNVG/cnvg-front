"use client";

import React, { useId, useState, useEffect, useRef } from "react";

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
  const [charCount, setCharCount] = useState(0);
  
  // Вычисляем минимальную высоту на основе minLines или rows
  const getMinHeight = () => {
    const linesToUse = minLines !== undefined ? minLines : (rows || 3);
    // Примерно 24px на строку + 24px padding
    return linesToUse * 24 + 24;
  };
  
  // Вычисляем начальное количество строк для rows атрибута
  const getInitialRows = () => {
    if (rows !== undefined) return rows;
    if (minLines !== undefined) return minLines;
    return 3; // дефолт
  };
  
  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      const scrollHeight = textarea.scrollHeight;
      const minHeight = getMinHeight();
      const newHeight = Math.max(scrollHeight, minHeight);
      textarea.style.height = `${newHeight}px`;
    }
  };
  
  useEffect(() => {
    const currentValue = value !== undefined ? String(value) : (defaultValue !== undefined ? String(defaultValue) : '');
    setCharCount(currentValue.length);
    adjustHeight();
  }, [value, defaultValue]);
  
  useEffect(() => {
    adjustHeight();
  }, []);
  
  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      // Поддержка Cmd+A (Mac) или Ctrl+A (Windows/Linux) для выделения всего текста
      if ((e.metaKey || e.ctrlKey) && (e.key === 'a' || e.key === 'A')) {
        e.preventDefault();
        e.stopPropagation();
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        return false;
      }
    };
    
    textarea.addEventListener('keydown', handleKeyDown, true);
    
    return () => {
      textarea.removeEventListener('keydown', handleKeyDown, true);
    };
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (maxLength) {
      setCharCount(e.target.value.length);
    }
    adjustHeight();
    if (onChange) {
      onChange(e);
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Вызываем пользовательский обработчик, если он есть
    if (onKeyDown) {
      onKeyDown(e);
    }
  };
  
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
        rows={getInitialRows()}
        style={{
          backgroundColor: 'var(--input-bg)',
          borderColor: error ? 'var(--accent-red)' : 'var(--input-border)',
          color: 'var(--input-text)',
          transition: 'background-color 600ms, border-color 600ms, color 600ms',
          overflow: 'hidden',
          resize: 'none',
          minHeight: `${getMinHeight()}px`,
        }}
        className={`
          w-full px-4 py-3
          rounded-2xl border
          text-base
          focus:outline-none
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error ? "focus:border-accent-red" : "focus:border-[var(--input-focus-border)]"}
          ${className}
        `.trim()}
        onFocus={(e) => {
          e.target.style.backgroundColor = 'var(--input-focus-bg)';
          e.target.style.borderColor = error ? 'var(--accent-red)' : 'var(--input-focus-border)';
          e.target.style.color = 'var(--input-focus-text)';
        }}
        onBlur={(e) => {
          e.target.style.backgroundColor = 'var(--input-bg)';
          e.target.style.borderColor = error ? 'var(--accent-red)' : 'var(--input-border)';
          e.target.style.color = 'var(--input-text)';
        }}
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

