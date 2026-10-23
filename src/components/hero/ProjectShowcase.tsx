import { useEffect, useState } from "react";
import { SHOWCASE, type HeroVariantId } from "./heroContent";
import { isLowPower, trackHero } from "./heroExperiment";

const ROTATE_MS = 5500;

/** Variant A visual: real client sites in a browser frame, rotating. */
export default function ProjectShowcase({ variant }: { variant: HeroVariantId }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const lowPower = isLowPower();
    setReduced(mq.matches || lowPower);
    const onChange = () => setReduced(mq.matches || lowPower);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    const id = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        setIndex((i) => (i + 1) % SHOWCASE.length);
      }
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [paused, reduced]);

  const current = SHOWCASE[index] ?? SHOWCASE[0];

  return (
    <figure
      className="fc-showcase"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="fc-browser">
        <div className="fc-browser__chrome" aria-hidden="true">
          <i />
          <i />
          <i />
          <span>{current.host}</span>
        </div>
        <div className="fc-browser__view">
          {SHOWCASE.map((p, i) => (
            <img
              key={p.url}
              src={p.image}
              alt={i === index ? p.alt : ""}
              aria-hidden={i === index ? undefined : true}
              width={1280}
              height={800}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              className={i === index ? "is-active" : undefined}
            />
          ))}
        </div>
      </div>

      <figcaption className="fc-showcase__caption">
        <div>
          <strong>{current.name}</strong>
          <span>{current.kind}</span>
        </div>
        <a
          href={current.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackHero("hero_project_click", variant, { project: current.name })}
        >
          Visit site <span aria-hidden="true">↗</span>
        </a>
      </figcaption>

      <div className="fc-showcase__dots" role="group" aria-label="Choose a project">
        {SHOWCASE.map((p, i) => (
          <button
            key={p.url}
            type="button"
            aria-label={`Show ${p.name}`}
            aria-pressed={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </figure>
  );
}
