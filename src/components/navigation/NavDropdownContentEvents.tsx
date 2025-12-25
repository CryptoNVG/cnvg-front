"use client";

import Link from "next/link";
import type { NavGroup } from "./navigationData";

interface NavDropdownContentEventsProps {
  group: Extract<NavGroup, { type: "events" }>;
  variant?: "desktop" | "mobile";
  onLinkClick?: () => void;
}

export function NavDropdownContentEvents({ 
  group, 
  variant = "desktop",
  onLinkClick 
}: NavDropdownContentEventsProps) {
  const isMobile = variant === "mobile";
  
  return (
    <div className={`flex flex-col ${isMobile ? "gap-2 pl-4" : "gap-2"}`}>
      <span className={`text-xs text-muted uppercase tracking-wider ${isMobile ? "px-4 mt-2" : "px-3 mb-1"}`}>
        {isMobile ? "Recent Events" : "Recent Events"}
      </span>
      {group.recentList.map((event) => (
        <Link
          key={event.url}
          href={event.url}
          onClick={onLinkClick}
          className={`flex items-center ${isMobile ? "gap-4" : "gap-3"} rounded-lg hover:bg-card-hover transition-colors ${
            isMobile ? "px-4 py-3" : "px-3 py-2"
          }`}
        >
          <div className={`${isMobile ? "w-14 h-14" : "w-12 h-12"} bg-card-hover rounded-lg shrink-0 overflow-hidden`}>
            <div className="w-full h-full bg-linear-to-br from-accent-purple/20 to-accent-blue/20" />
          </div>
          <div className={`flex flex-col ${isMobile ? "" : "min-w-0"}`}>
            <span className={isMobile ? "text-heading" : "text-sm text-heading truncate"}>
              {event.title}
            </span>
            {event.subtitle && (
              <span className={`${isMobile ? "text-sm" : "text-xs"} text-muted mt-0.5`}>
                {event.subtitle}
              </span>
            )}
            <span className={`${isMobile ? "text-sm" : "text-xs"} text-muted ${event.subtitle ? "mt-0.5" : ""}`}>
              {event.date}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default NavDropdownContentEvents;

