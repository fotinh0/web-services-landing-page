import type { Config } from "@react-router/dev/config";

// Static site: every page is pre-rendered to plain HTML at build time,
// then React takes over in the browser. Output goes to build/client.
export default {
  appDirectory: "src",
  ssr: false,
  // Every page, plus one entry per project in WORK (content/site.ts):
  // add "/work/<slug>" for each new project.
  prerender: [
    "/",
    "/about",
    "/work",
    "/how-it-works",
    "/faq",
    "/contact",
    "/work/ks-media-weddings",
    "/work/wedding-albania",
    "/work/portfolio",
  ],
} satisfies Config;
