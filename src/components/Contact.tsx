import { START } from "../content/site";
import StartForm from "./StartForm";

/**
 * The start form, in one place every start button leads to.
 * On Home (level 2) it's the dark closing band. On /contact (level 1) it uses
 * the Home sections' light style: the tint, a two-line heading, a short
 * "What happens next" list, and the form as a white card.
 */
export default function Contact({ level = 2 }: { level?: 1 | 2 }) {
  const Title = level === 1 ? "h1" : "h2";
  const page = level === 1;
  return (
    <section
      id="start"
      className={`fc-section fc-start ${page ? "fc-section--tint fc-start--page" : "fc-section--dark"}`}
      aria-labelledby="start-title"
    >
      <div className="fc-wrap fc-start__grid">
        <div className="fc-start__pitch">
          <p className="fc-eyebrow">{START.eyebrow}</p>
          <Title id="start-title">
            <span className="fc-head__soft">{START.titleSoft}</span>
            <br />
            <span className="fc-head__strong">{START.title}</span>
          </Title>
          {START.body.map((p, i) => (
            <p key={i} className="fc-lead">
              {p}
            </p>
          ))}
        </div>
        <StartForm />
        {/* After the form in reading order (and on phones); beside it, under the intro, on wide screens. */}
        {page && (
          <div className="fc-next">
            <h2 className="fc-next__title">{START.next.title}</h2>
            <ol>
              {START.next.steps.map((s, i) => (
                <li key={s.title}>
                  <span className="fc-next__num" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
}
