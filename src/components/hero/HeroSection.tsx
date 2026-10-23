import { useMemo } from "react";
import "./hero.css";
import {
  FACTS,
  HERO_VARIANTS,
  PROOF_LINE,
  START_CHOICES,
  type HeroVariantId,
} from "./heroContent";
import {
  applyMotionLite,
  trackHero,
  useHeroVariant,
  useHeroView,
  useInquiryTracking,
} from "./heroExperiment";
import ProjectShowcase from "./ProjectShowcase";
import PackageStack from "./PackageStack";
import IntroCard from "./IntroCard";
import { START_HREF, chooseStart } from "../../lib/startProject";

// Runs once when the module loads, so the class is set before first paint.
applyMotionLite();

/** Contour lines from the logo, generated once. Drawn in by CSS only. */
function ContourLines() {
  const paths = useMemo(() => {
    const out: string[] = [];
    const cx = 1000;
    const cy = 360;
    for (let k = 0; k < 15; k++) {
      const r0 = 46 + k * 36;
      const pts: string[] = [];
      for (let i = 0; i <= 96; i++) {
        const t = (i / 96) * Math.PI * 2;
        const r = r0 * (1 + 0.07 * Math.sin(3 * t + k * 0.37) + 0.045 * Math.sin(5 * t + k * 0.61));
        pts.push(`${(cx + r * Math.cos(t) * 1.35).toFixed(1)},${(cy + r * Math.sin(t)).toFixed(1)}`);
      }
      out.push(`M${pts.join("L")}Z`);
    }
    return out;
  }, []);

  return (
    <svg className="fc-hero__contours" viewBox="0 0 1200 720" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {paths.map((d, k) => (
        <path
          key={k}
          d={d}
          pathLength={1}
          className={k % 4 === 0 ? "is-moss" : undefined}
          style={{ animationDelay: `${k * 30}ms`, opacity: 0.55 * (1 - (k / 15) * 0.6) }}
        />
      ))}
    </svg>
  );
}

function Headline({ text, highlight }: { text: string; highlight?: string }) {
  if (!highlight || !text.includes(highlight)) return <>{text}</>;
  const [before, after] = text.split(highlight);
  return (
    <>
      {before}
      <em>{highlight}</em>
      {after}
    </>
  );
}

export default function HeroSection({ forceVariant }: { forceVariant?: HeroVariantId }) {
  const assigned = useHeroVariant();
  const variant = forceVariant ?? assigned;
  const copy = HERO_VARIANTS[variant];

  useHeroView(variant);
  useInquiryTracking(variant);

  return (
    <div className={`fc-hero fc-hero--${copy.visual}`} data-hero-variant={variant}>
      <ContourLines />

      <div className="fc-hero__inner">
        <div className="fc-hero__copy">
          <p className="fc-hero__eyebrow">{copy.eyebrow}</p>

          <h1 className="fc-hero__title">
            <Headline text={copy.headline} highlight={copy.highlight} />
          </h1>

          <p className="fc-hero__sub">{copy.subhead}</p>

          {copy.visual === "intro" && (
            <ul className="fc-choices" aria-label="What are we building?">
              {START_CHOICES.map((c) => (
                <li key={c.id}>
                  <a
                    className="fc-choice"
                    href={START_HREF}
                    onClick={() => {
                      trackHero("hero_choice_click", variant, { choice: c.id });
                      chooseStart({ projectType: c.label });
                    }}
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          )}

          <div className="fc-hero__actions">
            <a
              className="fc-btn fc-btn--primary"
              href={START_HREF}
              onClick={() => {
                trackHero("hero_primary_click", variant);
                chooseStart();
              }}
            >
              {copy.primaryLabel}
              <span className="fc-btn__arrow" aria-hidden="true">
                →
              </span>
            </a>
            <a
              className="fc-btn fc-btn--ghost"
              href={copy.secondaryHref}
              onClick={() => trackHero("hero_secondary_click", variant)}
            >
              {copy.secondaryLabel}
            </a>
          </div>

          <dl className="fc-facts">
            {FACTS.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>

          {copy.visual !== "intro" && (
            <p className="fc-proof">
              <span>{PROOF_LINE.label}</span> {PROOF_LINE.items.join(" · ")}
            </p>
          )}
        </div>

        <div className="fc-hero__visual">
          {copy.visual === "showcase" && <ProjectShowcase variant={variant} />}
          {copy.visual === "packages" && <PackageStack variant={variant} />}
          {copy.visual === "intro" && <IntroCard />}
        </div>
      </div>
    </div>
  );
}
