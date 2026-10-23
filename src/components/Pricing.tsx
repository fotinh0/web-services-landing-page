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

        <div className="fc-costs">
          <h3>{PRICES.separately.title}</h3>
          <div className="fc-table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">Cost</th>
                  <th scope="col">About how much</th>
                  <th scope="col">Notes</th>
                </tr>
              </thead>
              <tbody>
                {PRICES.separately.rows.map((r) => (
                  <tr key={r.cost}>
                    <th scope="row">{r.cost}</th>
                    <td>{r.amount}</td>
                    <td>{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="fc-fine">
            {PRICES.finePrint.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
