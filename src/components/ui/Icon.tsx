"use client";

/**
 * Icon component using Phosphor Icons
 *
 * Supports four variants:
 * - big: 40x40, light weight, gradient (85deg from --accent-green to --accent-pink)
 * - small: 24x24, fill weight, gradient (85deg from --accent-green to --accent-pink)
 * - ui16: 16x16, bold weight, solid color (--text-muted)
 * - ui12: 12x12, bold weight, solid color (--text-muted)
 */

import * as PhosphorIcons from "@phosphor-icons/react";
import { createElement, useMemo } from "react";

type IconVariant = "big" | "small" | "ui16" | "ui12";

interface VariantConfig {
  size: number;
  weight: "light" | "bold" | "fill";
  gradient: boolean;
  color?: string;
}

interface IconProps {
  name: string;
  variant?: IconVariant;
  className?: string;
  gradientAngle?: number;
  gradientColor1?: string;
  gradientColor2?: string;
}

const VARIANT_CONFIG: Record<IconVariant, VariantConfig> = {
  big: {
    size: 40,
    weight: "light",
    gradient: true,
  },
  small: {
    size: 24,
    weight: "fill",
    gradient: true,
  },
  ui16: {
    size: 16,
    weight: "bold",
    gradient: false,
  },
  ui12: {
    size: 12,
    weight: "bold",
    gradient: false,
  },
};

// Convert kebab-case to PascalCase (e.g., "arrow-circle-right" -> "ArrowCircleRight")
function toPascalCase(str: string): string {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

type PhosphorIconComponent = React.ComponentType<{
  size?: number;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  color?: string;
}>;

// Cache for icon components
const iconComponentCache = new Map<string, PhosphorIconComponent | null>();

function getIconComponent(iconName: string): PhosphorIconComponent | null {
  if (iconComponentCache.has(iconName)) {
    return iconComponentCache.get(iconName)!;
  }
  
  const pascalName = toPascalCase(iconName);
  const icons = PhosphorIcons as unknown as Record<string, PhosphorIconComponent>;
  const component = icons[pascalName] ?? icons[iconName] ?? null;
  
  iconComponentCache.set(iconName, component);
  return component;
}

// Generate stable ID for gradient based on icon parameters
function generateGradientId(
  name: string,
  variant: string,
  gradientAngle?: number,
  gradientColor1?: string,
  gradientColor2?: string
): string {
  const parts = [
    name,
    variant,
    gradientAngle?.toString() || "",
    gradientColor1 || "",
    gradientColor2 || "",
  ];
  // Create a simple hash from the parts
  const hash = parts.join("-").replace(/[^a-zA-Z0-9-]/g, "");
  return `icon-gradient-${hash}`;
}

// Convert angle to SVG gradient coordinates
function angleToCoords(angle: number): { x1: string; y1: string; x2: string; y2: string } {
  // Normalize angle to 0-360
  const normalizedAngle = ((angle % 360) + 360) % 360;
  const radians = (normalizedAngle * Math.PI) / 180;
  
  // Calculate gradient line endpoints
  const x1 = Math.round(50 - Math.cos(radians) * 50);
  const y1 = Math.round(50 + Math.sin(radians) * 50);
  const x2 = Math.round(50 + Math.cos(radians) * 50);
  const y2 = Math.round(50 - Math.sin(radians) * 50);
  
  return {
    x1: `${x1}%`,
    y1: `${y1}%`,
    x2: `${x2}%`,
    y2: `${y2}%`,
  };
}

export function Icon({
  name,
  variant = "ui16",
  className = "",
  gradientAngle,
  gradientColor1,
  gradientColor2,
}: IconProps) {
  // Ensure variant is valid, fallback to "ui16"
  const validVariant = variant && VARIANT_CONFIG[variant] ? variant : "ui16";
  const config = VARIANT_CONFIG[validVariant];
  
  // Use CSS variables for big variant if not explicitly provided
  const finalGradientAngle = gradientAngle ?? 85;
  const finalGradientColor1 = gradientColor1 ?? (validVariant === "big" ? "var(--icon-40-gradient-color-1)" : "var(--accent-green)");
  const finalGradientColor2 = gradientColor2 ?? (validVariant === "big" ? "var(--icon-40-gradient-color-2)" : "var(--accent-pink)");
  
  // Generate stable gradient ID based on icon parameters
  const gradientId = useMemo(
    () => generateGradientId(name, validVariant, finalGradientAngle, finalGradientColor1, finalGradientColor2),
    [name, validVariant, finalGradientAngle, finalGradientColor1, finalGradientColor2]
  );
  
  const IconComponent = useMemo(() => getIconComponent(name), [name]);

  if (!IconComponent) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`Icon "${name}" not found in Phosphor Icons`);
    }
    return null;
  }

  // For gradient variants, use inline SVG gradient
  if (config.gradient) {
    const coords = angleToCoords(finalGradientAngle);
    
    return (
      <div
        className={`inline-flex items-center justify-center relative ${className}`}
        style={{
          width: config.size,
          height: config.size,
        }}
      >
        {/* Hidden SVG with gradient definition */}
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <linearGradient id={gradientId} x1={coords.x1} y1={coords.y1} x2={coords.x2} y2={coords.y2}>
              <stop offset="0%" stopColor={finalGradientColor1} />
              <stop offset="100%" stopColor={finalGradientColor2} />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Icon with gradient fill */}
        <div style={{ color: `url(#${gradientId})` }}>
          {createElement(IconComponent, { size: config.size, weight: config.weight, color: `url(#${gradientId})` })}
        </div>
      </div>
    );
  }

  // For non-gradient variants, render directly with color
  // Use text-muted as default color if no color class is provided in className
  const defaultColorClass = className.includes("text-") ? "" : "text-muted";
  return (
    <div className={`${defaultColorClass} ${className}`}>
      {createElement(IconComponent, { size: config.size, weight: config.weight, color: "currentColor" })}
    </div>
  );
}

export default Icon;
