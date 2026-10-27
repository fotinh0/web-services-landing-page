import { ABOUT, SITE } from "../content/site";

/** level 1 when this section is the page itself, 2 when it sits on the home page. */
export default function About({ level = 2 }: { level?: 1 | 2 }) {
  const Title = level === 1 ? "h1" : "h2";
  return (
    <section id="about" className="fc-section fc-section--light fc-section--tint" aria-labelledby="about-title">
      <div className="fc-wrap fc-about" data-reveal>
        <figure className="fc-about__who">
          {ABOUT.portrait ? (
            <img className="fc-about__photo" src={ABOUT.portrait} alt={SITE.owner} width={320} height={320} />
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
          <p className="fc-eyebrow">{ABOUT.eyebrow}</p>
          <Title id="about-title">{ABOUT.title}</Title>
          {ABOUT.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <a className="fc-link" href={ABOUT.link.url} target="_blank" rel="noopener noreferrer">
            {ABOUT.link.label} at {ABOUT.link.host} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
