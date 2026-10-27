import type { MetaFunction } from "react-router";
import Projects from "../components/Projects";
import PageCta from "../components/PageCta";
import { SITE, WORK } from "../content/site";
import { pageMeta } from "../lib/meta";
import { useReveal } from "../lib/useReveal";

export const meta: MetaFunction = () =>
  pageMeta({ title: `Work · ${SITE.name}`, description: WORK.lead, path: "/work" });

export default function WorkIndexPage() {
  useReveal();
  return (
    <>
      <Projects level={1} />
      <PageCta />
    </>
  );
}
