import { FAQ } from "../content/site";

/** Native <details>: works without JS, keyboard accessible, the one height animation on the page. */
/** level 1 when this section is the page itself, 2 when it sits on the home page. */
export default function Faq({ level = 2 }: { level?: 1 | 2 }) {
  const Title = level === 1 ? "h1" : "h2";
  return (
    <section id="faq" className="fc-section fc-section--light" aria-labelledby="faq-title">
      <div className="fc-wrap fc-faq">
        <header className="fc-head">
          <p className="fc-eyebrow">{FAQ.eyebrow}</p>
          <Title id="faq-title">{FAQ.title}</Title>
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
