"use client";

import React, { useId } from "react";
import { Icon } from "./Icon";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  label?: string;
  options: SelectOption[];
  error?: string;
  helperText?: string;
  placeholder?: string;
}

export function Select({
  label,
  options,
  error,
  helperText,
  placeholder,
  className = "",
  id,
  ...props
}: SelectProps) {
  const generatedId = useId();
  const selectId = id || generatedId;
  
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={selectId} className="text-sm text-heading">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          style={{
            backgroundColor: 'var(--input-bg)',
            borderColor: error ? 'var(--accent-red)' : 'var(--input-border)',
            color: 'var(--input-text)',
          }}
          className={`
            w-full pl-4 pr-10 py-3
            rounded-2xl border
            text-base
            focus:outline-none
            transition-all duration-[600ms]
            cursor-pointer
            disabled:opacity-50 disabled:cursor-not-allowed
            appearance-none
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
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="group absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <Icon name="CaretDown" variant="ui16" className="text-muted transition-colors duration-[600ms] group-hover:text-[var(--button-background-color-hover)]" />
        </div>
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

export default Select;

