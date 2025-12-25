"use client";

import { useState, useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { navigationData, searchLink, headerIconConfig } from "./navigationData";
import { NavDropdown } from "./NavDropdown";

export function HeaderDesktop() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [alignments, setAlignments] = useState<Record<string, boolean>>({});
  const buttonRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useLayoutEffect(() => {
    if (openDropdown && buttonRefs.current[openDropdown]) {
      const button = buttonRefs.current[openDropdown];
      if (button) {
        const rect = button.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        
        // Estimate dropdown width based on section type
        const section = navigationData.find(s => s.id === openDropdown);
        const dropdownWidth = section?.group.type === "journal" ? 450 : 220;
        
        // Check if dropdown would overflow
        const wouldOverflow = rect.left + dropdownWidth > viewportWidth - 16;
        setAlignments(prev => ({ ...prev, [openDropdown]: wouldOverflow }));
      }
    }
  }, [openDropdown]);

  return (
    <div className="hidden md:flex items-center justify-center w-full relative">
      {/* Logo - абсолютное позиционирование слева */}
      <Link 
        href="/" 
        className="absolute left-0 text-xl font-semibold text-heading hover:text-link-hover transition-colors duration-300"
        style={{ fontFamily: "var(--font-unbounded), system-ui, sans-serif" }}
      >
        CNVG
      </Link>

      {/* Navigation - по центру */}
      <nav className="flex items-center gap-0">
        {navigationData.map((section, index) => {
          return (
            <div
              key={section.id}
              ref={(el) => {
                buttonRefs.current[section.id] = el;
              }}
              className={`relative ${index > 0 ? "-ml-[4px]" : ""}`}
              onMouseEnter={() => setOpenDropdown(section.id)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 text-xs font-normal rounded-xl transition-colors duration-600 ${
                  openDropdown === section.id
                    ? "text-heading bg-card"
                    : "text-base hover:text-heading"
                }`}
                style={{ fontFamily: "var(--font-unbounded), system-ui, sans-serif" }}
              >
                {section.label}
                <Icon 
                  name="caret-down"
                  variant={headerIconConfig.caretDown.desktop.variant}
                  className={`${headerIconConfig.caretDown.desktop.className} ${
                    openDropdown === section.id ? "rotate-180" : ""
                  }`}
                  gradientAngle={headerIconConfig.caretDown.desktop.gradientAngle}
                  gradientColor1={headerIconConfig.caretDown.desktop.gradientColor1}
                  gradientColor2={headerIconConfig.caretDown.desktop.gradientColor2}
                />
              </button>
              <NavDropdown 
                section={section} 
                isOpen={openDropdown === section.id} 
                alignRight={alignments[section.id] || false}
              />
            </div>
          );
        })}

        {/* Search */}
        <Link
          href={searchLink.url}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-base hover:text-heading rounded-lg transition-colors duration-200"
        >
          <Icon 
            name={searchLink.icon.toLowerCase()} 
            variant={searchLink.iconConfig?.desktop?.variant || "ui16"}
            className={searchLink.iconConfig?.desktop?.className || ""}
            gradientAngle={searchLink.iconConfig?.desktop?.gradientAngle}
            gradientColor1={searchLink.iconConfig?.desktop?.gradientColor1}
            gradientColor2={searchLink.iconConfig?.desktop?.gradientColor2}
          />
        </Link>
      </nav>
    </div>
  );
}

export default HeaderDesktop;
