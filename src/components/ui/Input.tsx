"use client";

import React, { useId, useState, useRef, useMemo } from "react";
import { Icon } from "./Icon";
import { useCharCount, useSelectAll } from "./hooks";

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
  const [isFocused, setIsFocused] = useState(false);
  
  const showDateIcon = type === "date" || type === "datetime-local";
  const showTimeIcon = type === "time";
  const showUrlIcon = type === "url";
  const isPassword = type === "password";
  const showIcon = showDateIcon || showTimeIcon || showUrlIcon || isPassword;
  const actualType = isPassword && showPassword ? "text" : type;
  
  // Используем useMemo для вычисления charCount вместо setState во время рендера
  const charCount = useCharCount(value, defaultValue);
  
  // Hook для обработки Cmd/Ctrl+A
  useSelectAll(inputRef);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  const inputStyles = useMemo(() => ({
    backgroundColor: isFocused ? 'var(--input-focus-bg)' : 'var(--input-bg)',
    borderColor: error ? 'var(--accent-red)' : (isFocused ? 'var(--input-focus-border)' : 'var(--input-border)'),
    color: isFocused ? 'var(--input-focus-text)' : 'var(--input-text)',
  }), [isFocused, error]);
  
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
          style={inputStyles}
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
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
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

