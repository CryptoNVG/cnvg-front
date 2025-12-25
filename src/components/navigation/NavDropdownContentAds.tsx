"use client";

import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { NavGroup } from "./navigationData";

interface NavDropdownContentAdsProps {
  group: Extract<NavGroup, { type: "ads" }>;
  variant?: "desktop" | "mobile";
  onLinkClick?: () => void;
}

export function NavDropdownContentAds({ 
  group, 
  variant = "desktop",
  onLinkClick 
}: NavDropdownContentAdsProps) {
  const isMobile = variant === "mobile";
  
  return (
    <div className={`flex flex-col ${isMobile ? "gap-1 pl-4" : "gap-1"}`}>
      {group.items.map((item) => (
        <Link
          key={item.url}
          href={item.url}
          onClick={onLinkClick}
          className={`flex items-center gap-3 rounded-lg hover:bg-card-hover transition-colors ${
            isMobile ? "px-4 py-3" : "px-3 py-2"
          }`}
        >
          {item.icon && (() => {
            const iconConfig = item.iconConfig?.[isMobile ? "mobile" : "desktop"];
            return (
              <Icon 
                name={item.icon} 
                variant={iconConfig?.variant || "ui16"}
                className={iconConfig?.className || "text-accent-green"}
                gradientAngle={iconConfig?.gradientAngle}
                gradientColor1={iconConfig?.gradientColor1}
                gradientColor2={iconConfig?.gradientColor2}
              />
            );
          })()}
          <div className="flex flex-col min-w-0">
            <span className={isMobile ? "text-base" : "text-sm text-base hover:text-heading"}>
              {item.title}
            </span>
            {item.subtitle && (
              <span className={`${isMobile ? "text-sm" : "text-xs"} text-muted mt-0.5`}>
                {item.subtitle}
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default NavDropdownContentAds;

