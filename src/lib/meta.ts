import { SITE } from "../content/site";

/** Title, description and link-preview tags for one page. */
export function pageMeta(opts: { title: string; description: string; path: string; image?: string }) {
  const abs = (p: string) => (SITE.url ? new URL(p, SITE.url).toString() : p);
  // Netlify serves each pre-rendered page at its folder address (/about
  // redirects to /about/), so the canonical and og:url use that final form.
  const page = abs(opts.path.endsWith("/") ? opts.path : `${opts.path}/`);
  const image = abs(opts.image ?? "/og-image.jpg");
  return [
    { title: opts.title },
    { name: "description", content: opts.description },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE.name },
    { property: "og:title", content: opts.title },
    { property: "og:description", content: opts.description },
    { property: "og:url", content: page },
    { property: "og:image", content: image },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: image },
    ...(SITE.url ? [{ tagName: "link", rel: "canonical", href: page }] : []),
  ];
}
