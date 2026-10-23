// All hero copy, links and test settings live here, so changing a headline
// or switching the live variant never means touching the components.

import weddingImg from "../../../assets/hero/wedding.webp";
import faEuroImg from "../../../assets/hero/fa-euro.webp";
import pciImg from "../../../assets/hero/pci-media.webp";
import portfolioImg from "../../../assets/hero/portfolio.webp";

export type HeroVariantId = "a" | "b" | "c";

export type PackageId = "starter" | "professional" | "shop";

export interface ShowcaseProject {
  name: string;
  kind: string;
  url: string;
  host: string;
  image: string;
  alt: string;
}

export interface HeroPackage {
  id: PackageId;
  name: string;
  price: string;
  days: string;
  bestFor: string;
  popular?: boolean;
}

export interface StartChoice {
  id: string;
  label: string;
}

export interface HeroCopy {
  /** Short name used in analytics and the brief. */
  codename: string;
  eyebrow: string;
  headline: string;
  /** Words in the headline that get the brand gradient. Must appear in `headline` exactly. */
  highlight?: string;
  subhead: string;
  primaryLabel: string;
  secondaryLabel: string;
  secondaryHref: string;
  visual: "showcase" | "packages" | "intro";
}

// ---------------------------------------------------------------------------
// Test settings
// ---------------------------------------------------------------------------

export const HERO_EXPERIMENT = {
  /**
   * false: everyone sees `defaultVariant`. Turn this on only once analytics
   * is installed, otherwise you are splitting traffic and learning nothing.
   */
  enabled: false,
  defaultVariant: "a" as HeroVariantId,
  /** Relative traffic share per variant when enabled. */
  weights: { a: 1, b: 1, c: 1 } satisfies Record<HeroVariantId, number>,
  /** Bump the suffix when you change a variant, so returning visitors re-roll. */
  storageKey: "fc_hero_variant_v1",
};

// ---------------------------------------------------------------------------
// Contact. Start buttons go to the form at #start. startHref() builds the
// pre-filled email used as the fallback link next to the form.
// ---------------------------------------------------------------------------

export const CONTACT_EMAIL = "foti.coding@gmail.com";

export function startHref(opts: { packageName?: string; projectType?: string } = {}): string {
  const subject = opts.packageName
    ? `New website: ${opts.packageName} package`
    : opts.projectType
      ? `New website: ${opts.projectType}`
      : "New website for my business";

  const body = [
    "Hi Foti,",
    "",
    `Business name: `,
    `What we do: ${opts.projectType ?? ""}`,
    `Package: ${opts.packageName ?? "Starter / Professional / Local Shop / not sure"}`,
    "Ideal launch date: ",
    "Current website (if any): ",
    "",
    "Thanks!",
  ].join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// ---------------------------------------------------------------------------
// Shared proof
// ---------------------------------------------------------------------------

export const FACTS = [
  { label: "From", value: "$500" },
  { label: "Live in", value: "7–21 days" },
  { label: "Built by", value: "Foti Ceci, software engineer" },
];

export const PROOF_LINE = {
  label: "Recent sites",
  items: ["FA Euro New York", "PCI Media", "A destination wedding in Albania"],
};

export const SHOWCASE: ShowcaseProject[] = [
  {
    name: "Destination wedding",
    kind: "My own wedding site · Custom build",
    url: "https://weddingfi.netlify.app/",
    host: "weddingfi.netlify.app",
    image: weddingImg,
    alt: "Wedding website with a couple on a seaside terrace at sunset",
  },
  {
    name: "FA Euro New York",
    kind: "Youth soccer club · Wix Studio",
    url: "https://www.faeuro.com/",
    host: "faeuro.com",
    image: faEuroImg,
    alt: "FA Euro New York club website with news and player photos",
  },
  {
    name: "PCI Media",
    kind: "Nonprofit · WordPress",
    url: "https://www.pcimedia.org/",
    host: "pcimedia.org",
    image: pciImg,
    alt: "PCI Media nonprofit homepage in orange and teal",
  },
  {
    name: "foticeci.com",
    kind: "Portfolio · Custom React",
    url: "https://foticeci.com",
    host: "foticeci.com",
    image: portfolioImg,
    alt: "Dark portfolio website for software engineer Foti Ceci",
  },
];

export const PACKAGES: HeroPackage[] = [
  { id: "starter", name: "Starter", price: "$500", days: "7–10 days", bestFor: "Up to 4 pages, contact form" },
  { id: "professional", name: "Professional", price: "$800", days: "10–14 days", bestFor: "Portfolio, testimonials, up to 8 pages", popular: true },
  { id: "shop", name: "Local Shop", price: "$1,500", days: "14–21 days", bestFor: "Shopify store, up to 15 products" },
];

export const START_CHOICES: StartChoice[] = [
  { id: "shop", label: "A shop that sells online" },
  { id: "studio", label: "My studio or practice" },
  { id: "event", label: "A wedding or event" },
  { id: "org", label: "A club or nonprofit" },
  { id: "unsure", label: "Not sure yet" },
];

export const INTRO = {
  name: "Foti Ceci",
  role: "Software engineer · builds every site himself",
  /** Drop a portrait into assets/ and import it here. Until then a monogram shows. */
  portrait: undefined as string | undefined,
  replyPromise: "Replies within one business day",
};

// ---------------------------------------------------------------------------
// The three variants
// ---------------------------------------------------------------------------

export const HERO_VARIANTS: Record<HeroVariantId, HeroCopy> = {
  // A · Pride: lead with the outcome and show finished work.
  a: {
    codename: "pride",
    eyebrow: "Websites for local shops, studios & creatives",
    headline: "A website as good as your business.",
    highlight: "as good as",
    subhead:
      "I design and build it for you, start to finish. Fixed price from $500, live in 7–21 days, and you deal with me the whole way.",
    primaryLabel: "Start my website",
    secondaryLabel: "See prices",
    secondaryHref: "#prices",
    visual: "showcase",
  },

  // B · Certainty: lead with price and timeline, remove the "what's the catch".
  b: {
    codename: "certainty",
    eyebrow: "One fixed price. No surprises.",
    headline: "Your website, done for you, from $500.",
    highlight: "from $500",
    subhead:
      "Pick a package, send me your words and photos, and your site goes live in 7–21 days. The price you see is the price you pay.",
    primaryLabel: "Start my website",
    secondaryLabel: "Compare packages",
    secondaryHref: "#prices",
    visual: "packages",
  },

  // C · Person: lead with the human, and make the first step a single tap.
  c: {
    codename: "person",
    eyebrow: "Hi, I'm Foti.",
    headline: "Talk to the person who actually builds your website.",
    highlight: "actually builds",
    subhead:
      "No agency and no hand-offs. I build websites for local businesses from $500, live in 7–21 days. What are we building?",
    primaryLabel: "Start my website",
    secondaryLabel: "See my work",
    secondaryHref: "#work",
    visual: "intro",
  },
};
