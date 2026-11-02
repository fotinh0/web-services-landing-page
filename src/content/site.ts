// Every word on the site outside the hero lives here (hero copy: components/hero/heroContent.ts).
// Lines marked CONFIRM are claims only you can verify. Each one is written in its
// safest true form until you confirm the stronger version from the copy deck.

import weddingImg from "../../assets/hero/wedding.webp";
import portfolioImg from "../../assets/hero/portfolio.webp";
import weddingMobileImg from "../../assets/hero/wedding-mobile.webp";
import portfolioMobileImg from "../../assets/hero/portfolio-mobile.webp";
import ksMediaImg from "../../assets/hero/ks-media.webp";
import ksMediaMobileImg from "../../assets/hero/ks-media-mobile.webp";
import type { PackageId } from "../components/hero/heroContent";

export const SITE = {
  name: "FC Web Development",
  owner: "Foti Ceci",
  email: "support@fcwebdevelopment.com",
  location: "New York, NY",
  url: "https://fcwebdevelopment.com",
  description:
    "I design and build websites for local shops, studios and creatives. Fixed price starting at $500, live in 7–21 days, and you own everything.",
};

/** Top nav and footer, in this order. Contact is drawn as the nav's button. */
export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
];
export const CONTACT_LINK = { to: "/contact", label: "Contact" };

// ---------------------------------------------------------------------------
// Work
// ---------------------------------------------------------------------------

export interface WorkItem {
  slug: string;
  name: string;
  tag: string;
  body: string;
  url: string;
  host: string;
  image: string;
  alt: string;
  /** The same site on a phone (390×844 screenshot), for the project page's device preview. */
  mobileImage: string;
  mobileAlt: string;
  platform: string;
  /** What's on the site. From your original project notes. */
  features: string[];
}

export const WORK = {
  eyebrow: "Recent work",
  // Two lines: a softer first line in slate grey, then the second in black.
  titleSoft: "Real projects.",
  title: "Real websites.",
  // Search and link-preview text for /portfolio (the section itself shows no intro).
  description:
    "Every project is different. Here's a look at what I build and how I turn ideas into websites that work.",
  // lead: "Every project is different. Here's a look at what I build and how I turn ideas into websites that work.",
  items: [
    {
      // Client work, so it leads the list (and gets the wide featured card).
      slug: "ks-media-weddings",
      name: "KS Media Weddings",
      // CONFIRM: "Custom build" is a guess; change it if the site runs on a platform.
      tag: "Wedding videographer · Custom build",
      body: "A website for a Los Angeles wedding videographer. The films lead, the packages and process are clear, and couples can check availability in one short form.",
      url: "https://ks-media-weddings.com/",
      host: "ks-media-weddings.com",
      image: ksMediaImg,
      alt: "KS Media Weddings homepage: a couple dancing at sunset behind the headline Films that let you feel it all again",
      mobileImage: ksMediaMobileImg,
      mobileAlt:
        "KS Media Weddings on a phone: the sunset dance film with Watch the films and Inquire buttons",
      platform: "Custom build",
      features: [
        "Full-screen film in the hero",
        "Featured films gallery",
        "Three packages, compared side by side",
        "Four-step process",
        "Kind words from couples",
        "Inquiry form with date, venue and guest count",
      ],
    },
    {
      slug: "wedding-albania",
      name: "Indiana & Foti",
      tag: "Wedding website · Custom build",
      body: "A wedding website designed to help guests travelling from abroad find everything they needed in one place, from the weekend schedule and travel tips to RSVPs.",
      url: "https://weddingfi.netlify.app/",
      host: "indianafoti.com",
      image: weddingImg,
      alt: "Indiana & Foti wedding website: a black-and-white and a colour photo of the couple by the sea, behind the script headline We're getting married",
      mobileImage: weddingMobileImg,
      mobileAlt:
        "The wedding website on a phone: the couple's names, the July 31 – August 1, 2026 date strip and We're getting married over a black-and-white photo",
      platform: "Custom build",
      features: [
        "Weekend itinerary",
        "Travel and stay info",
        "RSVP form",
        "Photo gallery",
        "Guest FAQs",
        "Works on every phone",
      ],
    },
    {
      slug: "foti-ceci",
      name: "Foti Ceci",
      tag: "Personal portfolio · Custom build",
      body: "A personal portfolio built to showcase engineering work and personal projects.",
      url: "https://foticeci.com",
      host: "foticeci.com",
      image: portfolioImg,
      alt: "Foti Ceci's portfolio: a dark page with his name, the title Frontend Engineer in green, and a See my work button",
      mobileImage: portfolioMobileImg,
      mobileAlt:
        "The portfolio on a phone: Foti Ceci's name, the title Frontend Engineer and a green See my work button",
      platform: "Custom build",
      features: [
        "Project showcase",
        "Smooth animations",
        "Contact form",
        "Works on every screen",
      ],
    },
  ] satisfies WorkItem[],
  // Button under the tiles on Home, to the full Work page.
  moreLabel: "View projects",
};

export function workBySlug(slug: string | undefined): WorkItem | undefined {
  return WORK.items.find((w) => w.slug === slug);
}

// ---------------------------------------------------------------------------
// How it works
// ---------------------------------------------------------------------------

export const HOW = {
  eyebrow: "How it works",
  // Two lines, like the Home sections: a softer first line, then the second in black.
  titleSoft: "From first conversation",
  title: "to finished website.",
  // lead: "A straightforward process, a clear price, and no guesswork. Here's what to expect at every stage.",
  // Search and link-preview text for /how-it-works (the page itself shows no intro).
  description:
    "A straightforward process, a clear price, and no guesswork. Here's what to expect at every stage, from the first call to launch.",
  steps: [
    {
      day: "Day 0 — Let's talk",
      title: "A 30-minute call",
      body: "We'll talk about your business, your goals, and what your website needs to do. I'll recommend the right package and confirm your price and expected launch date.",
    },
    {
      day: "Days 1–3 — Get the essentials together",
      title: "I'll guide you through it",
      body: "I'll send you a simple checklist covering your logo, photos, business details, and anything else I need. Rough notes are fine — you don't need to have everything perfectly written.",
    },
    {
      day: "Days 4–9 — I build your website",
      title: "Your site starts taking shape",
      body: "I'll design and build your website around your business and your customers. You'll get a private preview link so you can follow the progress and see how it looks on your phone.",
    },
    {
      day: "Review — Make it yours",
      title: "You tell me what needs adjusting",
      body: "Once the site is ready, you'll review it and send me your feedback. Your package includes one or two rounds of revisions, depending on which option you choose.",
    },
    {
      day: "Launch — Ready for the world",
      title: "Your website goes live",
      body: "Once you've approved everything, I'll connect your domain, take care of the agreed Google setup, and walk you through how to manage your website.",
    },
  ],
  // The navy card after the steps: typical time to launch per package.
  timing: {
    title: "How long it takes",
    rows: [
      { name: "Starter", days: "7–10 days" },
      { name: "Professional", days: "10–14 days" },
      { name: "Local Shop", days: "14–21 days" },
    ],
    note: "The days above are an example for Professional. Your timeline starts once I have your content, and I'll confirm your launch date before work begins.",
  },
};

// ---------------------------------------------------------------------------
// Why us (Home, between Work and Prices)
// ---------------------------------------------------------------------------

export const WHY = {
  eyebrow: "Why us",
  // Two lines, like Work and Prices: a softer first line, then the second in white
  // (this heading sits on the navy panel).
  titleSoft: "Built by hand.",
  title: "Built to last.",
  // Each sentence restates something promised elsewhere (About, Prices, the hero).
  paragraphs: [
    "Your website is often the first thing a customer sees. Every site I build is designed for your business and coded by hand, so it loads fast, works on every phone and looks like no one else's.",
    "You work directly with me from the first call to launch, for one fixed price agreed before we start. And once it's live, it's yours: the domain, hosting and code stay in your name, with no lock-in.",
  ],
};

// ---------------------------------------------------------------------------
// Features (Home, between Why us and Work)
// ---------------------------------------------------------------------------

export type FeatureIcon =
  "design" | "mobile" | "seo" | "form" | "gallery" | "reviews";

export const FEATURES = {
  eyebrow: "What you get",
  // Two lines, like the other sections: a softer first line, then the second in black.
  titleSoft: "Everything you need.",
  title: "Nothing you don't.",
  items: [
    {
      icon: "design",
      title: "Custom design",
      body: "Designed around your brand and your customers. Never a template.",
    },
    {
      icon: "mobile",
      title: "Mobile responsive",
      body: "Looks right and works smoothly on every phone, tablet and desktop.",
    },
    {
      icon: "seo",
      title: "SEO setup",
      body: "Page titles, descriptions and Google indexing set up, so customers can find you.",
    },
    {
      icon: "form",
      title: "Contact form",
      body: "Customers reach you in a few taps, and every message lands in your inbox.",
    },
    {
      icon: "gallery",
      title: "Portfolio gallery",
      body: "Show your best work in a clean, fast-loading image gallery.",
    },
    {
      icon: "reviews",
      title: "Testimonials",
      body: "Kind words from your customers, placed where they build the most trust.",
    },
  ] satisfies { icon: FeatureIcon; title: string; body: string }[],
};

// ---------------------------------------------------------------------------
// Packages
// ---------------------------------------------------------------------------

export interface PackageInfo {
  id: PackageId;
  name: string;
  price: string;
  forLine: string;
  /** The size stat's label. Defaults to "Pages". */
  sizeLabel?: string;
  pages: string;
  /** Start with "Everything in <package>" to show the rest as additions ("+"). */
  includes: string[];
  /** What it costs to keep running, summed from PRICES.separately. Keep in step with it. */
  running: string;
  rounds: string;
  days: string;
  cta: string;
  featured?: boolean;
}

export const PRICES = {
  eyebrow: "Prices",
  // Button under the summary cards on Home, to the full comparison on /pricing.
  compareLabel: "Compare packages",
  // Search and link-preview text for /pricing.
  description:
    "Three website packages at one fixed price each: Starter $500, Professional $800, Local Shop $2,000. Compare pages, changes, launch times and running costs.",
  // Two lines, like Work: a softer first line in slate grey, then the second in black.
  titleSoft: "Three packages.",
  title: "One fixed price each.",
  packages: [
    {
      id: "starter",
      name: "Starter",
      price: "$500",
      forLine:
        "A professional website that gives your business a strong first impression.",
      pages: "Up to 4",
      includes: [
        "Responsive design for phones, tablets, and desktops",
        "Contact form",
        "Basic Google indexing and SEO setup",
        "Social media links",
      ],
      rounds: "1 round",
      days: "7–10 days",
      running: "Domain about $10–30 a year, hosting $0–30 a month",
      cta: "Start with Starter",
    },
    {
      id: "professional",
      name: "Professional",
      price: "$800",
      forLine:
        "A website built to showcase your work, build trust, and turn visitors into enquiries.",
      pages: "Up to 8",
      includes: [
        "Everything in Starter",
        "Portfolio or image gallery",
        "Conversion-focused calls to action",
        "Booking integration or enhanced contact forms",
      ],
      rounds: "2 rounds",
      days: "10–14 days",
      running: "Domain about $10–30 a year, hosting $0–30 a month",
      cta: "Start with Professional",
      // Highlighted only. Not labelled "Most chosen" until that's true.
      featured: true,
    },
    {
      id: "shop",
      name: "Local Shop",
      price: "$2,000",
      forLine:
        "An online store that makes it easy for customers to browse, order, and pay.",
      sizeLabel: "Products",
      pages: "Up to 15",
      includes: [
        "Custom Shopify Store",
        "Card payment setup",
        "Integrated Shipping",
        "Shopify Tutorial Walkthrough",
        "Fully Editable In Shopify CMS",
      ],
      rounds: "2 rounds",
      days: "14–21 days",
      running: "Domain + Shopify, from $29 a month",
      cta: "Start my shop",
    },
  ] satisfies PackageInfo[],
  separately: {
    eyebrow: "Paid separately",
    // Two lines, like the Home sections: a softer first line, then the second in black.
    titleSoft: "Running costs.",
    title: "Paid to the provider, not to me.",
    rows: [
      {
        icon: "domain",
        cost: "Domain (yourname.com)",
        appliesTo: "All packages",
        amount: "Roughly $10–30 a year",
        note: "Your domain is registered in your name, so you retain control of it.",
      },
      {
        icon: "hosting",
        cost: "Hosting",
        appliesTo: "Starter · Professional",
        amount: "$0–30 a month",
        note: "I'll confirm the exact amount before we start.",
      },
      {
        icon: "shop",
        cost: "Shopify plan",
        appliesTo: "Local Shop",
        amount: "$39/month, or $29/month billed yearly",
        note: "Shopify Basic as of May 2026, plus Shopify's card fees on each sale.",
      },
    ],
  },
  finePrintTitle: "Good to know",
  finePrint: [
    "You provide the content. Send me your photos, logo, and business details. I'll tell you exactly what I need.",
    "The timeline starts when your content is ready. That way, you know what to expect from the start.",
    "Need more later? If you need extra pages, products, or revisions, I'll quote the additional work before doing anything.",
    "Not sure which package fits? Choose the closest match. We'll confirm the right option together on a call.",
  ],
};

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------

export const ABOUT = {
  eyebrow: "Who you'll work with",
  // Two lines, like the Home sections: a softer first line, then the second in black.
  titleSoft: "You'll always know",
  title: "who built your site.",
  /** Drop a portrait into assets/ and import it here. Until then a monogram shows. */
  portrait: undefined as string | undefined,
  paragraphs: [
    "Hi, I'm Foti. I'm a software engineer by day, building web applications alongside teams around the world. That experience means I bring more than good design to your website.",
    "FC Web Development is where I bring that expertise to businesses that want a better online presence, without the agency overhead.",
  ],
  link: {
    label: "See my engineering work",
    url: "https://foticeci.com",
    host: "foticeci.com",
  },
  // The white section under the intro: three cards, like "What you get" on Home.
  values: {
    eyebrow: "How I work",
    titleSoft: "One person.",
    title: "Start to finish.",
    items: [
      {
        icon: "code",
        title: "Built by an engineer",
        body: "I know how to build sites that are fast, reliable, secure, and built to last.",
      },
      {
        icon: "direct",
        title: "No middlemen",
        body: "No account managers, no hand-offs. You work directly with me, from our first conversation to launch.",
      },
      // Confirmed for every project. Custom builds include access to the code repository.
      {
        icon: "key",
        title: "It's yours",
        body: "Your domain, hosting and logins stay in your name. No lock-in. If you ever need another developer, they can pick up where I left off.",
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------

export const FAQ = {
  eyebrow: "Questions",
  // Two lines, like the Home sections: a softer first line, then the second in black.
  titleSoft: "Straight answers",
  title: "before you ask.",
  // The navy card under the heading.
  ask: {
    title: "Still have a question?",
    body: "Ask me anything about your website. I'll get back to you as soon as possible.",
    button: "Ask me directly",
  },
  items: [
    {
      q: "Do I own the website?",
      a: "Yes. Your domain, hosting and every login are in your name. If we ever stop working together, you take everything with you.",
    },
    {
      q: "Can I update it myself?",
      a: "Yes. Hours, photos, prices and products are things you can change yourself. I'll show you how at launch.",
    },
    {
      q: "What does it cost after launch?",
      a: "Only your domain and hosting, paid directly to them. Shopify stores also pay Shopify's monthly plan. The numbers are listed on the Pricing page.",
    },
    {
      q: "I don't have good photos or know what to write. Is that a problem?",
      a: "No. I'll send a simple checklist and tell you exactly what's needed. Phone photos in good light work well for most businesses.",
    },
    {
      q: "What if I don't like the first version?",
      a: "Every package includes a round of changes (two for shops), and you can watch the site come together before review, so there are no big surprises.",
    },
    {
      q: "I already have a website. Can you redo it?",
      a: "Yes. I'll move over what's worth keeping and set up redirects, so people with old links still find you.",
    },
    {
      q: "Will people find me on Google?",
      a: "Every site is set up so Google can read it: page titles, descriptions, a sitemap and your Google Business Profile link. Ranking takes time and depends on your area, and anyone who promises page one is guessing.",
    },
    {
      q: "How do I pay?",
      a: "Half up front to book your start date, and the other half when you've approved the site, before it goes live.",
    },
  ],
};

// ---------------------------------------------------------------------------
// Start (closing CTA + form)
// ---------------------------------------------------------------------------

export const START = {
  eyebrow: "Start a project",
  // Two lines, like the Home sections: a softer first line, then the second line.
  titleSoft: "Tell me about",
  title: "your business.",
  // Contact page only: three short rows under the intro, beside the form.
  next: {
    title: "What happens next",
    steps: [
      {
        title: "I reply as soon as possible",
        body: "With a fixed price and an estimated launch date.",
      },
      {
        title: "We have a short call",
        body: "About 30 minutes to talk through your business and confirm the details.",
      },
      {
        title: "I start building",
        body: "As soon as I have your content, with a preview link so you can follow along.",
      },
    ],
  },
  body: "Answer a few quick questions, and I'll get back to you as soon as possible with a fixed price and an estimated launch date.",
  form: {
    timeHint: "Takes about 2 minutes",
    submit: "Send my enquiry",
    sending: "Sending…",
    successTitle: (first: string) =>
      first
        ? `Thanks, ${first}. It's in my inbox.`
        : "Thanks. It's in my inbox.",
    successBody: (email: string) =>
      `I'll reply to ${email || "you"} as soon as possible with a price and a launch date. Not seeing a reply? Check your spam folder, or email me at ${SITE.email}.`,
    networkError: `That didn't send. Your answers are still here, so try again, or email me at ${SITE.email}.`,
    errors: {
      name: "Add your name so I know who I'm writing to.",
      email: "Add an email I can reply to, like you@yourbusiness.com.",
      business:
        "Tell me your business name and what you do, even in a few words.",
      package: 'Pick one, or choose "Not sure yet".',
    },
  },
  emailLine: "Or email me directly:",
};

// ---------------------------------------------------------------------------
// Closing band on the inner pages (About, Work, How it works, FAQ)
// ---------------------------------------------------------------------------

export const PAGE_CTA = {
  title: "Tell me about your business.",
  body: "Answer a few quick questions, and I'll get back to you as soon as possible with a fixed-price quote and a target launch date. No guesswork, no obligation.",
  button: "Tell me about your project",
};

export const FOOTER = {
  line: "Websites for professionals and local businesses, built by Foti Ceci",
  credit: "© 2026 Foti Ceci",
};
