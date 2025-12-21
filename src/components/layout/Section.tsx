interface SectionProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ title, description, children, className = "", id = "section-content" }: SectionProps) {
  return (
    <section className={`w-full px-1 md:px-6 py-6 md:py-12 ${className}`}>
      <div id={id} className="flex flex-col max-w-screen-xl mx-auto w-full">
        {title && (
          <div id="section-title" className="flex flex-col gap-2 px-4 md:px-6 pb-6">
            <h2 className="tracking-wider max-w-2/3">
              {title}
            </h2>
            {description && (
              <p className="text-lg lg:max-w-2/3">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;

