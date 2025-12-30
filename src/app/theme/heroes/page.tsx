"use client";

import { Section } from "@/components/layout/Section";
import { SectionHero } from "@/components/layout/SectionHero";
import { MOCK_BREADCRUMBS } from "@/components/layout/SectionBreadcrumbs";

export default function HeroesPage() {
  return (
    <>
      <SectionHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Theme", href: "/theme" },
        ]}
        title="Heroes"
        description="Hero section components with various configurations."
      />

      <Section title="Hero Sections" description="Different hero section configurations and examples.">
        <div className="px-4 md:px-6 space-y-8">
          {/* Basic Hero */}
          <div className="mb-8">
            <h3 className="text-xs text-zinc-600 mb-2">Basic Hero</h3>
            <div className="rounded-2xl border-[1px] border-zinc-900">
              <SectionHero
                breadcrumbs={MOCK_BREADCRUMBS.simpleData}
                title="Basic Hero Section"
                description="This is a basic hero section with title and description."
              />
            </div>
          </div>

          {/* Hero with Button */}
          <div className="mb-8">
            <h3 className="text-xs text-zinc-600 mb-2">Hero with Button</h3>
            <div className="rounded-2xl border-[1px] border-zinc-900">
              <SectionHero
                breadcrumbs={MOCK_BREADCRUMBS.simpleData}
                title="Hero with Action Button"
                description="This hero section includes a call-to-action button."
                buttonLabel="Get Started"
                buttonUrl="/exchange/add"
                buttonColor="green"
                buttonIcon="Plus"
              />
            </div>
          </div>

          {/* Hero with Different Colors */}
          <div className="mb-8">
            <h3 className="text-xs text-zinc-600 mb-2">Hero with Blue Button</h3>
            <div className="rounded-2xl border-[1px] border-zinc-900">
              <SectionHero
                breadcrumbs={MOCK_BREADCRUMBS.simpleData}
                title="Hero with Blue Button"
                description="This hero section uses a blue button color."
                buttonLabel="Download"
                buttonUrl="/download"
                buttonColor="blue"
                buttonIcon="AppStoreLogo"
              />
            </div>
          </div>

          {/* Hero with Different Icons */}
          <div className="mb-8">
            <h3 className="text-xs text-zinc-600 mb-2">Hero with Different Icon</h3>
            <div className="rounded-2xl border-[1px] border-zinc-900">
              <SectionHero
                breadcrumbs={MOCK_BREADCRUMBS.simpleData}
                title="Hero with Custom Icon"
                description="This hero section uses a different icon for the button."
                buttonLabel="Learn More"
                buttonUrl="/about"
                buttonColor="purple"
                buttonIcon="Star"
              />
            </div>
          </div>

          {/* Hero without Description */}
          <div className="mb-8">
            <h3 className="text-xs text-zinc-600 mb-2">Hero without Description</h3>
            <div className="rounded-2xl border-[1px] border-zinc-900">
              <SectionHero
                breadcrumbs={MOCK_BREADCRUMBS.simpleData}
                title="Hero Title Only"
                buttonLabel="Action"
                buttonUrl="/action"
                buttonColor="orange"
                buttonIcon="Lightning"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

