"use client";

import React, { useId, useRef, useState, useMemo } from "react";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  error?: string;
  className?: string;
}

interface RadioOptionItemProps {
  option: RadioOption;
  optionId: string;
  name: string;
  isChecked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

function RadioOptionItem({
  option,
  optionId,
  name,
  isChecked,
  defaultChecked,
  onChange,
  error,
}: RadioOptionItemProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  
  // Определяем текущее состояние checked
  const currentChecked = useMemo(() => {
    if (isChecked !== undefined) return isChecked;
    if (defaultChecked !== undefined) return defaultChecked;
    return false;
  }, [isChecked, defaultChecked]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  const radioStyles = useMemo(() => {
    const baseStyles = {
      accentColor: 'var(--checkbox-checked-bg)',
    };
    
    if (isFocused) {
      if (currentChecked) {
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
        backgroundColor: currentChecked ? 'var(--checkbox-checked-bg)' : 'var(--checkbox-bg)',
        borderColor: error ? 'var(--accent-red)' : (currentChecked ? 'var(--checkbox-checked-border)' : 'var(--checkbox-border)'),
      };
    }
  }, [currentChecked, isFocused, error]);
  
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-6 h-6 flex items-center justify-center">
        <input
          ref={inputRef}
          type="radio"
          id={optionId}
          name={name}
          value={option.value}
          {...(isChecked !== undefined 
            ? { checked: isChecked } 
            : { defaultChecked })}
          style={radioStyles}
          className={`
            absolute inset-0
            w-6 h-6
            rounded-full border
            appearance-none
            -webkit-appearance-none
            focus:outline-none
            cursor-pointer
            transition-all duration-[600ms]
            disabled:opacity-50 disabled:cursor-not-allowed
          `.trim()}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleChange}
        />
        {currentChecked && (
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full pointer-events-none"
            style={{ backgroundColor: 'var(--button-text-dark)' }}
          />
        )}
      </div>
      <label htmlFor={optionId} className="text-base text-heading cursor-pointer">
        {option.label}
      </label>
    </div>
  );
}

export function Radio({
  name,
  options,
  value,
  onChange,
  label,
  error,
  className = "",
}: RadioProps) {
  // Use controlled component if onChange is provided, otherwise use uncontrolled
  const isControlled = onChange !== undefined;
  const baseId = useId();
  
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <span className="text-sm text-heading mb-2">{label}</span>
      )}
      <div className="flex flex-col gap-3">
        {options.map((option) => {
          const optionId = `${baseId}-${option.value}`;
          const isChecked = isControlled 
            ? value === option.value 
            : undefined;
          const defaultChecked = !isControlled && value === option.value;
          
          return (
            <RadioOptionItem
              key={option.value}
              option={option}
              optionId={optionId}
              name={name}
              isChecked={isChecked}
              defaultChecked={defaultChecked}
              onChange={onChange}
              error={error}
            />
          );
        })}
      </div>
      {error && (
        <span className="text-xs text-accent-red">{error}</span>
      )}
    </div>
  );
}

export default Radio;

