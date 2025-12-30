// Navigation data structure

import { NavDropdownContentServices } from "./NavDropdownContentServices";
import { NavDropdownContentEvents } from "./NavDropdownContentEvents";
import { NavDropdownContentJournal } from "./NavDropdownContentJournal";
import { NavDropdownContentAds } from "./NavDropdownContentAds";
import { NavDropdownContentInfo } from "./NavDropdownContentInfo";

/**
 * Конфигурация иконки
 * 
 * Пример использования градиентов:
 * {
 *   variant: "small",
 *   className: "text-muted",
 *   gradientAngle: 85,                    // угол градиента в градусах (0-360)
 *   gradientColor1: "var(--accent-green)", // первый цвет градиента
 *   gradientColor2: "var(--accent-pink)",  // второй цвет градиента
 * }
 */
export interface IconConfig {
  variant?: "big" | "small" | "ui16" | "ui12";
  className?: string;
  gradientAngle?: number;
  gradientColor1?: string;
  gradientColor2?: string;
}

export interface NavLinkItem {
  icon?: string;
  iconConfig?: {
    desktop?: IconConfig;
    mobile?: IconConfig;
  };
  title: string;
  subtitle?: string;
  url: string;
}

export interface RecentEventItem {
  image: string;
  title: string;
  date: string;
  subtitle?: string;
  url: string;
}

export interface RecentArticleItem {
  image: string;
  title: string;
  subtitle?: string;
  url: string;
}

export interface RegulationItem {
  jurisdiction: string;
  title: string;
  subtitle?: string;
  url: string;
}

export interface ServicesGroup {
  type: "services";
  items: NavLinkItem[];
}

export interface EventsGroup {
  type: "events";
  recentList: RecentEventItem[];
}

export interface JournalGroup {
  type: "journal";
  recentArticles: RecentArticleItem[];
  recentRegulations: RegulationItem[];
}

export interface AdsGroup {
  type: "ads";
  items: NavLinkItem[];
}

export interface InfoGroup {
  type: "info";
  items: NavLinkItem[];
}

export type NavGroup = ServicesGroup | EventsGroup | JournalGroup | AdsGroup | InfoGroup;

export interface NavSection {
  id: string;
  label: string;
  group: NavGroup;
  dropdownWidth?: string; // Минимальная ширина dropdown (например, "min-w-[220px]" или "w-[280px]")
}

// =====================
// NAVIGATION DATA
// =====================

export const navigationData: NavSection[] = [
  {
    id: "services",
    label: "Crypto Services",
    dropdownWidth: "min-w-[340px]",
    group: {
      type: "services",
      items: [
        { 
          icon: "MoneyWavy", 
          iconConfig: {
            desktop: { variant: "big", gradientAngle: 35, gradientColor1: "var(--accent-green)", gradientColor2: "var(--accent-blue)", className: "text-muted" },
            mobile: { variant: "small", gradientAngle: 35, gradientColor1: "var(--accent-green)", gradientColor2: "var(--accent-blue)", className: "text-muted" },
          },
          title: "Exchange offline", 
          subtitle: "Cryptocurrency exchange service",
          url: "/services/offline-exchange" 
        },
        { 
          icon: "GlobeSimple", 
          iconConfig: {
            desktop: { variant: "big", gradientAngle: 35, gradientColor1: "var(--accent-pink)", gradientColor2: "var(--accent-blue)", className: "text-muted" },
            mobile: { variant: "small", gradientAngle: 35, gradientColor1: "var(--accent-red)", gradientColor2: "var(--accent-blue)", className: "text-muted" },
          },
          title: "Exchange online",
          subtitle: "Cryptocurrency exchange service",
          url: "/services/online-exchange" 
        },
        { 
          icon: "TrendUp", 
          iconConfig: {
            desktop: { variant: "big", gradientAngle: 35, gradientColor1: "var(--accent-red)", gradientColor2: "var(--accent-orange)", className: "text-muted" },
            mobile: { variant: "small", gradientAngle: 35, gradientColor1: "var(--accent-red)", gradientColor2: "var(--accent-orange)", className: "text-muted" },
          },
          title: "CEX, DEX, OTC", 
          subtitle: "Digital asset exchange",
          url: "/services/exchanges" 
        },
        { 
          icon: "CreditCard", 
          iconConfig: {
            desktop: { variant: "small", gradientAngle: 35, gradientColor1: "var(--accent-orange)", gradientColor2: "var(--accent-blue)", className: "text-muted" },
            mobile: { variant: "small", gradientAngle: 35, gradientColor1: "var(--accent-yellow)", gradientColor2: "var(--accent-blue)", className: "text-muted" },
          },
          title: "Crypto Cards", 
          url: "/services/cards" 
        },
        { 
          icon: "Scales", 
          iconConfig: {
            desktop: { variant: "small", gradientAngle: 35, gradientColor1: "var(--accent-pink)", gradientColor2: "var(--accent-purple)", className: "text-muted" },
            mobile: { variant: "small", gradientAngle: 35, gradientColor1: "var(--accent-pink)", gradientColor2: "var(--accent-purple)", className: "text-muted" },
          },
          title: "Legal Support", 
          url: "/services/legal" 
        },
        { 
          icon: "ShieldCheck", 
          iconConfig: {
            desktop: { variant: "small", gradientAngle: 35, gradientColor1: "var(--accent-green)", gradientColor2: "var(--accent-pink)", className: "text-muted" },
            mobile: { variant: "small", gradientAngle: 35, gradientColor1: "var(--accent-green)", gradientColor2: "var(--accent-pink)", className: "text-muted" },
          },
          title: "AML Checks", 
          url: "/services/aml" 
        },
        { 
          icon: "SquaresFour", 
          iconConfig: {
            desktop: { variant: "small", gradientAngle: 35, gradientColor1: "var(--accent-blue)", gradientColor2: "var(--accent-cyan)", className: "text-muted" },
            mobile: { variant: "small", gradientAngle: 35, gradientColor1: "var(--accent-blue)", gradientColor2: "var(--accent-cyan)", className: "text-muted" },
          },
          title: "Other Services", 
          url: "/services/other" 
        },
      ],
    },
  },
  {
    id: "events",
    label: "Events",
    dropdownWidth: "min-w-[280px]",
    group: {
      type: "events",
      recentList: [
        {
          image: "/images/events/event-1.jpg",
          title: "Crypto Summit 2025",
          date: "Jan 15, 2025",
          url: "/events/crypto-summit-2025",
        },
        {
          image: "/images/events/event-2.jpg",
          title: "Blockchain Conference",
          date: "Feb 20, 2025",
          url: "/events/blockchain-conference",
        },
        {
          image: "/images/events/event-3.jpg",
          title: "DeFi Meetup",
          date: "Mar 5, 2025",
          url: "/events/defi-meetup",
        },
      ],
    },
  },
  {
    id: "journal",
    label: "Journal",
    dropdownWidth: "min-w-[400px]",
    group: {
      type: "journal",
      recentArticles: [
        {
          image: "/images/articles/article-1.jpg",
          title: "How to Choose a Reliable Crypto Exchange",
          url: "/journal/how-to-choose-exchange",
        },
        {
          image: "/images/articles/article-2.jpg",
          title: "Understanding AML Compliance",
          url: "/journal/understanding-aml",
        },
      ],
      recentRegulations: [
        {
          jurisdiction: "EU",
          title: "MiCA Regulation Updates",
          url: "/journal/regulations/mica-updates",
        },
        {
          jurisdiction: "USA",
          title: "SEC New Guidelines for Crypto",
          url: "/journal/regulations/sec-guidelines",
        },
        {
          jurisdiction: "UAE",
          title: "VARA Licensing Requirements",
          url: "/journal/regulations/vara-licensing",
        },
      ],
    },
  },
  {
    id: "ads",
    label: "Ads",
    dropdownWidth: "min-w-[200px]",
    group: {
      type: "ads",
      items: [
        { 
          icon: "Plus", 
          iconConfig: {
            desktop: { variant: "ui16", className: "text-accent-green" },
            mobile: { variant: "ui16", className: "text-accent-green" },
          },
          title: "Add exchange", 
          url: "/ads/add-exchange" 
        },
        { 
          icon: "CalendarPlus", 
          iconConfig: {
            desktop: { variant: "ui16", className: "text-accent-green" },
            mobile: { variant: "ui16", className: "text-accent-green" },
          },
          title: "Add event", 
          url: "/ads/add-event" 
        },
        { 
          icon: "NotePencil", 
          iconConfig: {
            desktop: { variant: "ui16", className: "text-accent-green" },
            mobile: { variant: "ui16", className: "text-accent-green" },
          },
          title: "Add article", 
          url: "/ads/add-article" 
        },
      ],
    },
  },
  {
    id: "info",
    label: "Info",
    dropdownWidth: "min-w-[180px]",
    group: {
      type: "info",
      items: [
        { 
          icon: "Info", 
          iconConfig: {
            desktop: { variant: "ui16", className: "text-muted" },
            mobile: { variant: "ui16", className: "text-muted" },
          },
          title: "About", 
          url: "/info/about" 
        },
        { 
          icon: "Headset", 
          iconConfig: {
            desktop: { variant: "ui16", className: "text-muted" },
            mobile: { variant: "ui16", className: "text-muted" },
          },
          title: "Support", 
          url: "/info/support" 
        },
        { 
          icon: "Question", 
          iconConfig: {
            desktop: { variant: "ui16", className: "text-muted" },
            mobile: { variant: "ui16", className: "text-muted" },
          },
          title: "FAQ", 
          url: "/info/faq" 
        },
      ],
    },
  },
];

// Search is separate (not a dropdown)
export const searchLink = {
  icon: "MagnifyingGlass",
  iconConfig: {
    desktop: { 
      variant: "ui16" as const, 
      className: "",
      gradientAngle: undefined,
      gradientColor1: undefined,
      gradientColor2: undefined,
    },
    mobile: { 
      variant: "small" as const, 
      className: "",
      gradientAngle: undefined,
      gradientColor1: undefined,
      gradientColor2: undefined,
    },
  },
  title: "Search",
  url: "/search",
};

// =====================
// ICON CONFIGURATIONS
// =====================

export const headerIconConfig = {
  caretDown: {
    desktop: { 
      variant: "ui12" as const, 
      className: "transition-transform duration-200",
      gradientAngle: undefined,
      gradientColor1: undefined,
      gradientColor2: undefined,
    },
    mobile: { 
      variant: "ui16" as const, 
      className: "text-muted transition-transform duration-200",
      gradientAngle: undefined,
      gradientColor1: undefined,
      gradientColor2: undefined,
    },
  },
  burgerMenu: {
    variant: "small" as const,
    className: "text-heading",
    gradientAngle: undefined,
    gradientColor1: undefined,
    gradientColor2: undefined,
  },
  closeMenu: {
    variant: "small" as const,
    className: "text-heading",
    gradientAngle: undefined,
    gradientColor1: undefined,
    gradientColor2: undefined,
  },
} as const;

// =====================
// COMPONENT MAPPING
// =====================

export const navContentComponents = {
  services: NavDropdownContentServices,
  events: NavDropdownContentEvents,
  journal: NavDropdownContentJournal,
  ads: NavDropdownContentAds,
  info: NavDropdownContentInfo,
} as const;

