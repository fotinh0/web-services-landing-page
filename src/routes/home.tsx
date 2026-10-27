import type { MetaFunction } from "react-router";
import HeroSection from "../components/hero/HeroSection";
import Projects from "../components/Projects";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import { SITE } from "../content/site";
import { pageMeta } from "../lib/meta";
import { useReveal } from "../lib/useReveal";

export const meta: MetaFunction = () =>
  pageMeta({
    title: `${SITE.name} · Websites for local businesses`,
    description: SITE.description,
    path: "/",
  });

// The short path: promise → proof → price → start. About, How it works and
// FAQ have their own pages.
export default function Home() {
  useReveal();

  return (
    <>
      <section id="home" aria-label="Introduction">
        <HeroSection />
      </section>
      <Projects />
      <Pricing />
      <Contact />
    </>
  );
}
