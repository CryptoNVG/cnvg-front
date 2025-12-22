"use client";

import { ReactNode } from "react";

interface CardSimpleProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function CardSimple({
  title,
  description,
  children,
  className = "",
}: CardSimpleProps) {
  return (
    <div className={`bg-card rounded-2xl md:rounded-3xl py-0 md:py-2 ${className}`}>
      {/* Header */}
      {(title || description) && (
        <div className="flex flex-col gap-1 px-4 pt-4 md:px-6">
          {title && <h3>{title}</h3>}
          {description && (
            <p className="text-muted text-sm">{description}</p>
          )}
        </div>
      )}

      {/* Main */}
      <div className="flex flex-col gap-4 py-4 px-4 md:px-6">
        {children || (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        )}
      </div>

    </div>
  );
}

export default CardSimple;

