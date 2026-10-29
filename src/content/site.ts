// Every word on the site outside the hero lives here (hero copy: components/hero/heroContent.ts).
// Lines marked CONFIRM are claims only you can verify. Each one is written in its
// safest true form until you confirm the stronger version from the copy deck.

import weddingImg from "../../assets/hero/wedding.webp";
import portfolioImg from "../../assets/hero/portfolio.webp";
import weddingMobileImg from "../../assets/hero/wedding-mobile.webp";
import portfolioMobileImg from "../../assets/hero/portfolio-mobile.webp";
import type { PackageId } from "../components/hero/heroContent";

export const SITE = {
  name: "FC Web Services",
  owner: "Foti Ceci",
  email: "foti.coding@gmail.com",
  /** CONFIRM: your town or service area, e.g. "Queens, NY". Empty = hidden everywhere. */
  location: "",
  /** CONFIRM: your live address, e.g. "https://fcwebservices.com". Used for share images and links. */
  url: "",
  description:
    "I design and build websites for local shops, studios and creatives. Fixed price from $500, live in 7–21 days, and you own everything.",
};

/** Top nav and footer, in this order. Contact is drawn as the nav's button. */
export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/how-it-works", label: "How it works" },
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
  title: "Real projects. Real websites. Live for you to explore.",
  lead: "Every project is different. Here's a look at what I build and how I turn ideas into websites that work.",
  items: [
    {
      slug: "wedding-albania",
      name: "A wedding in Albania",
      tag: "Wedding website · Custom build",
      body: "I built my own wedding website to help guests travelling from abroad find everything they needed in one place — from the weekend schedule and travel tips to RSVPs.",
      url: "https://weddingfi.netlify.app/",
      host: "indianafoti.com",
      image: weddingImg,
      alt: "Wedding website with a couple on a seaside terrace at sunset",
      mobileImage: weddingMobileImg,
      mobileAlt: "The wedding website on a phone: names, dates and the \"We're getting married\" photo",
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
      slug: "portfolio",
      name: "foticeci.com",
      tag: "Personal portfolio · Custom build",
      body: "My personal portfolio, built to showcase my engineering work, projects, and experience working with teams around the world.",
      url: "https://foticeci.com",
      host: "foticeci.com",
      image: portfolioImg,
      alt: "Foti Ceci's portfolio: a dark page with his name, the title Frontend Engineer in green, and a See my work button",
      mobileImage: portfolioMobileImg,
      mobileAlt: "The portfolio on a phone: Foti Ceci's name, the title Frontend Engineer and a green See my work button",
      platform: "Custom build",
      features: [
        "Project showcase",
        "Smooth animations",
        "Contact form",
        "Works on every screen",
      ],
    },
  ] satisfies WorkItem[],
  after:
    "Don't see a business like yours? That's fine. Your website should fit your business, not a template. Whether you need more enquiries, easier bookings, online sales, or simply a professional online presence, we'll build around what your customers need.",
  afterLink: "Tell me about your business",
};

export function workBySlug(slug: string | undefined): WorkItem | undefined {
  return WORK.items.find((w) => w.slug === slug);
}

// ---------------------------------------------------------------------------
// How it works
// ---------------------------------------------------------------------------

export const HOW = {
  eyebrow: "How it works",
  title: "From first conversation to finished website.",
  lead: "A straightforward process, a clear price, and no guesswork. Here's what to expect at every stage.",
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
  footnote:
    "These are example stages for the Professional package, not fixed calendar dates. Your timeline starts when I've received your content and the information I need. Starter websites typically take 7–10 days, Professional websites 10–14 days, and Shopify stores 14–21 days. I'll confirm your expected launch date before work begins.",
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
  title: "Three packages. One fixed price each.",
  lead: "The price you see is what you pay me. No hidden development fees. You only pay your domain and hosting separately, or your Shopify subscription for an online store.",
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
      running: "Domain + hosting, about $40–50 a year",
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
      running: "Domain + hosting, about $40–50 a year",
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
    title: "These costs go to the service provider, not to me.",
    rows: [
      {
        cost: "Domain (yourname.com)",
        appliesTo: "All packages",
        amount: "Roughly $10–30 a year",
        note: "Your domain is registered in your name, so you retain control of it.",
      },
      {
        cost: "Hosting",
        appliesTo: "Starter · Professional",
        amount: "About $30 a year",
        note: "I'll confirm the exact amount before we start.",
      },
      {
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
  title: "You'll always know who built your site.",
  /** Drop a portrait into assets/ and import it here. Until then a monogram shows. */
  portrait: undefined as string | undefined,
  paragraphs: [
    "Hi, I'm Foti. I'm a software engineer by day, building web applications alongside teams around the world. That experience means I bring more than good design to your website. I know how to build sites that are fast, reliable, secure, and built to last.",
    "FC Web Solutions is where I bring that expertise to businesses that want a better online presence, without the agency overhead.",
    "No account managers. No middlemen. No hand-offs. You work directly with me, from our first conversation to launch.",
    // Confirmed for every project. Custom builds include access to the code repository.
    "And when your site is live, it's yours. Your domain, hosting, and account credentials stay in your name. No lock-in, no unnecessary dependency. If you ever need another developer, they can pick up where I left off.",
  ],
  link: {
    label: "See my engineering work",
    url: "https://foticeci.com",
    host: "foticeci.com",
  },
};

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------

export const FAQ = {
  eyebrow: "Questions",
  title: "Straight answers before you ask.",
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
      a: "Only your domain and hosting, paid directly to them. Shopify stores also pay Shopify's monthly plan. The numbers are listed under Prices on the home page.",
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
  title: "Tell me about your business.",
  body: "Answer a few quick questions, and I'll get back to you within one business day with a fixed price and an estimated launch date.",
  reassurance: [
    "Fixed price from $500",
    "Live in 7–21 days",
    "You own your website",
  ],
  form: {
    timeHint: "Takes about 2 minutes",
    submit: "Send my enquiry",
    sending: "Sending…",
    successTitle: (first: string) =>
      first
        ? `Thanks, ${first}. It's in my inbox.`
        : "Thanks. It's in my inbox.",
    successBody: (email: string) =>
      `I'll reply to ${email || "you"} within one business day with a price and a launch date. Nothing by then? Check spam, or email me at ${SITE.email}.`,
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
  body: "Answer a few quick questions, and within one business day, you'll receive a fixed-price quote and a target launch date. No guesswork, no obligation.",
  button: "Tell me about your project",
};

export const FOOTER = {
  line: "Websites for professionals and local businesses, built by Foti Ceci",
  credit: "© 2026 Foti Ceci",
};
