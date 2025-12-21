import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";

export default function ThemePage() {
  return (
    <main className="min-h-screen">
      <Section title="Blocks" description="Some text" url="https://example.com" id="customid" >
        <div className="bg-card w-full h-96 rounded-3xl"></div>
      </Section>
     
      {/* Typography */}
      
      <Section 
      title="Typography" 
      description="This is the typography section. It contains the headings and paragraphs for the theme page."
      >

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
      </Section>

      {/* Buttons */}
      <Section title="Buttons" description="This is the buttons section. It contains the buttons for the theme page." >
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
      </Section>
      
    </main>
  );
}
