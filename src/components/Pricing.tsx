import { PRICES } from "../content/site";
import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <section id="prices" className="fc-section fc-section--light" aria-labelledby="prices-title">
      <div className="fc-wrap">
        <header className="fc-head">
          <p className="fc-eyebrow">{PRICES.eyebrow}</p>
          <h2 id="prices-title">{PRICES.title}</h2>
          <p className="fc-lead">{PRICES.lead}</p>
        </header>

        <div className="fc-pkgs" data-reveal>
          {PRICES.packages.map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Running costs on the left, practical notes on the right. */}
        <div className="fc-costs">
          <div className="fc-costs__block">
            <h3>{PRICES.separately.title}</h3>
            <ul className="fc-costs__list">
              {PRICES.separately.rows.map((r) => (
                <li key={r.cost} className="fc-cost">
                  <div className="fc-cost__top">
                    <p className="fc-cost__name">
                      <strong>{r.cost}</strong>
                      <span className="fc-cost__for">{r.appliesTo}</span>
                    </p>
                    <p className="fc-cost__amount">{r.amount}</p>
                  </div>
                  <p className="fc-cost__note">{r.note}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="fc-costs__block">
            <h3>{PRICES.finePrintTitle}</h3>
            <ul className="fc-fine">
              {PRICES.finePrint.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
