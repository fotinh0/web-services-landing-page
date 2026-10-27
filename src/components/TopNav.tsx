import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo-dark.svg";
import { CONTACT_LINK, NAV_LINKS, SITE } from "../content/site";

/**
 * Sticky, always visible (Contact stays one tap away). Compacts once the page
 * scrolls past the top. The current page is marked by NavLink (aria-current="page");
 * /work/<project> keeps Work marked.
 */
export default function TopNav() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("nav-sentinel");
    if (!sentinel || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([entry]) =>
      setCompact(!entry.isIntersecting),
    );
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <div id="nav-sentinel" aria-hidden="true" />
      <header className={`fc-nav${compact ? " is-compact" : ""}`}>
        <div className="fc-nav__inner">
          <Link
            className="fc-nav__brand"
            to="/"
            aria-label={`${SITE.name}, home`}
            onClick={close}
          >
            <img src={logo} alt="" width={144} height={40} />
          </Link>

          <nav className="fc-nav__links" aria-label="Main">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <NavLink className="fc-nav__cta" to={CONTACT_LINK.to}>
            {CONTACT_LINK.label}
          </NavLink>

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

        <nav
          id="fc-mobile-menu"
          className="fc-nav__mobile"
          hidden={!open}
          aria-label="Mobile"
        >
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} onClick={close}>
              {l.label}
            </NavLink>
          ))}
          <NavLink
            className="fc-nav__cta fc-nav__cta--block"
            to={CONTACT_LINK.to}
            onClick={close}
          >
            {CONTACT_LINK.label}
          </NavLink>
        </nav>
      </header>
    </>
  );
}
