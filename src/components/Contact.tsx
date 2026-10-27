import { SITE, START } from "../content/site";
import StartForm from "./StartForm";

/** The closing call to action and the start form, in one place every start button leads to. */
/** level 1 when this section is the page itself, 2 when it sits on the home page. */
export default function Contact({ level = 2 }: { level?: 1 | 2 }) {
  const Title = level === 1 ? "h1" : "h2";
  return (
    <section id="start" className="fc-section fc-section--dark fc-start" aria-labelledby="start-title">
      <div className="fc-wrap fc-start__grid">
        <div className="fc-start__pitch">
          <p className="fc-eyebrow">{START.eyebrow}</p>
          <Title id="start-title">{START.title}</Title>
          <p className="fc-lead">{START.body}</p>
          <ul className="fc-start__facts">
            {START.reassurance.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <p className="fc-start__reply">
            <span className="fc-dot" aria-hidden="true" />
            {SITE.replyTime}
          </p>
        </div>
        <StartForm />
      </div>
    </section>
  );
}
