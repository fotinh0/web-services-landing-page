import type { CSSProperties } from "react";
import { Link } from "react-router";
import { WORK } from "../content/site";
import { CONTACT_HREF } from "../lib/startProject";

/** Work: live client and personal sites. Links are always visible, so phone visitors can open them too. */
/** level 1 when this section is the page itself, 2 when it sits on the home page. */
export default function Projects({ level = 2 }: { level?: 1 | 2 }) {
  const Title = level === 1 ? "h1" : "h2";
  return (
    <section id="work" className="fc-section fc-section--light fc-section--tint" aria-labelledby="work-title">
      <div className="fc-wrap">
        <header className="fc-head">
          <p className="fc-eyebrow">{WORK.eyebrow}</p>
          <Title id="work-title">{WORK.title}</Title>
          <p className="fc-lead">{WORK.lead}</p>
        </header>

        <ul className="fc-work" data-reveal>
          {WORK.items.map((item, i) => (
            <li key={item.url} className="fc-work__card" style={{ "--i": i } as CSSProperties}>
              <Link
                className="fc-work__frame"
                to={`/work/${item.slug}`}
                viewTransition
                tabIndex={-1}
                aria-hidden="true"
                style={{ "--vt": `work-${item.slug}` } as CSSProperties}
              >
                <span className="fc-work__chrome">
                  <i />
                  <i />
                  <i />
                  <span>{item.host}</span>
                </span>
                <img src={item.image} alt="" width={1280} height={800} loading="lazy" decoding="async" />
              </Link>
              <div className="fc-work__body">
                <p className="fc-work__tag">{item.tag}</p>
                <h3>{item.name}</h3>
                <p>{item.body}</p>
                <p className="fc-work__links">
                  <Link className="fc-link" to={`/work/${item.slug}`} viewTransition>
                    See the project →<span className="fc-sr">: {item.name}</span>
                  </Link>
                  <a className="fc-link" href={item.url} target="_blank" rel="noopener noreferrer">
                    Visit site <span aria-hidden="true">↗</span>
                    <span className="fc-sr"> {item.host}, opens in a new tab</span>
                  </a>
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p className="fc-after">
          {WORK.after}{" "}
          <Link className="fc-link" to={CONTACT_HREF}>
            {WORK.afterLink} →
          </Link>
        </p>
      </div>
    </section>
  );
}
