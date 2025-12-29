"use client";

import React, { useId, useRef, useLayoutEffect, useState } from "react";
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
  const initialIsChecked = checked !== undefined ? checked : (defaultChecked || false);
  const [isCheckedState, setIsCheckedState] = useState(initialIsChecked);
  
  const updateStyles = (element: HTMLInputElement) => {
    const isChecked = element.checked;
    setIsCheckedState(isChecked);
    element.style.backgroundColor = isChecked ? 'var(--checkbox-checked-bg)' : 'var(--checkbox-bg)';
    element.style.borderColor = error ? 'var(--accent-red)' : (isChecked ? 'var(--checkbox-checked-border)' : 'var(--checkbox-border)');
  };
  
  // Sync state when controlled prop changes (this is acceptable for controlled components)
  if (checked !== undefined && isCheckedState !== checked) {
    setIsCheckedState(checked);
  }
  
  useLayoutEffect(() => {
    if (inputRef.current) {
      if (document.activeElement !== inputRef.current) {
        updateStyles(inputRef.current);
      } else {
        // Если элемент в фокусе, все равно применяем правильные стили для неотмеченного состояния
        const isChecked = inputRef.current.checked;
        setIsCheckedState(isChecked);
        if (!isChecked) {
          inputRef.current.style.backgroundColor = 'var(--checkbox-bg)';
          inputRef.current.style.borderColor = error ? 'var(--accent-red)' : 'var(--checkbox-border)';
        }
      }
    }
  }, [checked, defaultChecked, error]);
  
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
            style={{
              ...style,
              backgroundColor: initialIsChecked ? 'var(--checkbox-checked-bg)' : 'var(--checkbox-bg)',
              borderColor: error ? 'var(--accent-red)' : (initialIsChecked ? 'var(--checkbox-checked-border)' : 'var(--checkbox-border)'),
              accentColor: 'var(--checkbox-checked-bg)',
            }}
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
            onFocus={(e) => {
              const isChecked = e.target.checked;
              if (isChecked) {
                e.target.style.backgroundColor = 'var(--checkbox-checked-bg)';
                e.target.style.borderColor = error ? 'var(--accent-red)' : 'var(--checkbox-checked-border)';
              } else {
                e.target.style.backgroundColor = 'var(--input-focus-bg)';
                e.target.style.borderColor = error ? 'var(--accent-red)' : 'var(--input-focus-border)';
              }
            }}
            onBlur={(e) => {
              updateStyles(e.target);
            }}
            onChange={(e) => {
              updateStyles(e.target);
              if (onChange) {
                onChange(e);
              }
            }}
            {...props}
          />
          {isCheckedState && (
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

