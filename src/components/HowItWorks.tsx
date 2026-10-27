import type { CSSProperties } from "react";
import { HOW } from "../content/site";

/** Five dated steps. The line fills with scroll in browsers that support CSS scroll-driven animations. */
/** level 1 when this section is the page itself, 2 when it sits on the home page. */
export default function HowItWorks({ level = 2 }: { level?: 1 | 2 }) {
  const Title = level === 1 ? "h1" : "h2";
  return (
    <section id="how" className="fc-section fc-section--dark" aria-labelledby="how-title">
      <div className="fc-wrap">
        <header className="fc-head">
          <p className="fc-eyebrow">{HOW.eyebrow}</p>
          <Title id="how-title">{HOW.title}</Title>
          <p className="fc-lead">{HOW.lead}</p>
        </header>

        <div className="fc-steps" data-reveal>
          <span className="fc-steps__fill" aria-hidden="true" />
          <ol>
          {HOW.steps.map((step, i) => (
            <li key={step.title} style={{ "--i": i } as CSSProperties}>
              <p className="fc-steps__day">{step.day}</p>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
          </ol>
        </div>

        <p className="fc-after">{HOW.footnote}</p>
      </div>
    </section>
  );
}
