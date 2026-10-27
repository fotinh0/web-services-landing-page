import { useEffect, useState } from "react";
import { Link } from "react-router";
import logo from "../../assets/logo-dark.svg";
import { CONTACT_LINK, FOOTER, NAV_LINKS, SITE } from "../content/site";

/** Footer, with the signature detail: the page's real load time. */
export default function Footer() {
  const [loadTime, setLoadTime] = useState<string>("");

  useEffect(() => {
    function measure() {
      const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
      const ms = nav && nav.loadEventEnd > 0 ? nav.loadEventEnd : performance.now();
      setLoadTime((ms / 1000).toFixed(1));
    }
    if (document.readyState === "complete") {
      // loadEventEnd is filled in just after the load event finishes.
      const id = window.setTimeout(measure, 0);
      return () => window.clearTimeout(id);
    }
    window.addEventListener("load", measure, { once: true });
    return () => window.removeEventListener("load", measure);
  }, []);

  return (
    <footer className="fc-footer">
      <div className="fc-wrap fc-footer__grid">
        <div>
          <img className="fc-footer__logo" src={logo} alt={SITE.name} width={158} height={44} />
          <p>{FOOTER.line}</p>
          <p>
            {SITE.location ? `${SITE.location} · ` : ""}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
        </div>
        <nav aria-label="Footer" className="fc-footer__links">
          {NAV_LINKS.map((l) => (
            <Link key={l.to} to={l.to}>
              {l.label}
            </Link>
          ))}
          <Link to={CONTACT_LINK.to}>{CONTACT_LINK.label}</Link>
        </nav>
      </div>
      <div className="fc-wrap fc-footer__base">
        <p>{FOOTER.credit}</p>
        {loadTime && <p className="fc-footer__speed">This page loaded in {loadTime}s</p>}
      </div>
    </footer>
  );
}
