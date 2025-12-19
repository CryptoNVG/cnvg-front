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
            <span className="text-xs text-zinc-600 w-12">H1</span>
            <h1 className="text-5xl">Heading 1</h1>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-xs text-zinc-600 w-12">H2</span>
            <h2 className="text-4xl">Heading 2</h2>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-xs text-zinc-600 w-12">H3</span>
            <h3 className="text-3xl">Heading 3</h3>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-xs text-zinc-600 w-12">H4</span>
            <h4 className="text-2xl">Heading 4</h4>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-xs text-zinc-600 w-12">H5</span>
            <h5 className="text-xl">Heading 5</h5>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-xs text-zinc-600 w-12">H6</span>
            <h6 className="text-lg">Heading 6</h6>
          </div>
        </div>

        {/* Paragraphs */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <span className="text-xs text-zinc-600 w-12 pt-1">XL</span>
            <p className="text-xl">
              The quick brown fox jumps over the lazy dog. This is extra large body text for prominent content sections.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-xs text-zinc-600 w-12 pt-1">LG</span>
            <p className="text-lg">
              The quick brown fox jumps over the lazy dog. This is large body text suitable for introductions and lead paragraphs.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-xs text-zinc-600 w-12 pt-1">Base</span>
            <p className="text-base">
              The quick brown fox jumps over the lazy dog. This is the default body text size used for most content throughout the application.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-xs text-zinc-600 w-12 pt-1">SM</span>
            <p className="text-sm">
              The quick brown fox jumps over the lazy dog. This is small text for secondary content, captions, and supporting information.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-xs text-zinc-600 w-12 pt-1">XS</span>
            <p className="text-xs">
              The quick brown fox jumps over the lazy dog. This is extra small text for fine print, labels, and metadata.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

