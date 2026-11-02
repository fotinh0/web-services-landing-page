import { Link } from "react-router";
import { PRICES } from "../content/site";
import PricingCard from "./PricingCard";

/**
 * Prices. On Home (level 2): summary cards and one "Compare packages" button.
 * On /pricing (level 1): full cards, with a wave into the running costs below.
 */
export default function Pricing({ level = 2 }: { level?: 1 | 2 }) {
  const Title = level === 1 ? "h1" : "h2";
  const detailed = level === 1;
  return (
    <section
      id="prices"
      className={`fc-section fc-section--light${detailed ? " fc-section--wave" : ""}`}
      aria-labelledby="prices-title"
    >
      <div className="fc-wrap">
        <header className="fc-head">
          <p className="fc-eyebrow">{PRICES.eyebrow}</p>
          <Title id="prices-title">
            <span className="fc-head__soft">{PRICES.titleSoft}</span>
            <br />
            <span className="fc-head__strong">{PRICES.title}</span>
          </Title>
        </header>

        <div className="fc-pkgs" data-reveal>
          {PRICES.packages.map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} detailed={detailed} />
          ))}
        </div>

        {!detailed && (
          <div className="fc-pkgs__after">
            <Link className="fc-btn fc-btn--primary fc-btn--pill" to="/pricing">
              {PRICES.compareLabel}{" "}
              <span className="fc-btn__arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        )}
      </div>

      {/* /pricing: the bottom edge waves into the tinted running costs below. */}
      {detailed && (
        <svg
          className="fc-wave"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M0 74C214 122 452 30 742 50c290 20 470 66 698-14v84H0Z" fill="currentColor" />
        </svg>
      )}
    </section>
  );
}
