import { Link } from "react-router";
import "./hero.css";
import { HERO as copy, TRUST } from "./heroContent";
import { SITE } from "../../content/site";
import { applyMotionLite } from "../../lib/motion";
import { START_HREF, chooseStart } from "../../lib/startProject";

// Runs once when the module loads, so the class is set before first paint.
applyMotionLite();

function Headline({ text, highlight }: { text: string; highlight?: string }) {
  if (!highlight || !text.includes(highlight)) return <>{text}</>;
  const [before, after] = text.split(highlight);
  return (
    <>
      {before}
      <em>{highlight}</em>
      {after}
    </>
  );
}

/** Centered promise and call to action, with real sites as proof underneath. */
export default function HeroSection() {
  return (
    <div className="fc-hero">
      <div className="fc-hero__inner">
        <p className="fc-hero__eyebrow fc-hero__in">{copy.eyebrow}</p>

        <h1 className="fc-hero__title fc-hero__in">
          <Headline text={copy.headline} highlight={copy.highlight} />
        </h1>

        <p className="fc-hero__sub fc-hero__in">{copy.subhead}</p>

        <div className="fc-hero__cta fc-hero__in">
          <div className="fc-hero__actions">
            <Link
              className="fc-btn fc-btn--primary fc-btn--lg"
              to={START_HREF}
              onClick={() => chooseStart()}
            >
              {copy.primaryLabel}
              <span className="fc-btn__arrow" aria-hidden="true">
                →
              </span>
            </Link>
            <Link
              className="fc-btn fc-btn--outline fc-btn--lg"
              to={copy.secondaryHref}
            >
              {copy.secondaryLabel}
            </Link>
          </div>

          <ul className="fc-hero__trust">
            {TRUST.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p className="fc-hero__reply">
            <span className="fc-hero__pulse" aria-hidden="true" />
            {SITE.replyTime}
          </p>
        </div>
      </div>
    </div>
  );
}
