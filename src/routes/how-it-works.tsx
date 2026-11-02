import type { MetaFunction } from "react-router";
import HowItWorks from "../components/HowItWorks";
import { HOW, SITE } from "../content/site";
import { pageMeta } from "../lib/meta";
import { useReveal } from "../lib/useReveal";

export const meta: MetaFunction = () =>
  pageMeta({
    title: `How it works · ${SITE.name}`,
    description: HOW.description,
    path: "/how-it-works",
  });

export default function HowItWorksPage() {
  useReveal();
  return (
    <>
      <HowItWorks level={1} />
    </>
  );
}
