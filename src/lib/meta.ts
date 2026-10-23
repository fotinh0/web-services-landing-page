import { SITE } from "../content/site";

/** Title, description and link-preview tags for one page. */
export function pageMeta(opts: { title: string; description: string; path: string; image?: string }) {
  const abs = (p: string) => (SITE.url ? new URL(p, SITE.url).toString() : p);
  const image = abs(opts.image ?? "/og-image.jpg");
  return [
    { title: opts.title },
    { name: "description", content: opts.description },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE.name },
    { property: "og:title", content: opts.title },
    { property: "og:description", content: opts.description },
    { property: "og:url", content: abs(opts.path) },
    { property: "og:image", content: image },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: image },
    ...(SITE.url ? [{ tagName: "link", rel: "canonical", href: abs(opts.path) }] : []),
  ];
}
