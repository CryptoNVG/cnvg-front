"use client";

import { Section } from "@/components/layout/Section";
import { SectionHero } from "@/components/layout/SectionHero";

export default function TypographyPage() {
  return (
    <>
      <SectionHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Theme", href: "/theme" },
        ]}
        title="Typography"
        description="Typography system with headings and text styles."
      />
      
      <Section 
      title="Typography" description="This is the typography section. It contains the headings and paragraphs for the theme page.">
        <div className="px-4 md:px-6">
          {/* Headings */}
          <div className="space-y-6 mb-12">
            <div className="flex items-baseline gap-4">
              <span className="text-xs text-zinc-600 min-w-[40px]">H1</span>
              <h1>Heading 1<br></br>Seccond line</h1>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-xs text-zinc-600 min-w-[40px]">H2</span>
              <h2>Heading 2<br></br>Nunc id fringilla eros.</h2>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-xs text-zinc-600 min-w-[40px]">H2 URL</span>
              <h2><a className="duration-600" href="#">Heading 2 link</a></h2>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-xs text-zinc-600 min-w-[40px]">H3</span>
              <h3>Heading 3<br></br>Nunc id fringilla eros.</h3>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-xs text-zinc-600 min-w-[40px]">H4</span>
              <h4>Heading 4<br></br>Nunc id fringilla eros.</h4>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-xs text-zinc-600 min-w-[40px]">H5</span>
              <h5>Heading 5<br></br>Nunc id fringilla eros.</h5>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-xs text-zinc-600 min-w-[40px]">H6</span>
              <h6>Heading 6<br></br>Nunc id fringilla eros.</h6>
            </div>
          </div>
          {/* Paragraphs */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-xs text-zinc-600 min-w-[40px] pt-1">XL</span>
              <p className="text-xl leading-relaxed">
              Aenean vitae laoreet nisi. Nunc id fringilla eros. Sed egestas mauris sit amet arcu vestibulum blandit. Curabitur gravida dui vel purus tempus malesuada. Phasellus at mi ut tellus lobortis lobortis. Aliquam nec lectus at ex laoreet posuere. Quisque interdum nisi non orci luctus dictum. This is extra large body text for prominent content sections.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-xs text-zinc-600 min-w-[40px] pt-1">LG</span>
              <p className="text-lg leading-relaxed">
              Aenean vitae laoreet nisi. Nunc id fringilla eros. Sed egestas mauris sit amet arcu vestibulum blandit. Curabitur gravida dui vel purus tempus malesuada. Phasellus at mi ut tellus lobortis lobortis. Aliquam nec lectus at ex laoreet posuere. Quisque interdum nisi non orci luctus dictum. This is large body text suitable for introductions and lead paragraphs.
              </p>
            </div>
            <div className="flex items-start flex-row gap-4">
              <span className="text-xs text-zinc-600 min-w-[40px] pt-1">Base</span>
              <p className="text-base leading-relaxed basis-1/3">
              Aenean vitae laoreet nisi. Nunc id fringilla eros. <a href="#">Test url example</a> Sed egestas mauris <b>bold text</b> sit amet arcu vestibulum blandit. Curabitur <u>Hello</u> gravida dui vel purus tempus malesuada. Phasellus at mi ut tellus lobortis lobortis. Aliquam nec lectus at ex laoreet posuere. Quisque interdum nisi non orci luctus dictum. This is the default body text size used for most content throughout the application.
              </p>
              <p className="text-muted leading-relaxed basis-1/3">
              Aenean vitae laoreet nisi. Nunc id fringilla eros. <a href="#">Test url example</a> Sed egestas mauris sit amet arcu vestibulum blandit. Curabitur gravida dui vel purus tempus malesuada. Phasellus at mi ut tellus lobortis lobortis. Aliquam nec lectus at ex laoreet posuere. Quisque interdum nisi non orci luctus dictum. This is the default body text size used for most content throughout the application.
              </p>
              <p className="text-base leading-relaxed font-mono basis-1/3">
              Aenean vitae laoreet nisi. Nunc id fringilla eros.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-xs text-zinc-600 min-w-[40px] pt-1">SM</span>
              <p className="text-sm leading-relaxed">
              Aenean vitae laoreet nisi. Nunc id fringilla eros. Sed egestas mauris sit amet arcu vestibulum blandit. Curabitur gravida dui vel purus tempus malesuada. Phasellus at mi ut tellus lobortis lobortis. Aliquam nec lectus at ex laoreet posuere. Quisque interdum nisi non orci luctus dictum. This is small text for secondary content, captions, and supporting information.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-xs text-zinc-600 min-w-[40px] pt-1">XS</span>
              <p className="text-xs leading-relaxed">
              Aenean vitae laoreet nisi. Nunc id fringilla eros. Sed egestas mauris sit amet arcu vestibulum blandit. Curabitur gravida dui vel purus tempus malesuada. Phasellus at mi ut tellus lobortis lobortis. Aliquam nec lectus at ex laoreet posuere. Quisque interdum nisi non orci luctus dictum. This is extra small text for fine print, labels, and metadata.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

