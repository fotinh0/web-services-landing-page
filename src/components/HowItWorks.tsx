import type { CSSProperties } from "react";
import { HOW } from "../content/site";

/**
 * How it works, in the Home sections' style: eyebrow and two-line heading on
 * the tint, then one full-width row per step (number, label and title on the
 * left, description on the right), and a navy row with typical launch times.
 * level 1 when this section is the page itself, 2 when it sits on the home page.
 */
export default function HowItWorks({ level = 2 }: { level?: 1 | 2 }) {
  const Title = level === 1 ? "h1" : "h2";
  return (
    <section
      id="how"
      className="fc-section fc-section--light fc-section--tint"
      aria-labelledby="how-title"
    >
      <div className="fc-wrap">
        <header className="fc-head">
          <p className="fc-eyebrow">{HOW.eyebrow}</p>
          <Title id="how-title">
            <span className="fc-head__soft">{HOW.titleSoft}</span>
            <br />
            <span className="fc-head__strong">{HOW.title}</span>
          </Title>
          <p className="fc-lead">{HOW.description}</p>
        </header>

        <ol className="fc-how" data-reveal>
          {HOW.steps.map((step, i) => (
            <li
              key={step.title}
              className="fc-how__step"
              style={{ "--i": i } as CSSProperties}
            >
              <span className="fc-how__num" aria-hidden="true">
                {i + 1}
              </span>
              <div className="fc-how__lead">
                {/* "Day 0 — Let's talk" shows as "Day 0"; the title says the rest. */}
                <p className="fc-how__day">{step.day.split(" — ")[0]}</p>
                <h3>{step.title}</h3>
              </div>
              <p className="fc-how__body">{step.body}</p>
            </li>
          ))}
          <li className="fc-how__timing">
            <div className="fc-how__lead">
              <h3>{HOW.timing.title}</h3>
              <p>{HOW.timing.note}</p>
            </div>
            <dl>
              {HOW.timing.rows.map((r) => (
                <div key={r.name}>
                  <dt>{r.name}</dt>
                  <dd>{r.days}</dd>
                </div>
              ))}
            </dl>
          </li>
        </ol>
      </div>
    </section>
  );
}
