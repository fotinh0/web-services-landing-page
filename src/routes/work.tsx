import type { CSSProperties } from "react";
import { Link, useParams } from "react-router";
import type { MetaFunction } from "react-router";
import { SITE, WORK, workBySlug } from "../content/site";
import { pageMeta } from "../lib/meta";
import { contactHref } from "../lib/startProject";

export const meta: MetaFunction = ({ params }) => {
  const item = workBySlug(params.slug);
  if (!item) return [{ title: `Not found · ${SITE.name}` }];
  return pageMeta({
    title: `${item.name} · ${SITE.name}`,
    description: item.body,
    path: `/work/${item.slug}`,
    image: item.image,
  });
};

/**
 * One project. Every fact here comes from WORK in content/site.ts.
 * The header image shares a view-transition name with its card on the home page,
 * so it morphs from the card into this page.
 */
export default function WorkPage() {
  const { slug } = useParams();
  const item = workBySlug(slug);
  if (!item) {
    return (
      <section className="fc-section fc-section--light">
        <div className="fc-wrap fc-head">
          <p className="fc-eyebrow">Project not found</p>
          <h1 className="fc-page-title">That project isn't here.</h1>
          <p className="fc-lead">
            <Link className="fc-link" to="/work">
              See all work →
            </Link>
          </p>
        </div>
      </section>
    );
  }

  const i = WORK.items.indexOf(item);
  const next = WORK.items[(i + 1) % WORK.items.length];
  const startLink = contactHref({ like: item.name });

  return (
    <>
      <section className="fc-section fc-section--dark fc-case">
        <div className="fc-wrap">
          <Link className="fc-case__back" to="/work" viewTransition>
            ← All work
          </Link>
          <div className="fc-case__head">
            <p className="fc-eyebrow">{item.tag}</p>
            <h1 className="fc-page-title">{item.name}</h1>
            <p className="fc-lead">{item.body}</p>
            <div className="fc-case__actions">
              <a
                className="fc-btn fc-btn--primary"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit {item.host} <span aria-hidden="true">↗</span>
              </a>
              <Link className="fc-btn fc-btn--ghost" to={startLink}>
                Start a project like this
              </Link>
            </div>
          </div>
          <div
            className="fc-case__frame"
            style={{ "--vt": `work-${item.slug}` } as CSSProperties}
          >
            <span className="fc-work__chrome" aria-hidden="true">
              <i />
              <i />
              <i />
              <span>{item.host}</span>
            </span>
            <img src={item.image} alt={item.alt} width={1280} height={800} />
          </div>
        </div>
      </section>

      <section className="fc-section fc-section--light">
        <div className="fc-wrap fc-case__body">
          <div>
            <h2 className="fc-case__h2">What's on the site</h2>
            <ul className="fc-case__list">
              {item.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <dl className="fc-case__facts">
            <div>
              <dt>Built with</dt>
              <dd>{item.platform}</dd>
            </div>
            <div>
              <dt>Live at</dt>
              <dd>
                <a
                  className="fc-link"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.host} <span aria-hidden="true">↗</span>
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="fc-section fc-section--tint">
        <div className="fc-wrap fc-case__next">
          <div className="flex flex-col">
            <p className="fc-eyebrow">Next project</p>
            <Link
              className="fc-case__next-link"
              to={`/work/${next.slug}`}
              viewTransition
            >
              {next.name} →
            </Link>
          </div>
          <div className="fc-case__cta">
            <p>Want something like this for your business?</p>
            <Link className="fc-btn fc-btn--primary" to={startLink}>
              Start my website{" "}
              <span className="fc-btn__arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
