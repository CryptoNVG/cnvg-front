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
import { createElement, useRef, useEffect, useState, useMemo } from "react";

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
    color: "var(--text-muted)",
  },
  ui12: {
    size: 12,
    weight: "bold",
    gradient: false,
    color: "var(--text-muted)",
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

function getIconComponent(iconName: string): PhosphorIconComponent | null {
  const pascalName = toPascalCase(iconName);
  const icons = PhosphorIcons as unknown as Record<string, PhosphorIconComponent>;
  return icons[pascalName] ?? icons[iconName] ?? null;
}

function createMaskUrl(svg: SVGElement, size: number): string {
  const clonedSvg = svg.cloneNode(true) as SVGElement;
  clonedSvg.setAttribute("width", String(size));
  clonedSvg.setAttribute("height", String(size));

  // Set all shapes to white for mask
  const shapes = clonedSvg.querySelectorAll("path, circle, rect, polygon, polyline, ellipse, line");
  shapes.forEach((shape) => {
    shape.setAttribute("fill", "white");
    shape.removeAttribute("stroke");
  });

  const svgString = new XMLSerializer().serializeToString(clonedSvg);
  const encodedSvg = encodeURIComponent(svgString);
  return `url("data:image/svg+xml;charset=utf-8,${encodedSvg}")`;
}

export function Icon({
  name,
  variant = "ui16",
  className = "",
  gradientAngle,
  gradientColor1,
  gradientColor2,
}: IconProps) {
  const config = VARIANT_CONFIG[variant];
  
  // Use CSS variables for big variant if not explicitly provided
  const finalGradientAngle = gradientAngle ?? (variant === "big" ? 85 : 85);
  const finalGradientColor1 = gradientColor1 ?? (variant === "big" ? "var(--icon-40-gradient-color-1)" : "var(--accent-green)");
  const finalGradientColor2 = gradientColor2 ?? (variant === "big" ? "var(--icon-40-gradient-color-2)" : "var(--accent-pink)");
  const IconComponent = useMemo(() => getIconComponent(name), [name]);
  const iconRef = useRef<HTMLDivElement>(null);
  const [maskUrl, setMaskUrl] = useState<string>("");

  useEffect(() => {
    if (!config.gradient || !iconRef.current || !IconComponent) {
      return;
    }

    // Check if SVG is already rendered
    const existingSvg = iconRef.current.querySelector("svg");
    if (existingSvg) {
      setMaskUrl(createMaskUrl(existingSvg, config.size));
      return;
    }

    // Use MutationObserver to detect when SVG is added
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "childList") {
          const svg = iconRef.current?.querySelector("svg");
          if (svg) {
            setMaskUrl(createMaskUrl(svg, config.size));
            observer.disconnect();
            return;
          }
        }
      }
    });

    observer.observe(iconRef.current, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [config.gradient, config.size, config.weight, name, IconComponent]);

  if (!IconComponent) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`Icon "${name}" not found in Phosphor Icons`);
    }
    return null;
  }

  // For gradient variants, render icon and use it as a mask for the gradient
  if (config.gradient) {
    return (
      <div
        className={`inline-flex items-center justify-center relative ${className}`}
        style={{
          width: config.size,
          height: config.size,
        }}
      >
        {/* Hidden icon for extracting SVG */}
        <div
          ref={iconRef}
          aria-hidden="true"
          style={{
            position: "absolute",
            opacity: 0,
            pointerEvents: "none",
            width: config.size,
            height: config.size,
          }}
        >
          {createElement(IconComponent, { size: config.size, weight: config.weight, color: "white" })}
        </div>

        {/* Gradient background with mask */}
        {maskUrl && (
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(${finalGradientAngle}deg, ${finalGradientColor1}, ${finalGradientColor2})`,
              maskImage: maskUrl,
              WebkitMaskImage: maskUrl,
              maskSize: "contain",
              WebkitMaskSize: "contain",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "center",
              WebkitMaskPosition: "center",
            }}
          />
        )}
      </div>
    );
  }

  // For non-gradient variants, render directly with color
  return (
    <div className={className}>
      {createElement(IconComponent, { size: config.size, weight: config.weight, color: config.color })}
    </div>
  );
}

export default Icon;
