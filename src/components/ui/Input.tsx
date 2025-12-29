"use client";

import React, { useId, useState, useEffect, useRef } from "react";
import { Icon } from "./Icon";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export function Input({
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
  type,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id || generatedId;
  const inputRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState(false);
  const showDateIcon = type === "date" || type === "datetime-local";
  const showTimeIcon = type === "time";
  const showUrlIcon = type === "url";
  const isPassword = type === "password";
  const showIcon = showDateIcon || showTimeIcon || showUrlIcon || isPassword;
  const actualType = isPassword && showPassword ? "text" : type;
  
  // Compute charCount directly from props
  const initialCharCount = value !== undefined 
    ? String(value).length 
    : (defaultValue !== undefined ? String(defaultValue).length : 0);
  const [charCount, setCharCount] = useState(initialCharCount);
  
  // Update charCount when controlled value changes (during render, acceptable pattern)
  if (value !== undefined) {
    const newCharCount = String(value).length;
    if (charCount !== newCharCount) {
      setCharCount(newCharCount);
    }
  }
  
  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      // Поддержка Cmd+A (Mac) или Ctrl+A (Windows/Linux) для выделения всего текста
      if ((e.metaKey || e.ctrlKey) && (e.key === 'a' || e.key === 'A')) {
        e.preventDefault();
        e.stopPropagation();
        input.select();
        input.setSelectionRange(0, input.value.length);
        return false;
      }
    };
    
    input.addEventListener('keydown', handleKeyDown, true);
    
    return () => {
      input.removeEventListener('keydown', handleKeyDown, true);
    };
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Update charCount only for uncontrolled components
    if (maxLength && value === undefined) {
      setCharCount(e.target.value.length);
    }
    if (onChange) {
      onChange(e);
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Вызываем пользовательский обработчик, если он есть
    if (onKeyDown) {
      onKeyDown(e);
    }
  };
  
  
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={inputId} className="text-sm text-heading flex items-center justify-between">
          <span className="flex items-center gap-2">
            <span>{label}</span>
            {props.required && (
              <span className="text-accent-red">*</span>
            )}
          </span>
          {maxLength && (
            <span className={`text-xs ${charCount >= maxLength ? 'text-accent-red' : 'text-muted'}`}>
              {charCount} / {maxLength}
            </span>
          )}
        </label>
      )}
      <div className="relative">
        <input
          ref={inputRef}
          {...props}
          type={actualType}
          id={inputId}
          maxLength={maxLength}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          style={{
            backgroundColor: 'var(--input-bg)',
            borderColor: error ? 'var(--accent-red)' : 'var(--input-border)',
            color: 'var(--input-text)',
          }}
          className={`
            w-full h-[44px]
            rounded-2xl border
            text-base
            focus:outline-none
            transition-all duration-[600ms]
            disabled:opacity-50 disabled:cursor-not-allowed
            ${showIcon ? "pl-4 pr-10" : "px-4"}
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
        />
        {showIcon && (
          <div 
            className="group absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => {
              if (isPassword) {
                setShowPassword(!showPassword);
                inputRef.current?.focus();
              } else if (inputRef.current) {
                inputRef.current.focus();
                // Используем showPicker() если доступен, иначе кликаем на input
                if ('showPicker' in inputRef.current && typeof inputRef.current.showPicker === 'function') {
                  inputRef.current.showPicker();
                } else {
                  inputRef.current.click();
                }
              }
            }}
          >
            {showDateIcon && <Icon name="CalendarBlank" variant="ui16" className="text-muted transition-colors duration-[600ms] group-hover:text-[var(--button-background-color-hover)]" />}
            {showTimeIcon && <Icon name="Clock" variant="ui16" className="text-muted transition-colors duration-[600ms] group-hover:text-[var(--button-background-color-hover)]" />}
            {showUrlIcon && <Icon name="Link" variant="ui16" className="text-muted transition-colors duration-[600ms] group-hover:text-[var(--button-background-color-hover)]" />}
            {isPassword && (
              showPassword ? (
                <Icon name="EyeSlash" variant="ui16" className="text-muted transition-colors duration-[600ms] group-hover:text-[var(--button-background-color-hover)]" />
              ) : (
                <Icon name="Eye" variant="ui16" className="text-muted transition-colors duration-[600ms] group-hover:text-[var(--button-background-color-hover)]" />
              )
            )}
          </div>
        )}
      </div>
      {error && (
        <span className="text-xs text-accent-red">{error}</span>
      )}
      {helperText && !error && (
        <span className="text-xs text-muted">{helperText}</span>
      )}
    </div>
  );
}

export default Input;

