import { useEffect, useState } from "react";
import { Link } from "react-router";
import logo from "../../assets/icon.svg";
import { NAV_LINKS, SITE } from "../content/site";
import { START_HREF, chooseStart } from "../lib/startProject";

/**
 * Sticky, always visible (Start stays one tap away). Compacts once the page
 * scrolls past the top, and marks the section in view.
 * IntersectionObserver only, never a scroll listener.
 */
export default function TopNav() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sentinel = document.getElementById("nav-sentinel");
    if (!sentinel || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([entry]) => setCompact(!entry.isIntersecting));
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    // "home" is observed too, so scrolling back to the top clears the highlight.
    const sections = ["home", ...NAV_LINKS.map((l) => l.id)].map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <div id="nav-sentinel" aria-hidden="true" />
      <header className={`fc-nav${compact ? " is-compact" : ""}`}>
        <div className="fc-nav__inner">
          <Link className="fc-nav__brand" to="/" aria-label={`${SITE.name}, home`} onClick={close}>
            <img src={logo} alt="" width={36} height={36} />
            <span>{SITE.name}</span>
          </Link>

          <nav className="fc-nav__links" aria-label="Main">
            {NAV_LINKS.map((l) => (
              <a key={l.id} href={`/#${l.id}`} aria-current={active === l.id ? "true" : undefined}>
                {l.label}
              </a>
            ))}
          </nav>

          <a className="fc-nav__cta" href={START_HREF} onClick={() => chooseStart()}>
            Start a project
          </a>

          <button
            type="button"
            className="fc-nav__toggle"
            aria-expanded={open}
            aria-controls="fc-mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span aria-hidden="true" className={open ? "is-open" : undefined} />
          </button>
        </div>

        <nav id="fc-mobile-menu" className="fc-nav__mobile" hidden={!open} aria-label="Mobile">
          {NAV_LINKS.map((l) => (
            <a key={l.id} href={`/#${l.id}`} onClick={close}>
              {l.label}
            </a>
          ))}
          <a
            className="fc-nav__cta fc-nav__cta--block"
            href={START_HREF}
            onClick={() => {
              close();
              chooseStart();
            }}
          >
            Start a project
          </a>
        </nav>
      </header>
    </>
  );
}
