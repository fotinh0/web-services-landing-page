// All hero copy and links live here, so changing a headline never means
// touching the components.

export type PackageId = "starter" | "professional" | "shop";

export interface HeroCopy {
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

export const CONTACT_EMAIL = "support@fcwebdevelopment.com";

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
// Hero copy
// ---------------------------------------------------------------------------

export const HERO: HeroCopy = {
  headline: "A website as good as your business.",
  highlight: "as good as",
  // One line: the headline makes the promise, this says how. Keep it short.
  subhead: "Custom websites that help businesses grow and creatives stand out.",
  primaryLabel: "Start my website",
  secondaryLabel: "See prices",
  secondaryHref: "/#prices",
};
