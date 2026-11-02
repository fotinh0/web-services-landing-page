import { WHY, WORK } from "../content/site";

/**
 * Why us: a drawing of a finished site on the left, the heading and reasons on
 * the right. Same tint, heading style and width as the Work section.
 */
export default function WhyUs() {
  return (
    <section id="why" className="fc-section fc-why" aria-labelledby="why-title">
      <div className="fc-wrap fc-why__grid">
        <div className="fc-why__art" aria-hidden="true">
          <WhyGraphic />
        </div>

        <div className="fc-why__text">
          <header className="fc-head">
            <p className="fc-eyebrow">{WHY.eyebrow}</p>
            <h2 id="why-title">
              <span className="fc-head__soft">{WHY.titleSoft}</span>
              <br />
              <span className="fc-head__strong">{WHY.title}</span>
            </h2>
          </header>
          {WHY.paragraphs.map((p) => (
            <p key={p} className="fc-why__p">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Decorative only: the first project in WORK (client work leads the list) on a
 * desktop browser and a phone, with a small "Hand-coded" tag. Uses the same
 * screenshots as the Work section, so it updates when those do.
 */
function WhyGraphic() {
  const item = WORK.items[0];
  return (
    <div className="fc-why__devices">
      <div className="fc-why__browser">
        <span className="fc-why__chrome">
          <i />
          <i />
          <i />
          <span>{item.host}</span>
        </span>
        <img src={item.image} alt="" width={1280} height={800} loading="lazy" decoding="async" />
      </div>
      <div className="fc-why__phone fc-phone">
        <span className="fc-phone__notch" />
        <img src={item.mobileImage} alt="" width={390} height={844} loading="lazy" decoding="async" />
      </div>
      <span className="fc-why__tag">
        <svg viewBox="0 0 24 24" width="16" height="16" focusable="false">
          <path
            d="M8 7l-5 5 5 5M16 7l5 5-5 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Hand-coded
      </span>
    </div>
  );
}
