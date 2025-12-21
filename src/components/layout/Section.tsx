"use client";

import { CaretRight } from "@phosphor-icons/react";

interface SectionProps {
  title?: string;
  description?: string;
  url?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ title, description, url, children, className = "", id = "section-content" }: SectionProps) {
  return (
    <section className={`w-full px-1 md:px-6 py-6 md:py-12 ${className}`}>
      <div id={id} className="flex flex-col max-w-7xl mx-auto w-full">
        {title && (
          <div id="section-title" className="flex flex-col gap-2 px-4 md:px-6 pb-6">
            <h2 className="tracking-wider max-w-2/3">
              {url ? (
                <a href={url} className="group inline-flex items-center gap-1 hover:gap-2 duration-600 transition-all font-bold">
                  {title}
                  <CaretRight 
                    size={24} 
                    weight="bold" 
                    className="text-muted group-hover:text-button-text-hover transition-colors"
                  />
                </a>
              ) : title}
            </h2>
            {description && (
              <p className="text-muted text-lg lg:max-w-2/3">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;

