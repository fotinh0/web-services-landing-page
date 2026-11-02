import type { ReactElement } from "react";
import { FEATURES, type FeatureIcon } from "../content/site";

/** What you get: six key features as small tinted cards on a white band, between Why us and Work. */
export default function Features() {
  return (
    <section id="features" className="fc-section fc-features fc-section--wave" aria-labelledby="features-title">
      <div className="fc-wrap fc-features__wrap">
        <header className="fc-head">
          <p className="fc-eyebrow">{FEATURES.eyebrow}</p>
          <h2 id="features-title">
            <span className="fc-head__soft">{FEATURES.titleSoft}</span>
            <br />
            <span className="fc-head__strong">{FEATURES.title}</span>
          </h2>
        </header>

        <ul className="fc-features__grid" data-reveal>
          {FEATURES.items.map((f) => (
            <li key={f.title} className="fc-feature">
              <span className="fc-feature__icon" aria-hidden="true">
                <Icon name={f.icon} />
              </span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* The bottom edge: a gentle wave in Work's tint, like the hero's. */}
      <svg
        className="fc-wave"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M0 74C214 122 452 30 742 50c290 20 470 66 698-14v84H0Z" fill="currentColor" />
      </svg>
    </section>
  );
}

/** Simple line icons, drawn on a 24px grid in the current text colour. */
function Icon({ name }: { name: FeatureIcon }) {
  const shapes: Record<FeatureIcon, ReactElement> = {
    // Pen nib
    design: (
      <>
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.6 7.6" />
        <circle cx="11" cy="11" r="2" />
      </>
    ),
    // Phone
    mobile: (
      <>
        <rect x="6" y="2" width="12" height="20" rx="2.5" />
        <path d="M11 18h2" />
      </>
    ),
    // Magnifying glass
    seo: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-4-4" />
      </>
    ),
    // Envelope
    form: (
      <>
        <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
    // Picture
    gallery: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="M21 15l-4-4L6 21" />
      </>
    ),
    // Star
    reviews: <path d="M12 2.5l2.9 5.9 6.6 1-4.8 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5-4.8-4.6 6.6-1z" />,
  };
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
    >
      {shapes[name]}
    </svg>
  );
}
