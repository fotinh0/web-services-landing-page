import { Link } from "react-router";
import type { PackageInfo } from "../content/site";
import { START_HREF, chooseStart } from "../lib/startProject";

/** One package as a work order: mono spec lines, one action, no hover scaling. */
export default function PricingCard({ pkg }: { pkg: PackageInfo }) {
  return (
    <article id={`package-${pkg.id}`} className={`fc-pkg${pkg.featured ? " is-featured" : ""}`}>
      <header className="fc-pkg__head">
        <h3>{pkg.name}</h3>
        <p className="fc-pkg__price">{pkg.price}</p>
        <p className="fc-pkg__for">{pkg.forLine}</p>
      </header>

      <dl className="fc-pkg__spec">
        <div>
          <dt>Pages</dt>
          <dd>{pkg.pages}</dd>
        </div>
        <div>
          <dt>Changes</dt>
          <dd>{pkg.rounds}</dd>
        </div>
        <div>
          <dt>Live in</dt>
          <dd>{pkg.days}</dd>
        </div>
      </dl>

      <ul className="fc-pkg__list">
        {pkg.includes.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>

      <Link
        className={`fc-btn ${pkg.featured ? "fc-btn--primary" : "fc-btn--outline"}`}
        to={START_HREF}
        onClick={() => chooseStart({ packageId: pkg.id })}
      >
        {pkg.cta} <span className="fc-btn__arrow" aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
