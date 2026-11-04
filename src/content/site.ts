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
    "NJ & NYC Web Development & Web Design - Websites for small businesses, studios and creatives. Price starting at $500, live in 7–28 days, and you own everything.",
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
  titleSoft: "Real websites.",
  title: "Thoughtfully built.",
  // Search and link-preview text for /portfolio (the section itself shows no intro).
  description:
    "Every website has a different purpose. Here's a look at some of the businesses, brands, and ideas I've helped bring online.",
  // The /portfolio page has its own heading and intro (Home keeps the two lines above).
  page: {
    titleSoft: "Websites built",
    title: "with purpose.",
    body: "A selection of websites designed and developed for businesses, brands, and creative projects. Each one tailored to its audience, goals, and identity.",
  },
  // lead: "Every project is different. Here's a look at what I build and how I turn ideas into websites that work.",
  items: [
    {
      // Client work, so it leads the list (and gets the wide featured card).
      slug: "ks-media-weddings",
      name: "KS Media Weddings",
      // CONFIRM: "Custom build" is a guess; change it if the site runs on a platform.
      tag: "Wedding videographer · Custom build",
      body: "A professional website designed to showcase wedding films, present packages, and generate inquiries.",
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
      body: "A custom wedding website bringing schedules, travel information, RSVPs, and guest resources together in one place.",
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
        "Date countdown",
      ],
    },
    {
      slug: "foti-ceci",
      name: "Foti Ceci",
      tag: "Personal portfolio · Custom build",
      body: "A personal portfolio showcasing engineering experience, selected projects, and professional work.",
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
        "Work experience and skills",
        "Contact form",
      ],
    },
  ] satisfies WorkItem[],
  // Button under the tiles on Home, to the full Work page.
  moreLabel: "View all projects",
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
    "A clear, straightforward process that takes your website from initial consultation to launch, with defined steps and timelines along the way.",
  steps: [
    {
      day: "Day 1",
      title: "An initial consultation",
      body: "We discuss your business and goals for your website. Based on our conversation, I'll recommend a package and an estimated launch date.",
    },
    {
      day: "Days 2–4",
      title: "Gather your content",
      body: "Once the project is confirmed, I'll send you a simple checklist outlining everything needed to get started, including your logo, images, business information, and any written content. Rough notes are welcome.",
    },
    {
      day: "Days 5–10",
      title: "Design and development",
      body: "I'll design and build your website around your brand, content, and goals.",
    },
    {
      day: "Day 11",
      title: "Review and refinements",
      body: "You'll receive your completed website to review. This is your opportunity to request adjustments and provide feedback.",
    },
    {
      day: "DAY 14",
      title: "Your website goes live",
      body: "Once everything is approved, I'll connect your domain, complete the final setup, and publish your website. I'll also walk you through the essentials so you can confidently manage your website moving forward.",
    },
  ],
  // The navy card after the steps: typical time to launch per package.
  timing: {
    title: "How long it takes",
    rows: [
      { name: "Starter", days: "7–10 days" },
      { name: "Professional", days: "10–14 days" },
      { name: "Local Shop", days: "14–28 days" },
    ],
    note: "The days above are an example for the Professional package. Your timeline starts once I have your content, and I'll confirm your launch date before work begins.",
  },
};

// ---------------------------------------------------------------------------
// Why us (Home, between Work and Prices)
// ---------------------------------------------------------------------------

export const WHY = {
  eyebrow: "BUILT AROUND YOU",
  // Two lines, like Work and Prices: a softer first line, then the second in white
  // (this heading sits on the navy panel).
  titleSoft: "Built by hand.",
  title: "Built to last.",
  // Each sentence restates something promised elsewhere (About, Prices, the hero).
  paragraphs: [
    "Your website should reflect what makes your business or work different. That's why every site I build starts from scratch, designed around your brand, your goals, and the people you want to reach.",
    "You work directly with me throughout the entire process, from initial consultation to launch. Every project is built to your requirements, with transparent, fixed pricing and full ownership of your website upon completion.",
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
  subheader:
    "A website should do more than create a strong visual impression. It should clearly communicate your offering, showcase your work, and provide visitors with a straightforward way to connect with you.",
  items: [
    {
      icon: "design",
      title: "Custom design",
      body: "Unique design tailored to your brand, creating a website that reflects what makes your business or work different.",
    },
    {
      icon: "mobile",
      title: "Responsive on every device",
      body: "Consistent experience across phones, tablets, and desktops, making your website easy to use on any screen.",
    },
    {
      icon: "seo",
      title: "SEO essentials",
      body: "SEO settings configured to help search engines understand your website and make your pages easier to discover.",
    },
    {
      icon: "form",
      title: "Contact forms",
      body: "Forms that allow potential customers and clients to get in touch, with inquiries delivered directly to your inbox.",
    },
    {
      icon: "gallery",
      title: "Showcase your work",
      body: "Thoughtful layouts that present your projects, products, or portfolio and help visitors focus on what matters most.",
    },
    {
      icon: "reviews",
      title: "Build trust",
      body: "Testimonials and social proof that highlight your credibility and help visitors feel confident choosing you.",
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
    "Straightforward pricing, with everything agreed upfront. Choose the package that fits what you need.",
  // Two lines, like Work: a softer first line in slate grey, then the second in black.
  titleSoft: "Three packages.",
  title: "One fixed price each.",
  packages: [
    {
      id: "starter",
      name: "Starter",
      price: "$500",
      forLine:
        "Everything you need to establish a professional online presence.",
      pages: "Up to 4",
      includes: [
        "Custom website design",
        "Responsive layout for phones, tablets, and desktops",
        "Contact form",
        "Basic SEO and Google indexing setup",
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
        "More room to showcase your work, build trust, and turn visitors into inquiries.",
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
        "Your own online store, ready for customers to browse, order, and pay.",
      sizeLabel: "Products",
      pages: "Up to 15",
      includes: [
        "Custom Shopify store setup",
        "Up to 15 products added",
        "Card payment setup",
        "Shipping, local delivery, or pickup options",
        "Order confirmation emails",
        "Mobile-friendly shopping experience",
        "Shopify walkthrough so you can manage your store",
      ],
      rounds: "2 rounds",
      days: "14–28 days",
      running: "Domain + Shopify, from $29 a month",
      cta: "Start my shop",
    },
  ] satisfies PackageInfo[],
  separately: {
    eyebrow: "Paid separately",
    // Two lines, like the Home sections: a softer first line, then the second in black.
    titleSoft: "Running costs.",
    title: "What you'll pay separately",
    description:
      "Your website has a few ongoing costs paid directly to the service providers. These are separate from my one-time development fee.",
    rows: [
      {
        icon: "domain",
        cost: "Domain (yourname.com)",
        appliesTo: "All packages",
        amount: "Approximately $10–30 per year.",
        note: "Your domain is registered in your name, so you retain full ownership and control.",
      },
      {
        icon: "hosting",
        cost: "Website hosting",
        appliesTo: "Starter · Professional",
        amount: "$0–30 a month",
        note: "Exact cost depends on the hosting setup. I'll confirm the exact amount before we start.",
      },
      {
        icon: "shop",
        cost: "Shopify subscription",
        appliesTo: "Local Shop",
        amount: "$39/month, or $29/month billed yearly",
        note: "Shopify Basic as of May 2026, plus Shopify's card fees on each sale.",
      },
    ],
  },
  finePrintTitle: "Good to know",
  finePrint: [
    "What do I need to provide? You'll provide your logo, images, and business information. I'll send you a simple checklist so you know exactly what's needed. If you need help with the written content, we can discuss that too.",
    "When does the timeline start? Your project timeline begins once I've received the content and information needed to get started. I'll confirm your estimated launch date upfront.",
    "What if I need more? If you need additional pages, products, or revision rounds beyond your package, I'll provide a quote for the extra work before proceeding.",
    "Not sure which package is right? That's fine. Choose the closest option, and we'll discuss your needs together before confirming the scope and price.",
  ],
};

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------

export const ABOUT = {
  eyebrow: "Who you'll work with",
  // Two lines, like the Home sections: a softer first line, then the second in black.
  titleSoft: "Experienced development.",
  title: "Personal service.",
  /** Drop a portrait into assets/ and import it here. Until then a monogram shows. */
  portrait: undefined as string | undefined,
  paragraphs: [
    "Hi, I'm Foti. I'm a software engineer by day, building web applications alongside teams around the world. That experience means I bring more than good design to your website.",
    "FC Web Development is where I bring that expertise to businesses that want a better online presence, without the agency overhead.",
  ],
  link: {
    label: "See my work",
    // The Portfolio page on this site.
    to: "/portfolio",
  },
  // The white section under the intro: three cards, like "What you get" on Home.
  values: {
    eyebrow: "How I work",
    titleSoft: "One point of contact.",
    title: "From start to finish.",
    items: [
      {
        icon: "code",
        title: "Built with technical expertise",
        body: "My engineering background means your website is built with attention to performance, reliability, security, and long-term maintainability.",
      },
      {
        icon: "direct",
        title: "Direct communication",
        body: "You work directly with me throughout the project. From the initial conversation to launch, you'll know who's handling your website and where things stand.",
      },
      {
        icon: "key",
        title: "Full ownership",
        body: "Your domain, hosting and logins stay in your name. If you ever need another developer, they can pick up where I left off.",
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------

export const FAQ = {
  eyebrow: "FREQUENTLY ASKED QUESTIONS",
  // Two lines, like the Home sections: a softer first line, then the second in black.
  titleSoft: "Straight answers",
  title: "before you ask.",
  description:
    "Find answers to common questions about the process, pricing, and what to expect when working with FC Web Development.",
  ask: {
    title: "Still have a question?",
    body: "Ask me anything about your website. I'll get back to you as soon as possible.",
    button: "Ask me directly",
  },
  // Optional `list` (bullets) and `after` (a closing paragraph) follow the answer.
  items: [
    {
      q: "Do I own my website?",
      a: "Yes. Your domain and website accounts are registered in your name, so you retain control of them. Once the project is complete and paid for, you own the website and can take it with you if you ever decide to work with someone else.",
    },
    {
      q: "What's included in the price?",
      a: "Each package has a fixed price covering the features, pages, and revisions listed on the Pricing page. There are no hidden development fees. If you need anything outside the agreed scope, I'll provide a separate quote and get your approval before starting the additional work.",
    },
    {
      q: "What ongoing costs should I expect?",
      a: "Your ongoing costs depend on the type of website. Standard websites may require a domain and hosting, while Shopify stores also require a monthly subscription and payment processing fees. These costs are paid directly to the providers, not to me. You can find estimated costs on the Pricing page.",
    },
    {
      q: "What do I need to provide?",
      a: "You'll need to provide your logo, photos, business information, and any existing written content you want included. I'll send you a simple checklist outlining exactly what's needed. If you don't have professional photos or polished copy, we can discuss alternatives. Good-quality phone photos and rough notes are often enough to get started.",
    },
    {
      q: "How long does it take to build a website?",
      a: "Timelines depend on the package:",
      list: [
        "Starter: 7–10 days",
        "Professional: 10–14 days",
        "Local Shop: 14–28 days",
      ],
      after:
        "Your timeline begins once I've received the content and information needed to start. I'll confirm your estimated launch date before the project begins.",
    },
    {
      q: "How involved do I need to be during the process?",
      a: "I'll handle the design and development, but your input is important at key stages. You'll receive a private preview link to follow progress, review the design, and provide feedback. Your package also includes one or two rounds of revisions, depending on the package selected.",
    },
    {
      q: "Can I update the website myself?",
      a: "Yes, where the website's editing tools allow it. Shopify stores let you manage products, prices, orders, and other store details directly. For standard websites, the available editing options depend on the setup agreed for your project. I'll explain how everything works and walk you through the relevant tools at launch.",
    },
    {
      q: "I already have a website. Can you redesign it?",
      a: "Absolutely. I can help refresh an existing website, improve its design, or rebuild it with a new structure. Where possible, I'll retain useful content and set up redirects from old page addresses to help visitors and search engines find the right pages.",
    },
    {
      q: "Will my website appear on Google?",
      a: "Every website includes basic SEO setup, such as page titles, descriptions, and a sitemap, to help search engines discover and understand your pages. I can also help connect your website to your Google Business Profile. However, search rankings take time and depend on factors such as competition, location, and the quality of your content. No one can guarantee a first-page ranking.",
    },
    {
      q: "How does payment work?",
      a: "Payment is split into two parts. A 50% non-refundable deposit secures your project and start date, with the remaining 50% due once you've approved the website and before it goes live.",
    },
    {
      q: "What happens if I need changes after launch?",
      a: "Your included revision rounds cover changes during the project. Once the website is live, additional updates, new features, or ongoing maintenance can be discussed and quoted separately.",
    },
  ] as { q: string; a: string; list?: string[]; after?: string }[],
};

// ---------------------------------------------------------------------------
// Start (closing CTA + form)
// ---------------------------------------------------------------------------

export const START = {
  eyebrow: "Start a project",
  // Two lines, like the Home sections: a softer first line, then the second line.
  titleSoft: "Let's talk about",
  title: "your next website.",
  // Contact page only: three short rows under the intro, beside the form.
  next: {
    title: "What happens next",
    steps: [
      {
        title: "I review your inquiry",
        body: "I'll get back to you as soon as possible with a fixed price and an estimated launch date.",
      },
      {
        title: "We discuss the details",
        body: "We'll have a short 20-minute call to discuss your goals, go through the details, and make sure we're aligned before getting started.",
      },
      {
        title: "Your project gets underway",
        body: "Once everything is confirmed and your content is ready, I'll start building. You'll receive a private preview link to follow progress and provide feedback along the way.",
      },
    ],
  },
  body: [
    "Whether you're launching a new website, refreshing an existing one, or bringing a new idea to life, tell me a little about what you need.",
    "I'll get back to you within one business day with a fixed price and an estimated launch date.",
  ],
  form: {
    timeHint: "Takes about 2 minutes",
    submit: "Send my inquiry",
    sending: "Sending…",
    successTitle: (first: string) =>
      first
        ? `Thanks, ${first}. Your inquiry has been received.`
        : "Thanks. Your inquiry has been received.",
    successBody: (email: string) =>
      `I'll review your project and reply to ${email || "you"} as soon as possible with a fixed price and an estimated launch date. If you don't see my reply, please check your spam folder or contact me directly at ${SITE.email}.`,
    networkError: `That didn't send. Your answers are still here, so try again, or email me at ${SITE.email}.`,
    errors: {
      name: "Add your name so I know who I'm writing to.",
      email: "Add an email I can reply to, like you@yourbusiness.com.",
      business: "Tell me your business or project, even in a few words.",
      package: 'Pick one, or choose "Not sure yet".',
    },
  },
  emailLine: "Or email me directly:",
};

// ---------------------------------------------------------------------------
// Closing band on the inner pages (About, Work, How it works, FAQ)
// ---------------------------------------------------------------------------

export const PAGE_CTA = {
  title: "Have a project in mind?",
  body: "Whether you're starting something new or looking to improve your existing website, I'd be happy to discuss your project. Get in touch to receive a fixed price and an estimated launch date, with no obligation.",
  button: "Tell me about your project",
};

export const FOOTER = {
  line: "Websites for businesses and creatives.",
  credit: "© 2026 Foti Ceci",
};
