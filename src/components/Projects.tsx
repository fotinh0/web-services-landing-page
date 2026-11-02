import type { CSSProperties } from "react";
import { Link } from "react-router";
import { WORK } from "../content/site";

/** Work: one tile per project, a screenshot and a short caption. The full story is on /portfolio/<slug>. */
/** level 1 when this section is the page itself, 2 when it sits on the home page. */
export default function Projects({ level = 2 }: { level?: 1 | 2 }) {
  const Title = level === 1 ? "h1" : "h2";
  return (
    <section
      id="work"
      className="fc-section fc-section--light fc-section--tint"
      aria-labelledby="work-title"
    >
      <div className="fc-wrap">
        <header className="fc-head">
          <p className="fc-eyebrow">{WORK.eyebrow}</p>
          {level === 1 ? (
            <Title id="work-title">
              <span className="fc-head__strong">{WORK.page.title}</span>
            </Title>
          ) : (
            <Title id="work-title">
              <span className="fc-head__soft">{WORK.titleSoft}</span>
              <br />
              <span className="fc-head__strong">{WORK.title}</span>
            </Title>
          )}
          <p className="fc-why__p">{level === 1 ? WORK.page.body : WORK.description}</p>
        </header>

        <ul className="fc-work" data-reveal>
          {WORK.items.map((item, i) => (
            <li
              key={item.url}
              className="fc-work__tile"
              style={{ "--i": i } as CSSProperties}
            >
              {/* The caption below is the real link; this one is a bigger target for pointers. */}
              <Link
                className="fc-work__frame"
                to={`/portfolio/${item.slug}`}
                viewTransition
                tabIndex={-1}
                aria-hidden="true"
                style={{ "--vt": `work-${item.slug}` } as CSSProperties}
              >
                <img
                  src={item.image}
                  alt=""
                  width={1280}
                  height={800}
                  loading="lazy"
                  decoding="async"
                />
              </Link>
              <Link
                className="fc-work__caption"
                to={`/portfolio/${item.slug}`}
                viewTransition
              >
                <span>
                  {/* Category only ("Wedding videographer"); the build type is on the project page. */}
                  <span className="fc-work__tag">
                    {item.tag.split(" · ")[0]}
                  </span>
                  <h3>{item.name}</h3>
                </span>
                <span className="fc-work__go" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    focusable="false"
                  >
                    <path
                      d="M7 17 17 7M8 7h9v9"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Home only: on /portfolio the visitor is already on the projects page. */}
        {level === 2 && (
          <div className="fc-work__after">
            <Link
              className="fc-btn fc-btn--outline fc-btn--pill"
              to="/portfolio"
            >
              {WORK.moreLabel}{" "}
              <span className="fc-btn__arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
