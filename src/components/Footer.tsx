import { Link } from "react-router";
import logo from "../../assets/logo-dark.svg";
import { CONTACT_LINK, FOOTER, NAV_LINKS, SITE } from "../content/site";

/** Footer, with the signature detail: the page's real load time. */
export default function Footer() {
  return (
    <footer className="fc-footer">
      <div className="fc-wrap fc-footer__grid">
        <div>
          <img
            className="fc-footer__logo"
            src={logo}
            alt={SITE.name}
            width={158}
            height={44}
          />
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
      </div>
    </footer>
  );
}
