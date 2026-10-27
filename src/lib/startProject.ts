import type { PackageId } from "../components/hero/heroContent";

/**
 * Start buttons on the home page link to its form at #start (works with no JS).
 * On click they also tell the form what the visitor picked, so it arrives pre-filled.
 * Every other page links to /contact; pass a package or project in the query
 * string (contactHref) and the form there reads it.
 */
export interface StartChoice {
  packageId?: PackageId;
  projectType?: string;
}

export const START_EVENT = "fc:start";
// The home page's own form. Only used by sections that live on the home page.
export const START_HREF = "/#start";
export const CONTACT_HREF = "/contact";

export function contactHref(opts: { packageId?: PackageId; like?: string } = {}): string {
  const q = new URLSearchParams();
  if (opts.packageId) q.set("package", opts.packageId);
  if (opts.like) q.set("like", opts.like);
  const qs = q.toString();
  return qs ? `${CONTACT_HREF}?${qs}` : CONTACT_HREF;
}

export function chooseStart(choice: StartChoice = {}): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent<StartChoice>(START_EVENT, { detail: choice }));
}
