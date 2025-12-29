"use client";

import React, { useId, useRef, useLayoutEffect, useState, useEffect } from "react";

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
  const [isCheckedState, setIsCheckedState] = useState(isChecked !== undefined ? isChecked : (defaultChecked || false));
  
  useEffect(() => {
    if (isChecked !== undefined) {
      setIsCheckedState(isChecked);
    } else if (inputRef.current) {
      setIsCheckedState(inputRef.current.checked);
    }
  }, [isChecked]);
  
  const updateStyles = (element: HTMLInputElement) => {
    const isCheckedNow = element.checked;
    setIsCheckedState(isCheckedNow);
    element.style.backgroundColor = isCheckedNow ? 'var(--checkbox-checked-bg)' : 'var(--checkbox-bg)';
    element.style.borderColor = error ? 'var(--accent-red)' : (isCheckedNow ? 'var(--checkbox-checked-border)' : 'var(--checkbox-border)');
  };
  
  useLayoutEffect(() => {
    if (inputRef.current) {
      if (document.activeElement !== inputRef.current) {
        updateStyles(inputRef.current);
      } else {
        const isCheckedNow = inputRef.current.checked;
        setIsCheckedState(isCheckedNow);
        if (!isCheckedNow) {
          inputRef.current.style.backgroundColor = 'var(--checkbox-bg)';
          inputRef.current.style.borderColor = error ? 'var(--accent-red)' : 'var(--checkbox-border)';
        }
      }
    }
  }, [isChecked, defaultChecked, error]);
  
  const initialIsChecked = isChecked !== undefined ? isChecked : (defaultChecked || false);
  
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
          style={{
            backgroundColor: initialIsChecked ? 'var(--checkbox-checked-bg)' : 'var(--checkbox-bg)',
            borderColor: error ? 'var(--accent-red)' : (initialIsChecked ? 'var(--checkbox-checked-border)' : 'var(--checkbox-border)'),
            accentColor: 'var(--checkbox-checked-bg)',
          }}
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
          onFocus={(e) => {
            const isCheckedNow = e.target.checked;
            if (isCheckedNow) {
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
        />
        {isCheckedState && (
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

