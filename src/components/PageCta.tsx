import { Link } from "react-router";
import { PAGE_CTA } from "../content/site";
import { CONTACT_HREF } from "../lib/startProject";

/** Closing call to action on the inner pages: one line, one button to the form. */
export default function PageCta({ tint = false }: { tint?: boolean }) {
  return (
    <section
      className={`fc-section fc-section--light fc-cta-band${tint ? " fc-section--tint" : ""}`}
      aria-labelledby="cta-title"
    >
      <div className="fc-wrap fc-cta-band__inner">
        <div>
          <h2 id="cta-title">{PAGE_CTA.title}</h2>
          <p>{PAGE_CTA.body}</p>
        </div>
        <Link className="fc-btn fc-btn--primary" to={CONTACT_HREF}>
          {PAGE_CTA.button} <span className="fc-btn__arrow" aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
