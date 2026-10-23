import type { MetaFunction } from "react-router";
import HeroSection from "../components/hero/HeroSection";
import Projects from "../components/Projects";
import WhoFor from "../components/WhoFor";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import About from "../components/About";
import Faq from "../components/Faq";
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

// Scroll order follows the objection map in the copy deck:
// promise → proof → fit → path → price → person → doubts → start.
export default function Home() {
  useReveal();

  return (
    <>
      <section id="home" aria-label="Introduction">
        <HeroSection />
      </section>
      <Projects />
      <WhoFor />
      <HowItWorks />
      <Pricing />
      <About />
      <Faq />
      <Contact />
    </>
  );
}
