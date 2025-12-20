export default function ThemePage() {
  return (
    <main className="min-h-screen p-12">
      {/* Typography */}
      <section className="mb-16">
        <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-8">
          Typography
        </h2>

        {/* Headings */}
        <div className="space-y-6 mb-12">
          <div className="flex items-baseline gap-4">
            <span className="text-xs text-zinc-600 min-w-[40px]">H1</span>
            <h1 className="text-5xl leading-normal">Heading 1<br></br>Seccond line</h1>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-xs text-zinc-600 min-w-[40px]">H2</span>
            <h2 className="text-4xl leading-normal">Heading 2<br></br>Nunc id fringilla eros.</h2>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-xs text-zinc-600 min-w-[40px]">H3</span>
            <h3 className="text-3xl leading-normal">Heading 3<br></br>Nunc id fringilla eros.</h3>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-xs text-zinc-600 min-w-[40px]">H4</span>
            <h4 className="text-2xl leading-normal">Heading 4<br></br>Nunc id fringilla eros.</h4>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-xs text-zinc-600 min-w-[40px]">H5</span>
            <h5 className="text-xl leading-normal">Heading 5<br></br>Nunc id fringilla eros.</h5>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-xs text-zinc-600 min-w-[40px]">H6</span>
            <h6 className="text-lg leading-normal">Heading 6<br></br>Nunc id fringilla eros.</h6>
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
          <div className="flex items-start gap-4">
            <span className="text-xs text-zinc-600 min-w-[40px] pt-1">Base</span>
            <p className="text-base leading-relaxed">
            Aenean vitae laoreet nisi. Nunc id fringilla eros. Sed egestas mauris sit amet arcu vestibulum blandit. Curabitur gravida dui vel purus tempus malesuada. Phasellus at mi ut tellus lobortis lobortis. Aliquam nec lectus at ex laoreet posuere. Quisque interdum nisi non orci luctus dictum. This is the default body text size used for most content throughout the application.
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
      </section>
    </main>
  );
}

