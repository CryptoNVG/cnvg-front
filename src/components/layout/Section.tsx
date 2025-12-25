"use client";

import { Icon } from "@/components/ui/Icon";

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
                <a href={url} className="group inline-flex items-center gap-1 transition-all duration-600 font-bold">
                  {title}
                  <Icon 
                    name="caret-right"
                    variant="ui16"
                    className="text-muted translate-y-1 group-hover:text-link-hover group-hover:translate-x-[4px] transition-all duration-600"
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

