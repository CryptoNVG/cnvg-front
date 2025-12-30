"use client";

import { Section } from "@/components/layout/Section";
import { SectionHero } from "@/components/layout/SectionHero";
import { SectionBreadcrumbs, MOCK_BREADCRUMBS } from "@/components/layout/SectionBreadcrumbs";

export default function BreadcrumbsPage() {
  return (
    <>
      <SectionHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Theme", href: "/theme" },
        ]}
        title="Breadcrumbs"
        description="Navigation breadcrumbs for page hierarchy."
      />

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
    </>
  );
}

