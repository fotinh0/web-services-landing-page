import { Link } from "react-router";
import { FAQ } from "../content/site";
import { CONTACT_HREF } from "../lib/startProject";

/**
 * FAQ, in the Home sections' style: on the tint, the two-line heading and a
 * navy "Still have a question?" card on the left; the questions as white
 * cards on the right. Native <details>: works without JS, keyboard accessible.
 * level 1 when this section is the page itself, 2 when it sits on the home page.
 */
export default function Faq({ level = 2 }: { level?: 1 | 2 }) {
  const Title = level === 1 ? "h1" : "h2";
  return (
    <section
      id="faq"
      className="fc-section fc-section--light fc-section--tint"
      aria-labelledby="faq-title"
    >
      <div className="fc-wrap fc-faq">
        <div className="fc-faq__side">
          <header className="fc-head">
            <p className="fc-eyebrow">{FAQ.eyebrow}</p>
            <Title id="faq-title">
              <span className="fc-head__soft">{FAQ.titleSoft}</span>
              <br />
              <span className="fc-head__strong">{FAQ.title}</span>
            </Title>
          </header>
          <div className="fc-faq__ask">
            <h2>{FAQ.ask.title}</h2>
            <p>{FAQ.ask.body}</p>
            <Link className="fc-btn fc-btn--primary fc-btn--pill" to={CONTACT_HREF}>
              {FAQ.ask.button}{" "}
              <span className="fc-btn__arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
        <div className="fc-faq__list">
          {FAQ.items.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
