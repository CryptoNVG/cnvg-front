"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { navigationData, searchLink, headerIconConfig, type NavSection } from "./navigationData";
import { NavContentRenderer } from "./NavContentRenderer";

// =====================
// MOBILE ACCORDION ITEM
// =====================

function MobileAccordionItem({ 
  section, 
  isExpanded, 
  onToggle,
  onClose 
}: { 
  section: NavSection; 
  isExpanded: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex items-center gap-2 w-full px-6 py-4 text-left"
      >
        <span 
          className={`text-xl font-medium ${isExpanded ? "text-heading" : "text-base"}`}
          style={{ fontFamily: "var(--font-unbounded), system-ui, sans-serif" }}
        >
          {section.label}
        </span>
        <Icon 
          name="caret-down"
          variant={headerIconConfig.caretDown.mobile.variant}
          className={`${headerIconConfig.caretDown.mobile.className} ${isExpanded ? "rotate-180" : ""}`}
          gradientAngle={headerIconConfig.caretDown.mobile.gradientAngle}
          gradientColor1={headerIconConfig.caretDown.mobile.gradientColor1}
          gradientColor2={headerIconConfig.caretDown.mobile.gradientColor2}
        />
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? "max-h-[600px] pb-4" : "max-h-0"
        }`}
      >
        <NavContentRenderer section={section} variant="mobile" onLinkClick={onClose} />
      </div>
    </div>
  );
}

// =====================
// MAIN COMPONENT
// =====================

export function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const handleToggle = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Header bar */}
      <div className="flex md:hidden items-center justify-between w-full">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-xl font-semibold text-heading hover:text-link-hover transition-colors duration-300"
          style={{ fontFamily: "var(--font-unbounded), system-ui, sans-serif" }}
        >
          CNVG
        </Link>

        {/* Burger button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="p-2 text-heading hover:text-link-hover transition-colors duration-300"
          aria-label="Открыть меню"
        >
          <Icon 
            name="list" 
            variant={headerIconConfig.burgerMenu.variant}
            className={headerIconConfig.burgerMenu.className}
            gradientAngle={headerIconConfig.burgerMenu.gradientAngle}
            gradientColor1={headerIconConfig.burgerMenu.gradientColor1}
            gradientColor2={headerIconConfig.burgerMenu.gradientColor2}
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 transition-all duration-300"
          style={{
            backgroundColor: "var(--background)",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-card-top-border">
            <Link 
              href="/" 
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-semibold text-heading"
              style={{ fontFamily: "var(--font-unbounded), system-ui, sans-serif" }}
            >
              CNVG
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-heading hover:text-link-hover transition-colors duration-300"
              aria-label="Закрыть меню"
            >
              <Icon 
                name="x" 
                variant={headerIconConfig.closeMenu.variant}
                className={headerIconConfig.closeMenu.className}
                gradientAngle={headerIconConfig.closeMenu.gradientAngle}
                gradientColor1={headerIconConfig.closeMenu.gradientColor1}
                gradientColor2={headerIconConfig.closeMenu.gradientColor2}
              />
            </button>
          </div>

          {/* Scrollable content */}
          <div 
            className="h-[calc(100vh-72px)] overflow-y-auto transition-transform duration-300 translate-y-0 pb-[90px]"
            style={{
              backgroundColor: "var(--background)",
            }}
          >
            {/* Navigation sections */}
            {navigationData.map((section) => (
              <MobileAccordionItem
                key={section.id}
                section={section}
                isExpanded={expandedSection === section.id}
                onToggle={() => handleToggle(section.id)}
                onClose={() => setIsMenuOpen(false)}
              />
            ))}

            {/* Search */}
            <Link
              href={searchLink.url}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 px-6 py-4 border-b border-card-top-border"
            >
              <Icon 
                name={searchLink.icon.toLowerCase()} 
                variant={searchLink.iconConfig?.mobile?.variant || "small"}
                className={searchLink.iconConfig?.mobile?.className || ""}
                gradientAngle={searchLink.iconConfig?.mobile?.gradientAngle}
                gradientColor1={searchLink.iconConfig?.mobile?.gradientColor1}
                gradientColor2={searchLink.iconConfig?.mobile?.gradientColor2}
              />
              <span 
                className="text-xl font-medium text-heading"
                style={{ fontFamily: "var(--font-unbounded), system-ui, sans-serif" }}
              >
                {searchLink.title}
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default HeaderMobile;
