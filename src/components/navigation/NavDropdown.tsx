"use client";

import type { NavSection } from "./navigationData";
import { NavContentRenderer } from "./NavContentRenderer";

interface NavDropdownProps {
  section: NavSection;
  isOpen: boolean;
  alignRight?: boolean;
}

export function NavDropdown({ section, isOpen, alignRight = false }: NavDropdownProps) {
  return (
    <div
      className={`absolute top-full pt-2 transition-all duration-600 ${
        alignRight 
          ? "right-0" 
          : "left-1/2 -translate-x-1/2"
      } ${
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className={`bg-card rounded-3xl p-2 shadow-2xl/50 ${section.dropdownWidth || ""}`}>
        <NavContentRenderer section={section} variant="desktop" />
      </div>
    </div>
  );
}

export default NavDropdown;
