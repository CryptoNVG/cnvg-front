"use client";

import { Section } from "@/components/layout/Section";
import { SectionHero } from "@/components/layout/SectionHero";
import { Icon } from "@/components/ui/Icon";

export default function SectionHeadersPage() {
  return (
    <>
      <SectionHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Theme", href: "/theme" },
        ]}
        title="Section Headers"
        description="Various section header styles and configurations."
      />
      
      <Section 
        title="Section Headers" 
        description="Different variants of section headers used throughout the application."
      >
        <div className="px-4 md:px-6 space-y-12">
          {/* Section Component Variants */}
          <div className="space-y-6">
            <h3 className="text-xs text-zinc-600 mb-4">Section Component Variants</h3>
            
            {/* Variant 1: Title only */}
            <div className="space-y-2">
              <span className="text-xs text-zinc-600">Title Only</span>
              <div className="border border-zinc-800 rounded-lg p-4 bg-card">
                <div className="flex flex-col gap-2 px-4 md:px-6 pb-6">
                  <h2 className="tracking-wider max-w-2/3">Section Title</h2>
                </div>
                <div className="px-4 md:px-6">
                  <p className="text-muted text-sm">Content goes here...</p>
                </div>
              </div>
            </div>

            {/* Variant 2: Title with description */}
            <div className="space-y-2">
              <span className="text-xs text-zinc-600">Title + Description</span>
              <div className="border border-zinc-800 rounded-lg p-4 bg-card">
                <div className="flex flex-col gap-2 px-4 md:px-6 pb-6">
                  <h2 className="tracking-wider max-w-2/3">Section Title</h2>
                  <p className="text-muted text-lg lg:max-w-2/3">
                    This is a description that provides additional context about the section content.
                  </p>
                </div>
                <div className="px-4 md:px-6">
                  <p className="text-muted text-sm">Content goes here...</p>
                </div>
              </div>
            </div>

            {/* Variant 3: Title with link */}
            <div className="space-y-2">
              <span className="text-xs text-zinc-600">Title + Link</span>
              <div className="border border-zinc-800 rounded-lg p-4 bg-card">
                <div className="flex flex-col gap-2 px-4 md:px-6 pb-6">
                  <h2 className="tracking-wider max-w-2/3">
                    <a href="https://example.com" className="group inline-flex items-center gap-1 transition-all duration-600 font-bold">
                      Section Title
                      <Icon 
                        name="caret-right"
                        variant="ui16"
                        className="text-muted translate-y-1 group-hover:text-link-hover group-hover:translate-x-[4px] transition-all duration-600"
                      />
                    </a>
                  </h2>
                </div>
                <div className="px-4 md:px-6">
                  <p className="text-muted text-sm">Content goes here...</p>
                </div>
              </div>
            </div>

            {/* Variant 4: Title with description and link */}
            <div className="space-y-2">
              <span className="text-xs text-zinc-600">Title + Description + Link</span>
              <div className="border border-zinc-800 rounded-lg p-4 bg-card">
                <div className="flex flex-col gap-2 px-4 md:px-6 pb-6">
                  <h2 className="tracking-wider max-w-2/3">
                    <a href="https://example.com" className="group inline-flex items-center gap-1 transition-all duration-600 font-bold">
                      Section Title
                      <Icon 
                        name="caret-right"
                        variant="ui16"
                        className="text-muted translate-y-1 group-hover:text-link-hover group-hover:translate-x-[4px] transition-all duration-600"
                      />
                    </a>
                  </h2>
                  <p className="text-muted text-lg lg:max-w-2/3">
                    This is a description that provides additional context about the section content.
                  </p>
                </div>
                <div className="px-4 md:px-6">
                  <p className="text-muted text-sm">Content goes here...</p>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Heading Sizes */}
          <div className="space-y-6">
            <h3 className="text-xs text-zinc-600 mb-4">Direct Heading Sizes</h3>
            <div className="space-y-4">
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-zinc-600 min-w-[40px]">H2</span>
                <h2>Section Heading 2<br></br>Second line of text</h2>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-zinc-600 min-w-[40px]">H3</span>
                <h3>Section Heading 3<br></br>Second line of text</h3>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-zinc-600 min-w-[40px]">H4</span>
                <h4>Section Heading 4<br></br>Second line of text</h4>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-zinc-600 min-w-[40px]">H5</span>
                <h5>Section Heading 5<br></br>Second line of text</h5>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-zinc-600 min-w-[40px]">H6</span>
                <h6>Section Heading 6<br></br>Second line of text</h6>
              </div>
            </div>
          </div>

          {/* Heading with Link */}
          <div className="space-y-6">
            <h3 className="text-xs text-zinc-600 mb-4">Heading with Link</h3>
            <div className="space-y-4">
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-zinc-600 min-w-[40px]">H2 Link</span>
                <h2>
                  <a className="duration-600" href="https://example.com">
                    Section Heading 2 Link<br></br>Second line of text
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

