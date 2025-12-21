"use client";

import Link from "next/link";
import * as PhosphorIcons from "@phosphor-icons/react";

type Size = "small" | "medium" | "big";
type Variant = "primary" | "card" | "cardAccent" | "secondary" | "secondaryAccent" | "secondaryOnColor";
type ButtonType = "text" | "leftIcon" | "rightIcon" | "icon";
type AccentColor = "green" | "red" | "orange" | "yellow" | "cyan" | "blue" | "indigo" | "purple" | "pink";

interface ButtonProps {
  label?: string;
  url?: string;
  id?: string;
  size?: Size;
  variant?: Variant;
  type?: ButtonType;
  iconName?: string;
  color?: AccentColor;
  onClick?: () => void;
  className?: string;
}

const sizeStyles: Record<Size, { height: string; padding: string; fontSize: string; borderRadius: string; iconSize: number }> = {
  small: {
    height: "h-[34px]",
    padding: "px-3 py-1",
    fontSize: "text-xs",
    borderRadius: "rounded-[12px]",
    iconSize: 14,
  },
  medium: {
    height: "h-[44px]",
    padding: "px-6 py-1",
    fontSize: "text-sm",
    borderRadius: "rounded-[16px]",
    iconSize: 18,
  },
  big: {
    height: "h-[54px]",
    padding: "px-6 py-1",
    fontSize: "text-sm",
    borderRadius: "rounded-[16px]",
    iconSize: 18,
  },
};

const iconOnlyStyles: Record<Size, string> = {
  small: "w-[34px] h-[34px] p-0",
  medium: "w-[44px] h-[44px] p-0",
  big: "w-[54px] h-[54px] p-0",
};

const variantStyles: Record<Variant, { base: string; hover: string }> = {
  primary: {
    base: "text-button-text-dark",
    hover: "hover:bg-button-bg-color-hover",
  },
  card: {
    base: "text-button-text-light bg-card",
    hover: "hover:text-button-text-hover hover:bg-card-hover",
  },
  cardAccent: {
    base: "text-button-text-color bg-card",
    hover: "hover:text-button-text-hover hover:bg-card-hover",
  },
  secondary: {
    base: "text-button-text-light bg-button-bg-light",
    hover: "hover:text-button-text-hover hover:bg-button-bg-light-hover",
  },
  secondaryAccent: {
    base: "text-button-text-color bg-button-bg-light",
    hover: "hover:text-button-text-hover hover:bg-button-bg-light-hover",
  },
  secondaryOnColor: {
    base: "text-button-text-light bg-button-bg-dark",
    hover: "hover:text-button-text-hover hover:bg-button-bg-dark-hover",
  },
};

const accentColors: Record<AccentColor, string> = {
  green: "bg-accent-green",
  red: "bg-accent-red",
  orange: "bg-accent-orange",
  yellow: "bg-accent-yellow",
  cyan: "bg-accent-cyan",
  blue: "bg-accent-blue",
  indigo: "bg-accent-indigo",
  purple: "bg-accent-purple",
  pink: "bg-accent-pink",
};

function getIcon(iconName: string, size: number) {
  const icons = PhosphorIcons as unknown as Record<string, React.ComponentType<{ size?: number; weight?: string }>>;
  const IconComponent = icons[iconName];
  if (!IconComponent) return null;
  return <IconComponent size={size} weight="bold" />;
}

export function Button({
  label,
  url,
  id,
  size = "medium",
  variant = "primary",
  type = "text",
  iconName,
  color = "green",
  onClick,
  className = "",
}: ButtonProps) {
  const sizeConfig = sizeStyles[size];
  const variantConfig = variantStyles[variant];
  
  // Icon sizes based on type and size
  const getIconSize = () => {
    if (type === "leftIcon" || type === "rightIcon") {
      return size === "small" ? 14 : 20;
    }
    return sizeConfig.iconSize; // icon-only uses size-based
  };
  const icon = iconName ? getIcon(iconName, getIconSize()) : null;

  // Base classes
  const baseClasses = [
    "inline-flex items-center justify-center",
    "font-medium",
    "transition-all duration-[600ms]",
    "hover:-translate-y-px",
    "cursor-pointer",
    sizeConfig.fontSize,
    sizeConfig.borderRadius,
    variantConfig.base,
    variantConfig.hover,
  ];

  const fontStyle = { fontFamily: "var(--font-unbounded), system-ui, sans-serif" };

  // Size-specific classes
  if (type === "icon") {
    baseClasses.push(iconOnlyStyles[size]);
  } else {
    baseClasses.push(sizeConfig.height);
    
    // Padding adjustments for icon types
    if (type === "leftIcon") {
      const leftPadding = size === "small" ? "pl-2" : "pl-[18px]";
      const rightPadding = size === "small" ? "pr-3" : "pr-6";
      const gap = size === "small" ? "gap-1" : "gap-2";
      baseClasses.push(leftPadding, rightPadding, "py-1", gap);
    } else if (type === "rightIcon") {
      const leftPadding = size === "small" ? "pl-3" : "pl-6";
      const rightPadding = size === "small" ? "pr-2" : "pr-[18px]";
      const gap = size === "small" ? "gap-1" : "gap-2";
      baseClasses.push(leftPadding, rightPadding, "py-1", gap);
    } else {
      baseClasses.push(sizeConfig.padding);
    }
  }

  // Primary variant uses accent color
  if (variant === "primary") {
    baseClasses.push(accentColors[color]);
  }

  const classes = [...baseClasses, className].filter(Boolean).join(" ");

  const content = (
    <>
      {type === "leftIcon" && icon}
      {type !== "icon" && label}
      {type === "rightIcon" && icon}
      {type === "icon" && icon}
    </>
  );

  if (url) {
    return (
      <Link href={url} id={id} className={classes} style={fontStyle}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" id={id} className={classes} style={fontStyle} onClick={onClick}>
      {content}
    </button>
  );
}

export default Button;

