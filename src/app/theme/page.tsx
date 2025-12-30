"use client";

import { SectionHero } from "@/components/layout/SectionHero";
import { Section } from "@/components/layout/Section";
import { CardLink } from "@/components/ui/CardLink";

export default function ThemePage() {
  return (
    <>
      <SectionHero
        breadcrumbs={[
          { label: "Home", href: "/" },
        ]}
        title="Theme Components"
        description="This page showcases all the UI components and design tokens available in the design system."
      />

      <Section title="Theme Sections" description="Navigate to different sections of the theme documentation.">
        <div className="grid grid-cols-1 gap-1 md:grid-cols-1 md:gap-1 lg:grid-cols-2">
          <CardLink
            iconName="squares-four"
            iconGradientAngle={85}
            iconGradientColor1="var(--accent-green)"
            iconGradientColor2="var(--accent-pink)"
            title="Cards & Blocks"
            description="Card components and content blocks for displaying information"
            url="/theme/cards-blocks"
          />
          <CardLink
            iconName="text-aa"
            iconGradientAngle={120}
            iconGradientColor1="var(--accent-cyan)"
            iconGradientColor2="var(--accent-blue)"
            title="Typography"
            description="Typography system with headings and text styles"
            url="/theme/typography"
          />
          <CardLink
            iconName="cursor-click"
            iconGradientAngle={45}
            iconGradientColor1="var(--accent-yellow)"
            iconGradientColor2="var(--accent-orange)"
            title="Buttons & Icons"
            description="Button components and icon system"
            url="/theme/buttons-icons"
          />
          <CardLink
            iconName="notepad"
            iconGradientAngle={180}
            iconGradientColor1="var(--accent-purple)"
            iconGradientColor2="var(--accent-pink)"
            title="Forms"
            description="Form components including inputs, textareas, selects, checkboxes, and radio buttons"
            url="/theme/forms"
          />
          <CardLink
            iconName="flag"
            iconGradientAngle={90}
            iconGradientColor1="var(--accent-red)"
            iconGradientColor2="var(--accent-orange)"
            title="Heroes"
            description="Hero section components with various configurations"
            url="/theme/heroes"
          />
          <CardLink
            iconName="Yarn"
            iconGradientAngle={270}
            iconGradientColor1="var(--accent-indigo)"
            iconGradientColor2="var(--accent-blue)"
            title="Breadcrumbs"
            description="Navigation breadcrumbs for page hierarchy"
            url="/theme/breadcrumbs"
          />
        </div>
      </Section>
    </>
  );
}
