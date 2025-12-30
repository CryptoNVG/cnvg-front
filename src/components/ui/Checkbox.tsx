"use client";

import React, { useId, useRef, useState, useMemo } from "react";
import { Icon } from "./Icon";

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
}

export function Checkbox({
  label,
  error,
  className = "",
  id,
  checked,
  defaultChecked,
  onChange,
  style,
  ...props
}: CheckboxProps) {
  const generatedId = useId();
  const checkboxId = id || generatedId;
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  
  // Определяем текущее состояние checked
  const isChecked = useMemo(() => {
    if (checked !== undefined) return checked;
    if (defaultChecked !== undefined) return defaultChecked;
    return false;
  }, [checked, defaultChecked]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  const checkboxStyles = useMemo(() => {
    const baseStyles = {
      accentColor: 'var(--checkbox-checked-bg)',
      ...style,
    };
    
    if (isFocused) {
      if (isChecked) {
        return {
          ...baseStyles,
          backgroundColor: 'var(--checkbox-checked-bg)',
          borderColor: error ? 'var(--accent-red)' : 'var(--checkbox-checked-border)',
        };
      } else {
        return {
          ...baseStyles,
          backgroundColor: 'var(--input-focus-bg)',
          borderColor: error ? 'var(--accent-red)' : 'var(--input-focus-border)',
        };
      }
    } else {
      return {
        ...baseStyles,
        backgroundColor: isChecked ? 'var(--checkbox-checked-bg)' : 'var(--checkbox-bg)',
        borderColor: error ? 'var(--accent-red)' : (isChecked ? 'var(--checkbox-checked-border)' : 'var(--checkbox-border)'),
      };
    }
  }, [isChecked, isFocused, error, style]);
  
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <div className="relative w-6 h-6 flex items-center justify-center">
          <input
            ref={inputRef}
            type="checkbox"
            id={checkboxId}
            checked={checked}
            defaultChecked={defaultChecked}
            style={checkboxStyles}
            className={`
              absolute inset-0
              w-6 h-6
              rounded border
              appearance-none
              -webkit-appearance-none
              focus:outline-none
              cursor-pointer
              transition-all duration-[600ms]
              disabled:opacity-50 disabled:cursor-not-allowed
              ${className}
            `.trim()}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={handleChange}
            {...props}
          />
          {isChecked && (
            <Icon 
              name="Check" 
              variant="ui16" 
              className="relative z-10 pointer-events-none text-button-text-dark"
            />
          )}
        </div>
        {label && (
          <label htmlFor={checkboxId} className="text-base text-heading cursor-pointer">
            {label}
          </label>
        )}
      </div>
      {error && (
        <span className="text-xs text-accent-red ml-8">{error}</span>
      )}
    </div>
  );
}

export default Checkbox;

