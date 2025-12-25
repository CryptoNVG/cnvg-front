import { SectionBreadcrumbs, BreadcrumbItem } from "./SectionBreadcrumbs";
import { Button } from "../ui/Button";

type AccentColor = "green" | "red" | "orange" | "yellow" | "cyan" | "blue" | "indigo" | "purple" | "pink";

interface SectionHeroProps {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  description?: string;
  buttonLabel?: string;
  buttonUrl?: string;
  buttonColor?: AccentColor;
  buttonIcon?: string;
  className?: string;
}

export function SectionHero({
  breadcrumbs,
  title,
  description,
  buttonLabel,
  buttonUrl,
  buttonColor = "green",
  buttonIcon = "Plus",
  className = "",
}: SectionHeroProps) {
  const hasButton = buttonUrl && buttonLabel;

  return (
    <section className={`w-full px-1 md:px-6 pt-[60px] md:pt-[70px] pb-6 md:pb-12 ${className}`}>
      <main id="page-top" className="flex flex-col max-w-7xl mx-auto w-full">
        <SectionBreadcrumbs items={breadcrumbs} />
        
        <div className="flex flex-row items-start justify-between gap-4 md:gap-6 px-4 md:px-6">
          {/* Column 1: Title & Description */}
          <div className="flex flex-col w-full">
            <h1 className="page-title">{title}</h1>
            {description && (
              <p className="page-description text-muted text-lg mt-2">{description}</p>
            )}
          </div>

          {/* Column 2: Button (only render if URL is provided) */}
          {hasButton && (
            <div className="shrink-0">
              {/* Mobile: Icon only */}
              <Button
                url={buttonUrl}
                size="medium"
                variant="primary"
                type="icon"
                iconName={buttonIcon}
                color={buttonColor}
                className="flex! md:hidden!"
              />
              {/* Desktop: Icon + Label */}
              <Button
                label={buttonLabel}
                url={buttonUrl}
                size="medium"
                variant="primary"
                type="leftIcon"
                iconName={buttonIcon}
                color={buttonColor}
                className="hidden! md:inline-flex!"
              />
            </div>
          )}
        </div>
      </main>
    </section>
  );
}

export default SectionHero;

