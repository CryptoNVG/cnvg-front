"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";
import { SectionHero } from "@/components/layout/SectionHero";
import { CardSimple } from "@/components/ui/CardSimple";
import { CardLink } from "@/components/ui/CardLink";
import { Icon } from "@/components/ui/Icon";
import { SectionBreadcrumbs, MOCK_BREADCRUMBS } from "@/components/layout/SectionBreadcrumbs";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { Radio } from "@/components/ui/Radio";

export default function ThemePage() {
  const [radioValue, setRadioValue] = useState("option2");
  return (
    <>
      {/* Section: Hero */}
      <SectionHero
        breadcrumbs={MOCK_BREADCRUMBS.simpleData}
        title="Theme Components"
        description="This page showcases all the UI components and design tokens available in the design system."
        buttonLabel="Download"
        buttonUrl="/exchange/add"
        buttonColor="blue"
        buttonIcon="AppStoreLogo"
      />

      {/* Section: Breadcrumbs */}

      <Section title="Breadcrumbs" description="Navigation breadcrumbs for page hierarchy. Horizontal scroll on overflow, no visible scrollbar.">
        <div className="px-4 md:px-6">
          {/* Exchange Profile Path */}
          <div className="mb-8">
            <h3 className="text-xs text-zinc-600 mb-2">Exchange Profile</h3>
            <div className="rounded-2xl border-[1px] border-zinc-900">
              <SectionBreadcrumbs items={MOCK_BREADCRUMBS.exchangeProfile} />
            </div>
          </div>

          {/* ATM Profile Path */}
          <div className="mb-8">
            <h3 className="text-xs text-zinc-600 mb-2">ATM Profile</h3>
            <div className="rounded-2xl border-[1px] border-zinc-900">
              <SectionBreadcrumbs items={MOCK_BREADCRUMBS.atmProfile} />
            </div>
          </div>

          {/* Online Exchange Path */}
          <div className="mb-8">
            <h3 className="text-xs text-zinc-600 mb-2">Online Exchange</h3>
            <div className="rounded-2xl border-[1px] border-zinc-900">
              <SectionBreadcrumbs items={MOCK_BREADCRUMBS.onlineExchange} />
            </div>
          </div>

          {/* Blog Article Path */}
          <div className="mb-8">
            <h3 className="text-xs text-zinc-600 mb-2">Blog Article</h3>
            <div className="rounded-2xl border-[1px] border-zinc-900">
              <SectionBreadcrumbs items={MOCK_BREADCRUMBS.blogArticle} />
            </div>
          </div>

          {/* Event Path */}
          <div className="mb-8">
            <h3 className="text-xs text-zinc-600 mb-2">Event</h3>
            <div className="rounded-2xl border-[1px] border-zinc-900">
              <SectionBreadcrumbs items={MOCK_BREADCRUMBS.event} />
            </div>
          </div>

          {/* Ads Path */}
          <div className="mb-8">
            <h3 className="text-xs text-zinc-600 mb-2">Ads / Service</h3>
            <div className="rounded-2xl border-[1px] border-zinc-900">
              <SectionBreadcrumbs items={MOCK_BREADCRUMBS.ads} />
            </div>
          </div>

          {/* FAQ Article Path */}
          <div className="mb-8">
            <h3 className="text-xs text-zinc-600 mb-2">Support / FAQ / Article</h3>
            <div className="rounded-2xl border-[1px] border-zinc-900">
              <SectionBreadcrumbs items={MOCK_BREADCRUMBS.faqArticle} />
            </div>
          </div>

          {/* Contact Form Path */}
          <div className="mb-8">
            <h3 className="text-xs text-zinc-600 mb-2">Support / Contact Form</h3>
            <div className="rounded-2xl border-[1px] border-zinc-900">
              <SectionBreadcrumbs items={MOCK_BREADCRUMBS.contactForm} />
            </div>
          </div>
        </div>
      </Section>

      {/* Section: Cards */}

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
     
      {/* Section: Typography */}
      
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

      {/* Section: Buttons */}
      
      <Section title="Buttons" description="This is the buttons section. It contains the buttons for the theme page." >
        <div className="px-4 md:px-6">
          {/* Sizes */}
          <div className="mb-12">
            <h3 className="text-xs text-zinc-600 mb-4">Sizes</h3>
            <div className="flex items-center gap-4">
              <Button label="Small" size="small" />
              <Button label="Medium" size="medium" />
              <Button label="Big" size="big" />
            </div>
          </div>
          {/* Primary Colors */}
          <div className="mb-12">
            <h3 className="text-xs text-zinc-600 mb-4">Primary Colors</h3>
            <div className="flex items-center gap-4 flex-wrap">
              <Button label="Green" color="green" />
              <Button label="Red" color="red" />
              <Button label="Orange" color="orange" />
              <Button label="Yellow" color="yellow" />
              <Button label="Cyan" color="cyan" />
              <Button label="Blue" color="blue" />
              <Button label="Indigo" color="indigo" />
              <Button label="Purple" color="purple" />
              <Button label="Pink" color="pink" />
            </div>
          </div>
          {/* Variants */}
          <div className="mb-12">
            <h3 className="text-xs text-zinc-600 mb-4">Variants</h3>
            <div className="flex items-center gap-4 flex-wrap">
              <Button label="Primary" variant="primary" />
              <Button label="Card" variant="card" />
              <Button label="Card Accent" variant="cardAccent" />
              <div className="bg-card p-4 rounded-4xl flex gap-4">
                <Button label="Secondary" variant="secondary" />
                <Button label="Secondary Accent" variant="secondaryAccent" />
              </div>
              <div className="bg-teal-900 p-4 rounded-4xl">
                <Button label="On Color" variant="secondaryOnColor" />
              </div>
            </div>
          </div>
          {/* Types */}
          <div className="mb-12">
            <h3 className="text-xs text-zinc-600 mb-4">Types</h3>
            <div className="flex items-center gap-4 flex-wrap">
              <Button label="Text Only" type="text" />
              <Button label="Left Icon" type="leftIcon" iconName="House" />
              <Button label="Right Icon" type="rightIcon" iconName="ArrowRight" />
              <Button type="icon" iconName="Plus" />
            </div>
          </div>
          {/* Icon Types with Sizes */}
          <div className="mb-12">
            <h3 className="text-xs text-zinc-600 mb-4">Icon Button Sizes</h3>
            <div className="flex items-center gap-4">
              <Button type="icon" iconName="Plus" size="small" />
              <Button type="icon" iconName="Plus" size="medium" />
              <Button type="icon" iconName="Plus" size="big" />
            </div>
          </div>
          {/* Left Icon with Sizes */}
          <div className="mb-12">
            <h3 className="text-xs text-zinc-600 mb-4">Left Icon Sizes</h3>
            <div className="flex items-center gap-4">
              <Button label="Small" type="leftIcon" iconName="House" size="small" />
              <Button label="Medium" type="leftIcon" iconName="House" size="medium" />
              <Button label="Big" type="leftIcon" iconName="House" size="big" />
            </div>
          </div>
          {/* Variants with Icons */}
          <div className="mb-12">
            <h3 className="text-xs text-zinc-600 mb-4">Variants with Icons</h3>
            <div className="flex items-center gap-4 flex-wrap">
              <Button label="Primary" type="leftIcon" iconName="Star" variant="primary" />
              <Button label="Card" type="leftIcon" iconName="Gear" variant="card" />
              <Button label="Card Accent" type="leftIcon" iconName="Lightning" variant="cardAccent" />
              <Button label="Secondary" type="leftIcon" iconName="User" variant="secondary" />
            </div>
          </div>
          {/* As Link */}
          <div className="mb-12">
            <h3 className="text-xs text-zinc-600 mb-4">As Link</h3>
            <div className="flex items-center gap-4">
              <Button label="Visit Site" url="https://example.com" type="rightIcon" iconName="ArrowRight" />
            </div>
          </div>
        </div>
      </Section>

      {/* Section: Icons */}

      <Section title="Icons" description="This is the icons section. It contains icon variants using Phosphor Icons.">
        <div className="px-4 md:px-6">
          {/* Variants */}
          <div className="mb-12">
            <h3 className="text-xs text-zinc-600 mb-4">Variants</h3>
            <div className="flex items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <Icon name="arrow-circle-right" variant="big" />
                <span className="text-xs text-zinc-600">Big (40x40)</span>
                <span className="text-xs text-muted">Light, Gradient</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon name="arrow-circle-right" variant="small" />
                <span className="text-xs text-zinc-600">Small (24x24)</span>
                <span className="text-xs text-muted">Fill, Gradient</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon name="arrow-circle-right" variant="ui16" />
                <span className="text-xs text-zinc-600">UI (16x16)</span>
                <span className="text-xs text-muted">Bold, Solid</span>
              </div>
            </div>
          </div>
          {/* Different Icons with Different Gradients */}
          <div className="mb-12">
            <h3 className="text-xs text-zinc-600 mb-4">Different Icons - Big Variant (Various Gradients)</h3>
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex flex-col items-center gap-2">
                <Icon 
                  name="arrow-circle-right" 
                  variant="big"
                  gradientAngle={45}
                  gradientColor1="var(--accent-yellow)"
                  gradientColor2="var(--accent-blue)"
                />
                <span className="text-xs text-muted">45° Yellow→Blue</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon 
                  name="house" 
                  variant="big"
                  gradientAngle={135}
                  gradientColor1="var(--accent-green)"
                  gradientColor2="var(--accent-cyan)"
                />
                <span className="text-xs text-muted">135° Green→Cyan</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon 
                  name="star" 
                  variant="big"
                  gradientAngle={90}
                  gradientColor1="var(--accent-orange)"
                  gradientColor2="var(--accent-red)"
                />
                <span className="text-xs text-muted">90° Orange→Red</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon 
                  name="gear" 
                  variant="big"
                  gradientAngle={180}
                  gradientColor1="var(--accent-purple)"
                  gradientColor2="var(--accent-pink)"
                />
                <span className="text-xs text-muted">180° Purple→Pink</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon 
                  name="heart" 
                  variant="big"
                  gradientAngle={0}
                  gradientColor1="var(--accent-red)"
                  gradientColor2="var(--accent-pink)"
                />
                <span className="text-xs text-muted">0° Red→Pink</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon 
                  name="user" 
                  variant="big"
                  gradientAngle={270}
                  gradientColor1="var(--accent-indigo)"
                  gradientColor2="var(--accent-blue)"
                />
                <span className="text-xs text-muted">270° Indigo→Blue</span>
              </div>
            </div>
          </div>
          {/* Different Icons - Small Variant with Different Gradients */}
          <div className="mb-12">
            <h3 className="text-xs text-zinc-600 mb-4">Different Icons - Small Variant (Various Gradients)</h3>
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex flex-col items-center gap-2">
                <Icon 
                  name="arrow-circle-right" 
                  variant="small"
                  gradientAngle={60}
                  gradientColor1="var(--accent-yellow)"
                  gradientColor2="var(--accent-green)"
                />
                <span className="text-xs text-muted">60° Yellow→Green</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon 
                  name="house" 
                  variant="small"
                  gradientAngle={120}
                  gradientColor1="var(--accent-cyan)"
                  gradientColor2="var(--accent-blue)"
                />
                <span className="text-xs text-muted">120° Cyan→Blue</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon 
                  name="star" 
                  variant="small"
                  gradientAngle={30}
                  gradientColor1="var(--accent-orange)"
                  gradientColor2="var(--accent-yellow)"
                />
                <span className="text-xs text-muted">30° Orange→Yellow</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon 
                  name="gear" 
                  variant="small"
                  gradientAngle={210}
                  gradientColor1="var(--accent-indigo)"
                  gradientColor2="var(--accent-purple)"
                />
                <span className="text-xs text-muted">210° Indigo→Purple</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon 
                  name="heart" 
                  variant="small"
                  gradientAngle={15}
                  gradientColor1="var(--accent-pink)"
                  gradientColor2="var(--accent-red)"
                />
                <span className="text-xs text-muted">15° Pink→Red</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon 
                  name="user" 
                  variant="small"
                  gradientAngle={300}
                  gradientColor1="var(--accent-blue)"
                  gradientColor2="var(--accent-purple)"
                />
                <span className="text-xs text-muted">300° Blue→Purple</span>
              </div>
            </div>
          </div>
          {/* Different Icons - UI Variant */}
          <div className="mb-12">
            <h3 className="text-xs text-zinc-600 mb-4">Different Icons - UI Variant</h3>
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex flex-col items-center gap-2">
                <Icon name="arrow-circle-right" variant="ui16" />
                <span className="text-xs text-muted">arrow-circle-right</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon name="house" variant="ui16" />
                <span className="text-xs text-muted">house</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon name="star" variant="ui16" />
                <span className="text-xs text-muted">star</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon name="gear" variant="ui16" />
                <span className="text-xs text-muted">gear</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon name="heart" variant="ui16" />
                <span className="text-xs text-muted">heart</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon name="user" variant="ui16" />
                <span className="text-xs text-muted">user</span>
              </div>
            </div>
          </div>
          {/* In Context */}
          <div className="mb-12">
            <h3 className="text-xs text-zinc-600 mb-4">In Context</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="arrow-circle-right" variant="big" />
                <div>
                  <h4 className="text-heading">Big Icon with Heading</h4>
                  <p className="text-muted">This is a description text next to a big icon.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="arrow-circle-right" variant="small" />
                <div>
                  <h5 className="text-heading">Small Icon with Heading</h5>
                  <p className="text-muted">This is a description text next to a small icon.</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="arrow-circle-right" variant="ui16" />
                <span className="text-base">UI icon inline with text</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section: Forms */}
      
      <Section title="Forms" description="This is the forms section. It contains input fields, textareas, selects, checkboxes, and radio buttons.">
        <div className="px-4 md:px-6">
          {/* Input Fields */}
          <div className="mb-12">
            <h3 className="text-xs text-zinc-600 mb-4">Input Fields</h3>
            <div className="space-y-6 max-w-md">
              <Input 
                label="Default Input"
                placeholder="Enter text here"
              />
              <Input 
                label="Input with Helper Text"
                placeholder="Enter your email"
                helperText="We'll never share your email with anyone else."
              />
              <Input 
                label="Required Input"
                placeholder="Enter text here"
                required
              />
              <Input 
                label="Input with Character Limit"
                placeholder="Max 50 characters"
                maxLength={50}
                helperText="Enter up to 50 characters"
              />
              <Input 
                label="Input with Error"
                placeholder="Enter text here"
                error="This field is required"
                defaultValue="invalid value"
              />
              <Input 
                placeholder="Input without label"
              />
              <Input 
                label="Disabled Input"
                placeholder="Cannot edit this"
                disabled
              />
            </div>
          </div>

          {/* Input Types */}
          <div className="mb-12">
            <h3 className="text-xs text-zinc-600 mb-4">Input Types</h3>
            <div className="space-y-6 max-w-md">
              <Input 
                label="Email Input"
                type="email"
                placeholder="example@email.com"
                helperText="Enter your email address"
              />
              <Input 
                label="Password Input"
                type="password"
                placeholder="Enter your password"
                helperText="Password must be at least 8 characters"
              />
              <Input 
                label="Number Input"
                type="number"
                placeholder="Enter a number"
                helperText="Enter any number"
              />
              <Input 
                label="Date Input"
                type="date"
                helperText="Select a date"
              />
              <Input 
                label="Time Input"
                type="time"
                helperText="Select a time"
              />
              <Input 
                label="Date & Time Input"
                type="datetime-local"
                helperText="Select date and time"
              />
              <Input 
                label="URL Input"
                type="url"
                placeholder="https://example.com"
                helperText="Enter a valid URL"
              />
            </div>
          </div>

          {/* Textarea */}
          <div className="mb-12">
            <h3 className="text-xs text-zinc-600 mb-4">Textarea</h3>
            <div className="space-y-6 max-w-md">
              <Textarea 
                label="Default Textarea"
                placeholder="Enter your message here"
              />
              <Textarea 
                label="Textarea with Helper Text"
                placeholder="Describe your issue"
                helperText="Please provide as much detail as possible."
              />
              <Textarea 
                label="Required Textarea"
                placeholder="Enter your message here"
                required
              />
              <Textarea 
                label="Textarea with Character Limit"
                placeholder="Max 200 characters"
                maxLength={200}
                helperText="Enter up to 200 characters"
              />
              <Textarea 
                label="Textarea with Min Lines (3 lines)"
                placeholder="Minimum 3 lines"
                minLines={3}
                helperText="This field has minimum 3 lines"
              />
              <Textarea 
                label="Textarea with Min Lines (5 lines)"
                placeholder="Minimum 5 lines"
                minLines={5}
                helperText="This field has minimum 5 lines"
              />
              <Textarea 
                label="Textarea with Error"
                placeholder="Enter text here"
                error="Message is too short"
                defaultValue="Short"
              />
            </div>
          </div>

          {/* Select */}
          <div className="mb-12">
            <h3 className="text-xs text-zinc-600 mb-4">Select</h3>
            <div className="space-y-6 max-w-md">
              <Select 
                label="Default Select"
                placeholder="Choose an option"
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" },
                  { value: "option3", label: "Option 3" },
                ]}
              />
              <Select 
                label="Select with Helper Text"
                placeholder="Select a country"
                helperText="Choose your country of residence"
                options={[
                  { value: "ge", label: "Georgia" },
                  { value: "us", label: "United States" },
                  { value: "uk", label: "United Kingdom" },
                ]}
              />
              <Select 
                label="Required Select"
                placeholder="Choose an option"
                required
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" },
                  { value: "option3", label: "Option 3" },
                ]}
              />
              <Select 
                label="Select with Error"
                placeholder="Choose an option"
                error="Please select an option"
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" },
                ]}
              />
            </div>
          </div>

          {/* Checkbox */}
          <div className="mb-12">
            <h3 className="text-xs text-zinc-600 mb-4">Checkbox</h3>
            <div className="space-y-4 max-w-md">
              <Checkbox 
                label="Default Checkbox"
              />
              <Checkbox 
                label="Checked Checkbox"
                defaultChecked
              />
              <Checkbox 
                label="Disabled Checkbox"
                disabled
              />
              <Checkbox 
                label="Checkbox with Error"
                error="You must accept the terms"
              />
            </div>
          </div>

          {/* Radio */}
          <div className="mb-12">
            <h3 className="text-xs text-zinc-600 mb-4">Radio Buttons</h3>
            <div className="space-y-6 max-w-md">
              <Radio 
                name="example1"
                label="Default Radio Group"
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" },
                  { value: "option3", label: "Option 3" },
                ]}
              />
              <Radio 
                name="example2"
                label="Radio Group with Selected Value (Controlled)"
                value={radioValue}
                onChange={(e) => setRadioValue(e.target.value)}
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" },
                  { value: "option3", label: "Option 3" },
                ]}
              />
              <Radio 
                name="example3"
                label="Radio Group with Error"
                error="Please select an option"
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" },
                ]}
              />
            </div>
          </div>

          {/* Form Example */}
          <div className="mb-12">
            <h3 className="text-xs text-zinc-600 mb-4">Complete Form Example</h3>
            <div className="max-w-2xl">
              <div className="bg-card border border-zinc-800 rounded-2xl p-6 space-y-6">
                <h4 className="text-heading mb-4">Contact Form</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input 
                    label="First Name"
                    placeholder="John"
                    required
                  />
                  <Input 
                    label="Last Name"
                    placeholder="Doe"
                  />
                </div>
                <Input 
                  label="Email"
                  type="email"
                  placeholder="john.doe@example.com"
                  helperText="We'll use this to contact you"
                  required
                />
                <Select 
                  label="Subject"
                  placeholder="Select a subject"
                  required
                  options={[
                    { value: "general", label: "General Inquiry" },
                    { value: "support", label: "Support Request" },
                    { value: "feedback", label: "Feedback" },
                  ]}
                />
                <Textarea 
                  label="Message"
                  placeholder="Enter your message here"
                  rows={5}
                  required
                />
                <Checkbox 
                  label="I agree to the terms and conditions"
                  required
                />
                <div className="flex gap-4">
                  <Button label="Submit" color="green" />
                  <Button label="Cancel" variant="secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
    </>
  );
}
