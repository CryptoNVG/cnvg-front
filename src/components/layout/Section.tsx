interface SectionProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ title, description, children, className = "" }: SectionProps) {
  return (
    <section className={`w-full ${className}`}>
      <div className="flex flex-col pt-0 pb-6 px-1 md:px-6 max-w-screen-xl mx-auto w-full">
        {title && (
          <div className="flex flex-col gap-2 mb-8 px-4 md:px-6">
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

