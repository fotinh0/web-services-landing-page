import { useEffect, useState } from "react";

/**
 * Appears after about two screens. IntersectionObserver on a marker instead of a
 * scroll listener. Jumps instantly for reduced-motion users and moves focus to
 * the top so keyboard users land there too.
 */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const marker = document.getElementById("top-marker");
    if (!marker || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([entry]) =>
      // Visible once the marker (about 1.5 screens down) has scrolled above the viewport.
      setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0),
    );
    io.observe(marker);
    return () => io.disconnect();
  }, []);

  function toTop() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    document.getElementById("top")?.focus({ preventScroll: true });
  }

  return (
    <button
      type="button"
      className={`fc-totop${visible ? " is-visible" : ""}`}
      onClick={toTop}
      aria-label="Back to top of page"
      tabIndex={visible ? 0 : -1}
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}
