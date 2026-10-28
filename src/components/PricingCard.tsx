import { Link } from "react-router";
import type { PackageInfo } from "../content/site";
import { START_HREF, chooseStart } from "../lib/startProject";

/**
 * One package. Its five parts (head, stats, list, running costs, action) sit on
 * rows shared with the other cards, so the packages compare line by line.
 * A list that starts "Everything in …" shows only what this package adds.
 */
export default function PricingCard({ pkg }: { pkg: PackageInfo }) {
  const [first, ...rest] = pkg.includes;
  const base = first?.startsWith("Everything in ") ? first : null;
  const items = base ? rest : pkg.includes;

  return (
    <article id={`package-${pkg.id}`} className={`fc-pkg${pkg.featured ? " is-featured" : ""}`}>
      <header className="fc-pkg__head">
        <h3>{pkg.name}</h3>
        <p className="fc-pkg__price">
          {pkg.price}
          <span>fixed price</span>
        </p>
        <p className="fc-pkg__for">{pkg.forLine}</p>
      </header>

      <dl className="fc-pkg__stats">
        <div>
          <dt>{pkg.sizeLabel ?? "Pages"}</dt>
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

      <div className="fc-pkg__includes">
        {base && <p className="fc-pkg__base">{base}, plus:</p>}
        <ul className={`fc-pkg__list${base ? " is-plus" : ""}`}>
          {items.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>

      <p className="fc-pkg__running">
        <span>Running costs</span>
        {pkg.running}
      </p>

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
