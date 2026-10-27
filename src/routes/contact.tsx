import type { MetaFunction } from "react-router";
import Contact from "../components/Contact";
import { SITE, START } from "../content/site";
import { pageMeta } from "../lib/meta";

export const meta: MetaFunction = () =>
  pageMeta({ title: `Contact · ${SITE.name}`, description: START.body, path: "/contact" });

export default function ContactPage() {
  return <Contact level={1} />;
}
