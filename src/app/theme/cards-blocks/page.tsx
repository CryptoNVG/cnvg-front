"use client";

import { Section } from "@/components/layout/Section";
import { SectionHero } from "@/components/layout/SectionHero";
import { CardSimple } from "@/components/ui/CardSimple";
import { CardLink } from "@/components/ui/CardLink";

export default function CardsBlocksPage() {
  return (
    <>
      <SectionHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Theme", href: "/theme" },
        ]}
        title="Cards & Blocks"
        description="Card components and content blocks for displaying information."
      />

      <Section title="Cards" description="Some text" url="https://example.com" id="customid" >
      <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-2 pb-4">
        <CardSimple 
          title="Card 1" 
          description="This is a card with a title, description, and a footer content."
        >
          <p>First paragraph</p>
          <p>Second paragraph</p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
          </ul> 
        </CardSimple>
        <CardSimple 
          title="Card 2" 
          description="This is a card with a title, description."
        >
          <p>First paragraph</p>
          <p>Second paragraph</p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
          </ul> 
        </CardSimple>
        <CardSimple 
        >
          <p>First paragraph</p>
          <p>Second paragraph</p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
          </ul> 
        </CardSimple>
      </div>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2">
        <CardSimple 
          title="Listing a crypto exchange" 
          description="This is a card with a title, description, and a footer content."
          iconName="cloud-arrow-down"
          iconGradientAngle={95}
          iconGradientColor1="var(--accent-yellow)"
          iconGradientColor2="var(--accent-pink)"
        >
          <p>Aliquam aliquam pharetra tempor. Proin volutpat blandit congue. Aliquam nec egestas augue. Vestibulum accumsan bibendum mattis. Sed felis libero, commodo vel diam maximus, dignissim pulvinar urna. Vivamus aliquam odio ac mattis interdum. Vivamus massa eros, rhoncus ut mi vitae, auctor ultricies risus. Integer efficitur hendrerit dignissim. Duis at augue ornare, vehicula orci sit amet, venenatis massa. Suspendisse potenti. Pellentesque pharetra tempus mi, eget pretium leo rutrum eget.</p>
          <p>Some info text</p>
        </CardSimple>
        <CardSimple 
          title="Exchange promotion" 
          description="This is a card with a title, description."
          iconName="lightning"
          iconGradientAngle={180}
          iconGradientColor1="var(--accent-cyan)"
          iconGradientColor2="var(--accent-blue)"
        >
          <p>First paragraph</p>
          <p>Second paragraph</p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
          </ul> 
        </CardSimple>
      </div>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 mt-4">
        <CardLink
          iconName="lightning"
          iconGradientAngle={85}
          iconGradientColor1="var(--accent-green)"
          iconGradientColor2="var(--accent-pink)"
          title="Exchange Promotion"
          description="Get special rates and bonuses for new users"
          url="/exchange/promotion"
        />
        <CardLink
          iconName="cloud-arrow-down"
          iconGradientAngle={120}
          iconGradientColor1="var(--accent-cyan)"
          iconGradientColor2="var(--accent-blue)"
          title="Download Mobile App"
          description="Access your account on the go with our mobile application"
          url="/download"
        />
      </div>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-2 mt-4">
        <CardLink
          iconName="map-pin"
          iconGradientAngle={45}
          iconGradientColor1="var(--accent-green)"
          iconGradientColor2="var(--accent-pink)"
          title="Tbilisi"
          description="Capital city of Georgia, known for its diverse architecture and vibrant culture"
          url="/locations/tbilisi"
        />
        <CardLink
          iconName="map-pin"
          iconGradientAngle={45}
          iconGradientColor1="var(--accent-green)"
          iconGradientColor2="var(--accent-pink)"
          title="Batumi"
          description="Coastal city on the Black Sea, famous for its modern architecture and seaside promenade"
          url="/locations/batumi"
        />
        <CardLink
          iconName="map-pin"
          iconGradientAngle={45}
          iconGradientColor1="var(--accent-green)"
          iconGradientColor2="var(--accent-pink)"
          title="Kutaisi"
          description="Historic city in western Georgia, home to ancient monasteries and cultural heritage sites"
          url="/locations/kutaisi"
        />
      </div>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-2 mt-4">
        <CardLink
          title="Tbilisi"
          url="/locations/tbilisi"
        />
        <CardLink
          title="Batumi"
          url="/locations/batumi"
        />
        <CardLink
          title="Kutaisi"
          url="/locations/kutaisi"
        />
      </div>
      </Section>
    </>
  );
}

