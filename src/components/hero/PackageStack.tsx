import { PACKAGES, SHOWCASE, type HeroVariantId } from "./heroContent";
import { trackHero } from "./heroExperiment";
import { START_HREF, chooseStart } from "../../lib/startProject";

/** Variant B visual: the three prices as tappable work-order tickets. */
export default function PackageStack({ variant }: { variant: HeroVariantId }) {
  return (
    <div className="fc-packages">
      <ul className="fc-packages__list">
        {PACKAGES.map((pkg) => (
          <li key={pkg.id}>
            <a
              className={`fc-ticket${pkg.popular ? " is-popular" : ""}`}
              href={START_HREF}
              onClick={() => {
                trackHero("hero_package_click", variant, { package: pkg.id });
                chooseStart({ packageId: pkg.id });
              }}
            >
              <span className="fc-ticket__top">
                <span className="fc-ticket__name">{pkg.name}</span>
              </span>
              <span className="fc-ticket__price">{pkg.price}</span>
              <span className="fc-ticket__spec">
                <span>{pkg.bestFor}</span>
                <span>Live in {pkg.days}</span>
              </span>
              <span className="fc-ticket__go">
                Start with {pkg.name} <span aria-hidden="true">→</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <div className="fc-packages__work" aria-label="Recent work">
        {SHOWCASE.slice(0, 3).map((p) => (
          <img key={p.url} src={p.image} alt={p.name} width={1280} height={800} loading="lazy" decoding="async" />
        ))}
        <span>Recent sites in every package</span>
      </div>
    </div>
  );
}
