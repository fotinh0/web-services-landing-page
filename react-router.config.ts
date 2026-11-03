import type { Config } from "@react-router/dev/config";

// Static site: every page is pre-rendered to plain HTML at build time,
// then React takes over in the browser. Output goes to build/client.
export default {
  appDirectory: "src",
  ssr: false,
  // Every page, plus one entry per project in WORK (content/site.ts):
  // add "/portfolio/<slug>" for each new project (and to public/sitemap.xml).
  prerender: [
    "/",
    "/about",
    "/portfolio",
    "/pricing",
    "/how-it-works",
    "/faq",
    "/contact",
    "/portfolio/ks-media-weddings",
    "/portfolio/wedding-albania",
    "/portfolio/foti-ceci",
  ],
} satisfies Config;
