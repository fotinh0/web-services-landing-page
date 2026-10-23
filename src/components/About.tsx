import { ABOUT, SITE } from "../content/site";

export default function About() {
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
          <h2 id="about-title">{ABOUT.title}</h2>
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
