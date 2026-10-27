// All hero copy and links live here, so changing a headline never means
// touching the components.

export type PackageId = "starter" | "professional" | "shop";

export interface HeroCopy {
  eyebrow: string;
  headline: string;
  /** Words in the headline set in the italic serif. Must appear in `headline` exactly. */
  highlight?: string;
  subhead: string;
  primaryLabel: string;
  secondaryLabel: string;
  secondaryHref: string;
}

// ---------------------------------------------------------------------------
// Contact. Start buttons go to the form at #start. startHref() builds the
// pre-filled email used as the fallback link next to the form.
// ---------------------------------------------------------------------------

export const CONTACT_EMAIL = "foti.coding@gmail.com";

export function startHref(
  opts: { packageName?: string; projectType?: string } = {},
): string {
  const subject = opts.packageName
    ? `New website: ${opts.packageName} package`
    : opts.projectType
      ? `New website: ${opts.projectType}`
      : "New website for my business";

  const body = [
    "Hi Foti,",
    "",
    `Business name: `,
    `What we do: ${opts.projectType ?? ""}`,
    `Package: ${opts.packageName ?? "Starter / Professional / Local Shop / not sure"}`,
    "Ideal launch date: ",
    "Current website (if any): ",
    "",
    "Thanks!",
  ].join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// ---------------------------------------------------------------------------
// Reassurance under the buttons
// ---------------------------------------------------------------------------

export const TRUST = ["Fixed price from $500", "Live in 7–21 days", "You own everything"];

// ---------------------------------------------------------------------------
// Hero copy
// ---------------------------------------------------------------------------

export const HERO: HeroCopy = {
  eyebrow: "Websites for local shops, studios & creatives",
  headline: "A website as good as your business.",
  highlight: "as good as",
  // Price and timeline sit in TRUST right under the buttons, so the subhead doesn't repeat them.
  subhead: "I design and build it for you, start to finish, and you deal with me the whole way.",
  primaryLabel: "Start my website",
  secondaryLabel: "See prices",
  secondaryHref: "/#prices",
};
