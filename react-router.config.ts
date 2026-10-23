import type { Config } from "@react-router/dev/config";

// Static site: every page is pre-rendered to plain HTML at build time,
// then React takes over in the browser. Output goes to build/client.
export default {
  appDirectory: "src",
  ssr: false,
  prerender: ["/", "/work/fa-euro", "/work/pci-media", "/work/wedding-albania", "/work/portfolio"],
} satisfies Config;
