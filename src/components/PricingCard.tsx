import { Link } from "react-router";
import type { PackageInfo } from "../content/site";
import { START_HREF, chooseStart } from "../lib/startProject";

/**
 * One package. On Home it's a summary: name, price and who it's for.
 * With `detailed` (the /pricing page) it adds the numbers people compare,
 * the feature list, running costs and a start button. Those five parts sit on
 * rows shared with the other cards, so the packages compare line by line.
 * A list that starts "Everything in …" shows only what this package adds.
 */
export default function PricingCard({
  pkg,
  detailed = false,
}: {
  pkg: PackageInfo;
  detailed?: boolean;
}) {
  const [first, ...rest] = pkg.includes;
  const base = first?.startsWith("Everything in ") ? first : null;
  const items = base ? rest : pkg.includes;

  return (
    <article
      id={`package-${pkg.id}`}
      className={`fc-pkg${detailed ? " fc-pkg--detail" : ""}${pkg.featured ? " is-featured" : ""}`}
    >
      <header className="fc-pkg__head">
        <h3>{pkg.name}</h3>
        <p className="fc-pkg__price">
          {pkg.price}
          <span>fixed price</span>
        </p>
        <p className="fc-pkg__for">{pkg.forLine}</p>
      </header>

      {detailed && (
        <>
          {/* The three numbers people compare, as ticks with the value in bold. */}
          <ul className="fc-pkg__list fc-pkg__stats">
            <li>
              <strong>{pkg.pages}</strong> {(pkg.sizeLabel ?? "Pages").toLowerCase()}
            </li>
            <li>
              <strong>{pkg.rounds}</strong> of changes
            </li>
            <li>
              Live in <strong>{pkg.days}</strong>
            </li>
          </ul>

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
        </>
      )}
    </article>
  );
}
