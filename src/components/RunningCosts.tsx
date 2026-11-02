import type { ReactElement } from "react";
import { PRICES } from "../content/site";

type CostIcon = "domain" | "hosting" | "shop";

/**
 * /pricing, under the package cards: what's paid to providers (three white
 * cards, like "What you get") and the practical notes (a navy card, like the
 * timing card on How it works), on the tint.
 */
export default function RunningCosts() {
  const { separately, finePrintTitle, finePrint } = PRICES;
  return (
    <section
      id="running-costs"
      className="fc-section fc-section--tint fc-costs"
      aria-labelledby="costs-title"
    >
      <div className="fc-wrap">
        <header className="fc-head">
          <p className="fc-eyebrow">{separately.eyebrow}</p>
          <h2 id="costs-title">
            <span className="fc-head__soft">{separately.titleSoft}</span>
            <br />
            <span className="fc-head__strong">{separately.title}</span>
          </h2>
        </header>

        <ul className="fc-costs__grid" data-reveal>
          {separately.rows.map((r) => (
            <li key={r.cost} className="fc-cost">
              <span className="fc-cost__icon" aria-hidden="true">
                <Icon name={r.icon as CostIcon} />
              </span>
              <p className="fc-cost__for">{r.appliesTo}</p>
              <h3>{r.cost}</h3>
              <p className="fc-cost__amount">{r.amount}</p>
              <p className="fc-cost__note">{r.note}</p>
            </li>
          ))}
        </ul>

        <div className="fc-fine">
          <h3>{finePrintTitle}</h3>
          <ul>
            {finePrint.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** Simple line icons on a 24px grid, in the current text colour. */
function Icon({ name }: { name: CostIcon }) {
  const shapes: Record<CostIcon, ReactElement> = {
    // Globe
    domain: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18z" />
      </>
    ),
    // Server
    hosting: (
      <>
        <rect x="3" y="4" width="18" height="7" rx="2" />
        <rect x="3" y="13" width="18" height="7" rx="2" />
        <path d="M7 7.5h.01M7 16.5h.01" />
      </>
    ),
    // Shopping bag
    shop: (
      <>
        <path d="M5 8h14l-1 12H6z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      </>
    ),
  };
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
    >
      {shapes[name]}
    </svg>
  );
}
