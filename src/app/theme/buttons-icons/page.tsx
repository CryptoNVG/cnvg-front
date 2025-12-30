"use client";

import { Section } from "@/components/layout/Section";
import { SectionHero } from "@/components/layout/SectionHero";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export default function ButtonsIconsPage() {
  return (
    <>
      <SectionHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Theme", href: "/theme" },
        ]}
        title="Buttons & Icons"
        description="Button components and icon system."
      />

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
    </>
  );
}

