import { FAQ } from "../content/site";

/** Native <details>: works without JS, keyboard accessible, the one height animation on the page. */
export default function Faq() {
  return (
    <section id="faq" className="fc-section fc-section--light" aria-labelledby="faq-title">
      <div className="fc-wrap fc-faq">
        <header className="fc-head">
          <p className="fc-eyebrow">{FAQ.eyebrow}</p>
          <h2 id="faq-title">{FAQ.title}</h2>
        </header>
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
