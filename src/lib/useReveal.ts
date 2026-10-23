import { useEffect } from "react";

/**
 * Section reveals from the motion spec: one shared IntersectionObserver,
 * CSS does the animation. Only elements below the fold at load are hidden,
 * and only once JS has run (html.js-motion), so no-JS visitors see everything.
 * Mark a group with data-reveal; children with style={{ "--i": n }} stagger.
 */
export function useReveal(): void {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || root.classList.contains("motion-lite") || !("IntersectionObserver" in window)) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const below = els.filter((el) => el.getBoundingClientRect().top > window.innerHeight);
    if (below.length === 0) return;

    below.forEach((el) => el.setAttribute("data-reveal-pending", ""));
    root.classList.add("js-motion");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.removeAttribute("data-reveal-pending");
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.15 },
    );
    below.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
