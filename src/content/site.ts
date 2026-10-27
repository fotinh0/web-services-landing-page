// Every word on the site outside the hero lives here (hero copy: components/hero/heroContent.ts).
// Lines marked CONFIRM are claims only you can verify. Each one is written in its
// safest true form until you confirm the stronger version from the copy deck.

import weddingImg from "../../assets/hero/wedding.webp";
import portfolioImg from "../../assets/hero/portfolio.webp";
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
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/how-it-works", label: "How it works" },
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
  platform: string;
  /** What's on the site. From your original project notes. */
  features: string[];
}

export const WORK = {
  eyebrow: "Recent work",
  title: "Real sites, live right now.",
  lead: "A destination wedding and my own portfolio. Each one had a different job, and both are live, so open them on your phone.",
  items: [
    {
      slug: "wedding-albania",
      name: "A wedding in Albania",
      tag: "My own project · Custom build",
      body: "My own wedding site. Guests flying in from abroad needed the weekend plan, travel tips and an RSVP in one place.",
      url: "https://weddingfi.netlify.app/",
      host: "indianafoti.com",
      image: weddingImg,
      alt: "Wedding website with a couple on a seaside terrace at sunset",
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
      tag: "My portfolio · Custom build",
      body: "Where my engineering work lives: apps and tools built with teams around the world.",
      url: "https://foticeci.com",
      host: "foticeci.com",
      image: portfolioImg,
      alt: "Dark portfolio website for software engineer Foti Ceci",
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
    "Don't see a business like yours? That's fine. Every site starts from what your customers need to do: book, order, call or find you.",
  afterLink: "Tell me what you do",
};

export function workBySlug(slug: string | undefined): WorkItem | undefined {
  return WORK.items.find((w) => w.slug === slug);
}

// ---------------------------------------------------------------------------
// How it works
// ---------------------------------------------------------------------------

export const HOW = {
  eyebrow: "How it works",
  title: "Two weeks from your content to launch.",
  lead: "You run your business. I run the project. Here's exactly what happens, and when.",
  steps: [
    {
      day: "Day 0",
      title: "A 20-minute call",
      body: "You tell me about your business and what customers need to do on the site. I send a fixed price and a launch date.",
    },
    {
      day: "Days 1–3",
      title: "You send what you have",
      body: "I send a one-page checklist: logo, photos, a few lines about you, your hours. Rough notes are fine. I'll tell you exactly what's needed.",
    },
    {
      day: "Days 4–9",
      title: "I build it",
      body: "You get a private link to watch it come together on your own phone.",
    },
    {
      day: "Day 10",
      title: "You review it",
      body: "One round of changes is included. Send them as a list, a voice note or a call.",
    },
    {
      day: "Day 14",
      title: "Launch",
      body: "I connect your domain, set you up on Google, and show you how to update it yourself.",
    },
  ],
  footnote:
    "Example timeline for the Professional package. The clock starts when I have your content. Shops on Shopify take 14–21 days because there are products to load and payments to test.",
};

// ---------------------------------------------------------------------------
// Packages
// ---------------------------------------------------------------------------

export interface PackageInfo {
  id: PackageId;
  name: string;
  price: string;
  forLine: string;
  pages: string;
  includes: string[];
  rounds: string;
  days: string;
  cta: string;
  featured?: boolean;
}

export const PRICES = {
  eyebrow: "Prices",
  title: "Three packages. One fixed price each.",
  lead: "The price you see is the price you pay me. The only other costs are your domain and hosting, listed below.",
  packages: [
    {
      id: "starter",
      name: "Starter",
      price: "$500",
      forLine: "A simple, professional home online",
      pages: "Up to 4 pages",
      includes: [
        "Works on every phone",
        "Contact form",
        "Set up on Google",
        "Links to your socials",
      ],
      rounds: "1 round of changes",
      days: "7–10 days",
      cta: "Start with Starter",
    },
    {
      id: "professional",
      name: "Professional",
      price: "$800",
      forLine: "Showing your work and winning clients",
      pages: "Up to 8 pages",
      includes: [
        "Everything in Starter",
        "Portfolio or gallery",
        "Space for client reviews",
        "Layout built to get calls and bookings",
      ],
      rounds: "1 round of changes",
      days: "10–14 days",
      cta: "Start with Professional",
      // Highlighted only. Not labelled "Most chosen" until that's true.
      featured: true,
    },
    {
      id: "shop",
      name: "Local Shop",
      price: "$1,500",
      forLine: "Selling products online",
      pages: "Shopify store, up to 15 products loaded",
      includes: [
        "Premium Shopify theme",
        "Card payments",
        "Pickup or local delivery",
        "Order confirmation emails",
        "Checkout that works on a phone",
      ],
      rounds: "2 rounds of changes",
      days: "14–21 days",
      cta: "Start my shop",
    },
  ] satisfies PackageInfo[],
  separately: {
    title: "Paid separately, to them, not to me",
    rows: [
      {
        cost: "Domain (yourname.com)",
        amount: "Roughly $10–20 a year",
        note: "Registered in your name. You keep it forever.",
      },
      {
        cost: "Hosting, Starter and Professional",
        amount: "About $30 a year",
        note: "I'll confirm the exact amount before we start.",
      },
      {
        cost: "Shopify, Local Shop",
        amount: "$39/month, or $29/month billed yearly",
        note: "Shopify Basic as of May 2026, plus Shopify's card fees on each sale.",
      },
    ],
  },
  finePrint: [
    "You send the photos, logo and details. I'll tell you exactly what's needed.",
    "The clock starts when I have your content.",
    "Need more pages, products or changes later? I'll quote it before doing any work.",
    "Not sure which package? Pick the closest one. We'll confirm it on the call.",
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
    "Hi, I'm Foti. By day I'm a software engineer. I build web apps with teams around the world, so I know what makes a site fast, secure and easy to find.",
    "FC Web Services is how I bring that to local businesses. No agency, no account manager, no hand-offs. The person you talk to on the first call is the person who builds your site.",
    // Confirmed for every project. Custom builds include access to the code repository.
    "Everything is yours. The domain, the hosting and every login are in your name from day one. If I'm ever unavailable, any web developer can pick it up.",
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
  body: "Two minutes now, and you'll have a fixed price and a launch date within one business day. No obligation.",
  reassurance: [
    "Fixed price from $500",
    "Live in 7–21 days",
    "You own everything",
  ],
  form: {
    timeHint: "Takes about 2 minutes",
    submit: "Send",
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
  body: "Two minutes now, and you'll have a fixed price and a launch date within one business day.",
  button: "Start a project",
};

export const FOOTER = {
  line: "Websites for local businesses, built by Foti Ceci",
  credit: "© 2026 Foti Ceci",
};
