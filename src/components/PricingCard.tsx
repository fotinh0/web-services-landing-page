import type { PackageInfo } from "../content/site";
import { START_HREF, chooseStart } from "../lib/startProject";
import { resolveHeroVariant, trackHero } from "./hero/heroExperiment";

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

      <a
        className={`fc-btn ${pkg.featured ? "fc-btn--primary" : "fc-btn--outline"}`}
        href={START_HREF}
        onClick={() => {
          trackHero("hero_package_click", resolveHeroVariant(), { package: pkg.id, where: "prices" });
          chooseStart({ packageId: pkg.id });
        }}
      >
        {pkg.cta} <span className="fc-btn__arrow" aria-hidden="true">→</span>
      </a>
    </article>
  );
}
