import type { MetaFunction } from "react-router";
import About from "../components/About";
import PageCta from "../components/PageCta";
import { ABOUT, SITE } from "../content/site";
import { pageMeta } from "../lib/meta";
import { useReveal } from "../lib/useReveal";

export const meta: MetaFunction = () =>
  pageMeta({ title: `About · ${SITE.name}`, description: ABOUT.paragraphs[0], path: "/about" });

export default function AboutPage() {
  useReveal();
  return (
    <>
      <About level={1} />
      <PageCta />
    </>
  );
}
