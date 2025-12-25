"use client";

import type { NavSection } from "./navigationData";
import { NavDropdownContentServices } from "./NavDropdownContentServices";
import { NavDropdownContentEvents } from "./NavDropdownContentEvents";
import { NavDropdownContentJournal } from "./NavDropdownContentJournal";
import { NavDropdownContentAds } from "./NavDropdownContentAds";
import { NavDropdownContentInfo } from "./NavDropdownContentInfo";

interface NavContentRendererProps {
  section: NavSection;
  variant: "desktop" | "mobile";
  onLinkClick?: () => void;
}

export function NavContentRenderer({ section, variant, onLinkClick }: NavContentRendererProps) {
  switch (section.group.type) {
    case "services":
      return <NavDropdownContentServices group={section.group} variant={variant} onLinkClick={onLinkClick} />;
    case "events":
      return <NavDropdownContentEvents group={section.group} variant={variant} onLinkClick={onLinkClick} />;
    case "journal":
      return <NavDropdownContentJournal group={section.group} variant={variant} onLinkClick={onLinkClick} />;
    case "ads":
      return <NavDropdownContentAds group={section.group} variant={variant} onLinkClick={onLinkClick} />;
    case "info":
      return <NavDropdownContentInfo group={section.group} variant={variant} onLinkClick={onLinkClick} />;
  }
}

export default NavContentRenderer;

