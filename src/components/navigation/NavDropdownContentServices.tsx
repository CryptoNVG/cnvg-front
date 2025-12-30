"use client";

import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { NavGroup } from "./navigationData";

interface NavDropdownContentServicesProps {
  group: Extract<NavGroup, { type: "services" }>;
  variant?: "desktop" | "mobile";
  onLinkClick?: () => void;
}

export function NavDropdownContentServices({ 
  group, 
  variant = "desktop",
  onLinkClick 
}: NavDropdownContentServicesProps) {
  const isMobile = variant === "mobile";
  
  return (
    <div className="flex flex-col gap-1">
      {group.items.map((item) => (
        <Link
          key={item.url}
          href={item.url}
          onClick={onLinkClick}
          className={`flex items-center gap-3 ${
            isMobile 
              ? "px-6 py-2" 
              : "rounded-2xl px-3 py-2 hover:bg-card-hover transition-colors group"
          }`}
        >
          {item.icon && (() => {
            const iconConfig = item.iconConfig?.[isMobile ? "mobile" : "desktop"];
            return (
              <Icon 
                name={item.icon} 
                variant={iconConfig?.variant || (isMobile ? "small" : "ui16")}
                className={iconConfig?.className || "text-muted"}
                gradientAngle={iconConfig?.gradientAngle}
                gradientColor1={iconConfig?.gradientColor1}
                gradientColor2={iconConfig?.gradientColor2}
              />
            );
          })()}
          <div className="flex flex-col min-w-0">
            <span className={`${isMobile ? "text-base" : "text-sm text-base group-hover:text-heading transition-colors"}`}>
              {item.title}
            </span>
            {item.subtitle && !isMobile && (
              <span className="text-xs text-muted mt-0.5">
                {item.subtitle}
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default NavDropdownContentServices;

