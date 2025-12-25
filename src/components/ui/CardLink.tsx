"use client";

import Link from "next/link";
import { Icon } from "./Icon";

interface CardLinkProps {
  iconName?: string;
  iconGradientAngle?: number;
  iconGradientColor1?: string;
  iconGradientColor2?: string;
  title: string;
  description?: string;
  url: string;
  className?: string;
}

export function CardLink({
  iconName,
  iconGradientAngle,
  iconGradientColor1,
  iconGradientColor2,
  title,
  description,
  url,
  className = "",
}: CardLinkProps) {
  return (
    <Link
      href={url}
      className={`group flex flex-row items-center gap-4 bg-card rounded-2xl md:rounded-3xl border-t p-4 md:p-6 transition-all duration-600 hover:bg-card-hover ${className}`}
      style={{ borderColor: 'var(--color-card-top-border)' }}
    >
      {/* Big Icon */}
      {iconName && (
        <Icon 
          name={iconName} 
          variant="big"
          gradientAngle={iconGradientAngle}
          gradientColor1={iconGradientColor1}
          gradientColor2={iconGradientColor2}
        />
      )}

      {/* Title and Description */}
      <div className="flex flex-col gap-1 flex-1">
        <h3 className="group-hover:text-link-hover transition-colors duration-600">{title}</h3>
        {description && (
          <p className="text-muted text-sm">{description}</p>
        )}
      </div>

      {/* Caret Icon */}
      <Icon 
        name="caret-right" 
        variant="ui16" 
        className="text-muted group-hover:text-link-hover group-hover:translate-x-[4px] transition-all duration-600"
      />
    </Link>
  );
}

export default CardLink;

