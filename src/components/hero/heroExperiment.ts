import { useEffect, useLayoutEffect, useState } from "react";
import { HERO_EXPERIMENT, type HeroVariantId } from "./heroContent";

const IDS: HeroVariantId[] = ["a", "b", "c"];

function isVariant(value: string | null | undefined): value is HeroVariantId {
  return !!value && (IDS as string[]).includes(value);
}

function pickWeighted(): HeroVariantId {
  const entries = IDS.map((id) => [id, Math.max(0, HERO_EXPERIMENT.weights[id])] as const);
  const total = entries.reduce((sum, [, w]) => sum + w, 0);
  if (total <= 0) return HERO_EXPERIMENT.defaultVariant;
  let roll = Math.random() * total;
  for (const [id, w] of entries) {
    roll -= w;
    if (roll < 0) return id;
  }
  return HERO_EXPERIMENT.defaultVariant;
}

/**
 * Which hero this visitor sees.
 * 1. `?hero=a|b|c` in the URL always wins (for previewing and sharing).
 * 2. If the test is off, everyone gets the default.
 * 3. If it's on, the visitor is assigned once and keeps that variant.
 */
export function resolveHeroVariant(): HeroVariantId {
  if (typeof window === "undefined") return HERO_EXPERIMENT.defaultVariant;

  const fromUrl = new URLSearchParams(window.location.search).get("hero");
  if (isVariant(fromUrl)) return fromUrl;

  if (!HERO_EXPERIMENT.enabled) return HERO_EXPERIMENT.defaultVariant;

  try {
    const saved = window.localStorage.getItem(HERO_EXPERIMENT.storageKey);
    if (isVariant(saved)) return saved;
    const assigned = pickWeighted();
    window.localStorage.setItem(HERO_EXPERIMENT.storageKey, assigned);
    return assigned;
  } catch {
    // Storage blocked (private mode etc.): still split, just not sticky.
    return pickWeighted();
  }
}

// Runs before paint in the browser, and quietly does nothing during pre-rendering.
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useHeroVariant(): HeroVariantId {
  // Pre-rendered HTML always has the default variant. In the browser the real
  // variant is resolved before the first paint, so there's no visible flicker.
  const [variant, setVariant] = useState<HeroVariantId>(HERO_EXPERIMENT.defaultVariant);
  useIsoLayoutEffect(() => {
    setVariant(resolveHeroVariant());
  }, []);
  return variant;
}

// ---------------------------------------------------------------------------
// Low-power devices: keep press/hover feedback, drop ambient motion
// (contour draw, frame rise, auto-rotation). See the motion spec.
// ---------------------------------------------------------------------------

export function isLowPower(): boolean {
  if (typeof navigator === "undefined") return false;
  const nav = navigator as Navigator & {
    connection?: { saveData?: boolean };
    deviceMemory?: number; // Chromium only, in GB
  };
  return (
    nav.connection?.saveData === true ||
    (nav.deviceMemory !== undefined && nav.deviceMemory <= 2) ||
    (nav.hardwareConcurrency ?? 8) <= 2
  );
}

/** Adds `motion-lite` to <html> once, before the hero first renders. */
export function applyMotionLite(): void {
  if (typeof document === "undefined") return;
  if (isLowPower()) document.documentElement.classList.add("motion-lite");
}

// ---------------------------------------------------------------------------
// Analytics. Works with Plausible or GA4 if either is on the page, and also
// fires a DOM event so any other tool can listen. Does nothing otherwise.
// ---------------------------------------------------------------------------

export type HeroEvent =
  | "hero_view"
  | "hero_primary_click"
  | "hero_secondary_click"
  | "hero_package_click"
  | "hero_choice_click"
  | "hero_project_click"
  | "inquiry_click"
  | "inquiry_sent";

type Props = Record<string, string>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Props }) => void;
    gtag?: (command: "event", event: string, params?: Props) => void;
  }
}

export function trackHero(event: HeroEvent, variant: HeroVariantId, extra: Props = {}): void {
  if (typeof window === "undefined") return;
  const props: Props = { hero_variant: variant, ...extra };
  try {
    window.plausible?.(event, { props });
    window.gtag?.("event", event, props);
    window.dispatchEvent(new CustomEvent("fc:analytics", { detail: { event, ...props } }));
  } catch {
    // Analytics must never break the page.
  }
}

let viewSent = false;

/** Fires `hero_view` once per page load (guarded against StrictMode's double effect in dev). */
export function useHeroView(variant: HeroVariantId): void {
  useEffect(() => {
    if (viewSent) return;
    viewSent = true;
    trackHero("hero_view", variant);
  }, [variant]);
}

/**
 * The metric the test is decided on: did this visitor start an inquiry,
 * from anywhere on the page? Counts clicks on any email link (and any
 * element marked data-inquiry) and tags them with the hero they saw.
 */
export function useInquiryTracking(variant: HeroVariantId): void {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as Element | null;
      const link = target?.closest?.('a[href^="mailto:"], [data-inquiry]');
      if (!link) return;
      const where = link.closest("[data-hero-variant]") ? "hero" : "page";
      trackHero("inquiry_click", variant, { where });
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, [variant]);
}
