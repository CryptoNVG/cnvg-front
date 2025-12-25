"use client";

import Link from "next/link";
import type { NavGroup } from "./navigationData";

interface NavDropdownContentJournalProps {
  group: Extract<NavGroup, { type: "journal" }>;
  variant?: "desktop" | "mobile";
  onLinkClick?: () => void;
}

export function NavDropdownContentJournal({ 
  group, 
  variant = "desktop",
  onLinkClick 
}: NavDropdownContentJournalProps) {
  const isMobile = variant === "mobile";
  
  if (isMobile) {
    return (
      <div className="flex flex-col gap-4 pl-4">
        {/* Articles */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-muted uppercase tracking-wider px-4 mt-2">Articles</span>
          {group.recentArticles.map((article) => (
            <Link
              key={article.url}
              href={article.url}
              onClick={onLinkClick}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-card-hover transition-colors"
            >
              <div className="w-12 h-12 bg-card-hover rounded-lg shrink-0 overflow-hidden">
                <div className="w-full h-full bg-linear-to-br from-accent-green/20 to-accent-cyan/20" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-base line-clamp-2">{article.title}</span>
                {article.subtitle && (
                  <span className="text-sm text-muted mt-0.5 line-clamp-1">{article.subtitle}</span>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Regulations */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-muted uppercase tracking-wider px-4">Regulations</span>
          {group.recentRegulations.map((reg) => (
            <Link
              key={reg.url}
              href={reg.url}
              onClick={onLinkClick}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-card-hover transition-colors"
            >
              <span className="text-xs font-medium text-accent-yellow bg-accent-yellow/10 px-2 py-1 rounded shrink-0">
                {reg.jurisdiction}
              </span>
              <div className="flex flex-col min-w-0">
                <span className="text-base">{reg.title}</span>
                {reg.subtitle && (
                  <span className="text-sm text-muted mt-0.5">{reg.subtitle}</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Desktop layout
  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Recent Articles */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-muted uppercase tracking-wider px-3 mb-1">Recent Articles</span>
        {group.recentArticles.map((article) => (
          <Link
            key={article.url}
            href={article.url}
            onClick={onLinkClick}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-card-hover transition-colors duration-200"
          >
            <div className="w-10 h-10 bg-card-hover rounded-lg shrink-0 overflow-hidden">
              <div className="w-full h-full bg-linear-to-br from-accent-green/20 to-accent-cyan/20" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm text-base hover:text-heading line-clamp-2">{article.title}</span>
              {article.subtitle && (
                <span className="text-xs text-muted mt-0.5 line-clamp-1">{article.subtitle}</span>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Regulations */}
      <div className="flex flex-col gap-2">
        <span className="text-xs text-muted uppercase tracking-wider px-3 mb-1">Regulations</span>
        {group.recentRegulations.map((reg) => (
          <Link
            key={reg.url}
            href={reg.url}
            onClick={onLinkClick}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-card-hover transition-colors duration-200"
          >
            <span className="text-xs font-medium text-accent-yellow bg-accent-yellow/10 px-2 py-1 rounded">
              {reg.jurisdiction}
            </span>
            <div className="flex flex-col min-w-0">
              <span className="text-sm text-base hover:text-heading truncate">{reg.title}</span>
              {reg.subtitle && (
                <span className="text-xs text-muted mt-0.5 truncate">{reg.subtitle}</span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavDropdownContentJournal;

