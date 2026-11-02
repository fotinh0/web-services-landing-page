import type { ReactElement } from "react";
import { Link } from "react-router";
import { ABOUT, SITE } from "../content/site";

type ValueIcon = "code" | "direct" | "key";

/**
 * About, in the Home sections' style: on the tint, the portrait (or monogram)
 * on the left and the two-line heading and intro on the right; then a white
 * "How I work" band with three cards, like "What you get" on Home.
 * level 1 when this section is the page itself, 2 when it sits on the home page.
 */
export default function About({ level = 2 }: { level?: 1 | 2 }) {
  const Title = level === 1 ? "h1" : "h2";
  const { values } = ABOUT;
  return (
    <>
      <section
        id="about"
        className="fc-section fc-section--light fc-section--tint"
        aria-labelledby="about-title"
      >
        <div className="fc-wrap fc-about" data-reveal>
          <figure className="fc-about__who">
            {ABOUT.portrait ? (
              <img
                className="fc-about__photo"
                src={ABOUT.portrait}
                alt={SITE.owner}
                width={480}
                height={480}
              />
            ) : (
              <span className="fc-about__photo fc-about__photo--mono" aria-hidden="true">
                <span>FC</span>
              </span>
            )}
            <figcaption>
              <strong>{SITE.owner}</strong>
              <span>Software engineer{SITE.location ? ` · ${SITE.location}` : ""}</span>
            </figcaption>
          </figure>

          <div className="fc-about__text">
            <header className="fc-head">
              <p className="fc-eyebrow">{ABOUT.eyebrow}</p>
              <Title id="about-title">
                <span className="fc-head__soft">{ABOUT.titleSoft}</span>
                <br />
                <span className="fc-head__strong">{ABOUT.title}</span>
              </Title>
            </header>
            {ABOUT.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <Link className="fc-btn fc-btn--outline fc-btn--pill" to={ABOUT.link.to}>
              {ABOUT.link.label}{" "}
              <span className="fc-btn__arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="fc-section fc-about-values" aria-labelledby="values-title">
        <div className="fc-wrap">
          <header className="fc-head">
            <p className="fc-eyebrow">{values.eyebrow}</p>
            <h2 id="values-title">
              <span className="fc-head__soft">{values.titleSoft}</span>
              <br />
              <span className="fc-head__strong">{values.title}</span>
            </h2>
          </header>
          {/* Same cards as "What you get" on Home (tinted on white). */}
          <ul className="fc-features__grid" data-reveal>
            {values.items.map((v) => (
              <li key={v.title} className="fc-feature">
                <span className="fc-feature__icon" aria-hidden="true">
                  <Icon name={v.icon as ValueIcon} />
                </span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

/** Simple line icons on a 24px grid, in the current text colour. */
function Icon({ name }: { name: ValueIcon }) {
  const shapes: Record<ValueIcon, ReactElement> = {
    // Code brackets
    code: <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />,
    // Speech bubble
    direct: <path d="M4 5h16v11H9l-5 4z" />,
    // Key
    key: (
      <>
        <circle cx="8" cy="15" r="4" />
        <path d="M11 12l9-9M17 6l3 3M15 8l2 2" />
      </>
    ),
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
