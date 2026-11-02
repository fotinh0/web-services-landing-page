import type { MetaFunction } from "react-router";
import HeroSection from "../components/hero/HeroSection";
import Projects from "../components/Projects";
import WhyUs from "../components/WhyUs";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import { SITE } from "../content/site";
import { pageMeta } from "../lib/meta";
import { useReveal } from "../lib/useReveal";

export const meta: MetaFunction = () =>
  pageMeta({
    title: `${SITE.name} · Websites for local businesses and creatives`,
    description: SITE.description,
    path: "/",
  });

// The short path: promise → why → what you get → proof → price → start. About, How it works and
// FAQ have their own pages.
export default function Home() {
  useReveal();

  return (
    <>
      <section id="home" aria-label="Introduction">
        <HeroSection />
      </section>
      <WhyUs />
      <Features />
      <Projects />
      <Pricing />
      <Contact />
    </>
  );
}
