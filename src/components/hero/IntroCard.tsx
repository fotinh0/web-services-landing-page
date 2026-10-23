import { INTRO, SHOWCASE } from "./heroContent";

/** Variant C visual: the person, how fast he replies, and what he's built. */
export default function IntroCard() {
  return (
    <aside className="fc-intro" aria-label={`About ${INTRO.name}`}>
      <div className="fc-intro__who">
        {INTRO.portrait ? (
          <img className="fc-intro__photo" src={INTRO.portrait} alt={INTRO.name} width={88} height={88} />
        ) : (
          <span className="fc-intro__photo fc-intro__photo--mono" aria-hidden="true">
            FC
          </span>
        )}
        <div>
          <strong>{INTRO.name}</strong>
          <span>{INTRO.role}</span>
        </div>
      </div>

      <p className="fc-intro__note">
        “Tell me what you run and when you'd like to launch. I'll reply with a plan, a fixed price and a date.”
      </p>

      <p className="fc-intro__reply">
        <span className="fc-dot" aria-hidden="true" />
        {INTRO.replyPromise}
      </p>

      <div className="fc-intro__work">
        <span className="fc-intro__label">Recent</span>
        <ul>
          {SHOWCASE.slice(0, 3).map((p) => (
            <li key={p.url}>
              <img src={p.image} alt="" width={1280} height={800} loading="lazy" decoding="async" />
              <span>{p.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
