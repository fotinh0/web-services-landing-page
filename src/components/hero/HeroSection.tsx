import { Link } from "react-router";
import "./hero.css";
import { HERO as copy } from "./heroContent";
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
      <span className="fc-hero__highlight">{highlight}</span>
      {after}
    </>
  );
}

/** Centered promise and call to action, with a curved edge into the next section. */
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

          {/* <ul className="fc-hero__trust">
            {TRUST.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul> */}
        </div>
      </div>

      {/* The bottom edge: a gentle hill in the next section's colour (--below in hero.css). */}
      <svg
        className="fc-hero__wave"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M0 74C214 122 452 30 742 50c290 20 470 66 698-14v84H0Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
