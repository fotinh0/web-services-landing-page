import type { CSSProperties } from "react";
import { WHO } from "../content/site";

export default function WhoFor() {
  return (
    <section id="who" className="fc-section fc-section--light fc-section--tint" aria-labelledby="who-title">
      <div className="fc-wrap">
        <header className="fc-head">
          <p className="fc-eyebrow">{WHO.eyebrow}</p>
          <h2 id="who-title">{WHO.title}</h2>
          <p className="fc-lead">{WHO.lead}</p>
        </header>

        <ul className="fc-who" data-reveal>
          {WHO.rows.map((row, i) => (
            <li key={row.title} className="fc-who__row" style={{ "--i": i } as CSSProperties}>
              <div className="fc-who__name">
                <h3>{row.title}</h3>
                <p className="fc-who__fits">{row.fits}</p>
              </div>
              <blockquote className="fc-who__quote">“{row.quote}”</blockquote>
              <div className="fc-who__body">
                <p>{row.body}</p>
                <a className="fc-link" href={`#package-${row.packageId}`}>
                  {row.link} →
                </a>
              </div>
            </li>
          ))}
        </ul>

        <p className="fc-after">{WHO.footnote}</p>
      </div>
    </section>
  );
}
