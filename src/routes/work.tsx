import type { CSSProperties } from "react";
import { Link, useLocation, useParams } from "react-router";
import type { MetaFunction } from "react-router";
import PageCta from "../components/PageCta";
import { WorkTile, type WorkState } from "../components/Projects";
import { SITE, WORK, workBySlug } from "../content/site";
import { pageMeta } from "../lib/meta";
import { contactHref } from "../lib/startProject";
import { useReveal } from "../lib/useReveal";

export const meta: MetaFunction = ({ params }) => {
  const item = workBySlug(params.slug);
  if (!item) return [{ title: `Not found · ${SITE.name}` }];
  return pageMeta({
    title: `${item.name} · ${SITE.name}`,
    description: item.body,
    path: `/portfolio/${item.slug}`,
    image: item.image,
  });
};

/**
 * One project, in the Home sections' style. Every fact comes from WORK in
 * content/site.ts.
 * - White intro: the text on the left, the site on a browser and a phone on the
 *   right (the Why us drawing), waving into the tint.
 * - Tint: what's on the site as cards with navy icon circles, then a navy
 *   card with the project details.
 * - White: the other projects as Work tiles, then the closing card.
 * The browser shares a view-transition name with the project's tile, so it
 * morphs from the tile into this page.
 */
export default function WorkPage() {
  useReveal();
  const { slug } = useParams();
  const item = workBySlug(slug);
  // Back to wherever the project was opened from: Home's projects section, or
  // Portfolio (also for a direct visit, when there's no state).
  const fromHome = (useLocation().state as WorkState | null)?.back === "/";
  if (!item) {
    return (
      <section className="fc-section fc-section--light">
        <div className="fc-wrap fc-head">
          <p className="fc-eyebrow">Project not found</p>
          <h1>
            <span className="fc-head__strong">That project isn't here.</span>
          </h1>
          <p className="fc-why__p">
            <Link className="fc-link" to="/portfolio">
              See the full portfolio →
            </Link>
          </p>
        </div>
      </section>
    );
  }

  // The other projects, starting with the next one in the list.
  const i = WORK.items.indexOf(item);
  const others = [...WORK.items.slice(i + 1), ...WORK.items.slice(0, i)];
  const [category] = item.tag.split(" · ");
  const startLink = contactHref({ like: item.name });

  return (
    <>
      <section
        className="fc-section fc-section--light fc-section--wave fc-case"
        aria-labelledby="case-title"
      >
        <div className="fc-wrap">
          <Link
            className="fc-case__back"
            to={fromHome ? "/#work" : "/portfolio"}
            viewTransition
          >
            ← {fromHome ? "Home" : "Portfolio"}
          </Link>
          <div className="fc-case__grid">
            <div className="fc-case__text">
              <header className="fc-head">
                <p className="fc-eyebrow">{category}</p>
                <h1 id="case-title">
                  <span className="fc-head__strong">{item.name}</span>
                </h1>
              </header>
              <p className="fc-why__p">{item.body}</p>
              <div className="fc-case__actions">
                <a
                  className="fc-btn fc-btn--primary fc-btn--pill"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit {item.host} <span aria-hidden="true">↗</span>
                  <span className="fc-sr"> (opens in a new tab)</span>
                </a>
                <Link
                  className="fc-btn fc-btn--outline fc-btn--pill"
                  to={startLink}
                >
                  Start a project like this
                </Link>
              </div>
            </div>

            {/* The same site on a desktop browser and a phone, like Why us on Home. */}
            <div className="fc-why__devices fc-case__devices">
              <figure
                className="fc-why__browser"
                style={{ "--vt": `work-${item.slug}` } as CSSProperties}
              >
                <span className="fc-why__chrome" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <span>{item.host}</span>
                </span>
                <img
                  src={item.image}
                  alt={item.alt}
                  width={1280}
                  height={800}
                />
              </figure>
              <figure className="fc-why__phone fc-phone">
                <span className="fc-phone__notch" aria-hidden="true" />
                <img
                  src={item.mobileImage}
                  alt={item.mobileAlt}
                  width={390}
                  height={844}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <span className="fc-why__tag" aria-hidden="true">
                <Icon name="code" size={16} />
                {item.platform}
              </span>
            </div>
          </div>
        </div>
        {/* The bottom edge: a gentle wave in the next section's tint, like Home's. */}
        <svg
          className="fc-wave"
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
      </section>

      <section
        className="fc-section fc-section--light fc-section--tint fc-case-features"
        aria-labelledby="case-features-title"
      >
        <div className="fc-wrap">
          <header className="fc-head">
            <p className="fc-eyebrow">What's on the site</p>
            <h2 id="case-features-title">
              <span className="fc-head__soft">Built around</span>
              <br />
              <span className="fc-head__strong">what visitors need.</span>
            </h2>
          </header>
          {/* Same cards as "What you get" on Home, white on the tint. */}
          <ul className="fc-features__grid" data-reveal>
            {item.features.map((f) => (
              <li key={f} className="fc-feature">
                <span className="fc-feature__icon" aria-hidden="true">
                  <Icon name="check" size={22} />
                </span>
                <h3>{f}</h3>
              </li>
            ))}
          </ul>

          {/* The project details: a navy card, like "Good to know" on Pricing. */}
          <div className="fc-case__facts">
            <h2>Project details</h2>
            <dl>
              <div>
                <dt>Type</dt>
                <dd>{category}</dd>
              </div>
              <div>
                <dt>Built with</dt>
                <dd>{item.platform}</dd>
              </div>
              <div>
                <dt>Live at</dt>
                <dd>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.host} <span aria-hidden="true">↗</span>
                    <span className="fc-sr"> (opens in a new tab)</span>
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section
          className="fc-section fc-section--light fc-case-more"
          aria-labelledby="case-more-title"
        >
          <div className="fc-wrap">
            <header className="fc-head">
              <p className="fc-eyebrow">More work</p>
              <h2 id="case-more-title">
                <span className="fc-head__soft">Keep exploring.</span>
                <br />
                <span className="fc-head__strong">More projects.</span>
              </h2>
            </header>
            <ul className="fc-work fc-work--pair" data-reveal>
              {others.map((o, n) => (
                <WorkTile key={o.url} item={o} index={n} />
              ))}
            </ul>
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
          </div>
        </section>
      )}

      <PageCta />
    </>
  );
}

/** Line icons on a 24px grid, in the current text colour. */
function Icon({ name, size }: { name: "code" | "check"; size: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={name === "code" ? 2.2 : 2}
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
    >
      {name === "code" ? (
        <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
      ) : (
        <path d="M5 12.5l4.5 4.5L19 7.5" />
      )}
    </svg>
  );
}
