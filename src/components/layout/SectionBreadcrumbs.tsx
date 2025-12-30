import Link from "next/link";
import { Icon } from "../ui/Icon";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface SectionBreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumbs Formation Rules
 * 
 * Breadcrumbs should follow these guidelines:
 * 
 * 1. **Path Structure**: Include only the navigation path TO the current page, NOT the current page itself.
 *    - The current page name is already displayed in the page title (SectionHero), so it shouldn't be duplicated.
 * 
 * 2. **Root Page**: For root-level pages (e.g., `/theme`), include only "Home":
 *    - ✅ Correct: `[{ label: "Home", href: "/" }]`
 *    - ❌ Wrong: `[{ label: "Home", href: "/" }, { label: "Theme" }]`
 * 
 * 3. **Sub-pages**: For sub-pages, include the path hierarchy up to (but not including) the current page:
 *    - ✅ Correct: `[{ label: "Home", href: "/" }, { label: "Theme", href: "/theme" }]` for `/theme/typography`
 *    - ❌ Wrong: `[{ label: "Home", href: "/" }, { label: "Theme", href: "/theme" }, { label: "Typography" }]`
 * 
 * 4. **Links**: All breadcrumb items except the last one should have `href` property.
 *    - The last item in the array should NOT have `href` (it represents the current page path, not the page itself).
 * 
 * 5. **Examples**:
 *    - `/theme` → `[{ label: "Home", href: "/" }]`
 *    - `/theme/typography` → `[{ label: "Home", href: "/" }, { label: "Theme", href: "/theme" }]`
 *    - `/support/faq/article` → `[{ label: "Home", href: "/" }, { label: "Support", href: "/support" }, { label: "FAQ", href: "/support/faq" }]`
 * 
 * 6. **Label Length**: Labels longer than 20 characters will be automatically truncated with "..."
 */

// Mock data for different page types
export const MOCK_BREADCRUMBS: Record<string, BreadcrumbItem[]> = {
  exchangeProfile: [
    { label: "Home", href: "/" },
    { label: "Exchange", href: "/exchange" },
    { label: "Ukraine", href: "/exchange/ukraine" },
    { label: "Kyiv", href: "/exchange/ukraine/kyiv" },
    { label: "CryptoExchange Pro Disabled Long Label That Should Be Truncated" },
  ],
  atmProfile: [
    { label: "Home", href: "/" },
    { label: "ATM", href: "/atm" },
    { label: "Bitcoin ATM Inc", href: "/atm/bitcoin-atm-inc" },
    { label: "ATM Downtown Super Long Label That Should Be Truncated", href: "/atm/bitcoin-atm-inc/atm-downtown" },
  ],
  onlineExchange: [
    { label: "Home", href: "/" },
    { label: "Online Exchange", href: "/online-exchange" },
    { label: "CoinSwap", href: "/online-exchange/coinswap" },
  ],
  blogArticle: [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Understanding Crypto Markets", href: "/blog/understanding-crypto-markets" },
  ],
  event: [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "Crypto Conference 2024", href: "/events/crypto-conference-2024" },
  ],
  ads: [
    { label: "Home", href: "/" },
    { label: "Ads", href: "/ads" },
    { label: "Premium Listing Service", href: "/ads/premium-listing-service" },
  ],
  faqArticle: [
    { label: "Home", href: "/" },
    { label: "Support", href: "/support" },
    { label: "FAQ", href: "/support/faq" },
    { label: "How to Verify Account", href: "/support/faq/how-to-verify-account" },
  ],
  contactForm: [
    { label: "Home", href: "/" },
    { label: "Support", href: "/support" },
    { label: "Contact Form", href: "/support/contact-form" },
  ],
  simpleData: [
    { label: "Home", href: "/" },
    { label: "Page 2", href: "/#" },
    { label: "Page 3", href: "/#" },
  ],
};

const MAX_LABEL_LENGTH = 20;

function truncateLabel(label: string): string {
  if (label.length <= MAX_LABEL_LENGTH) return label;
  return label.slice(0, MAX_LABEL_LENGTH) + "...";
}

export function SectionBreadcrumbs({ items, className = "" }: SectionBreadcrumbsProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`
        py-3 px-4 md:py-4 md:px-6
        overflow-x-auto
        [scrollbar-width:none]
        [-ms-overflow-style:none]
        [&::-webkit-scrollbar]:hidden
        ${className}
      `}
    >
      <ol className="flex items-center gap-1 whitespace-nowrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const displayLabel = truncateLabel(item.label);
          const isTruncated = item.label.length > MAX_LABEL_LENGTH;

          return (
            <li key={index} className="flex items-center gap-1">
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-xs text-muted transition-colors duration-200 hover:text-link-hover"
                  title={isTruncated ? item.label : undefined}
                >
                  {displayLabel}
                </Link>
              ) : (
                <span 
                  className="text-xs text-muted"
                  title={isTruncated ? item.label : undefined}
                >
                  {displayLabel}
                </span>
              )}

              {!isLast && (
                <Icon name="caret-right" variant="ui12" className="shrink-0" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default SectionBreadcrumbs;

