import type { MetaFunction } from "react-router";
import Faq from "../components/Faq";
import PageCta from "../components/PageCta";
import { FAQ, SITE } from "../content/site";
import { pageMeta } from "../lib/meta";
import { useReveal } from "../lib/useReveal";

export const meta: MetaFunction = () =>
  pageMeta({
    title: `FAQ · ${SITE.name}`,
    description: `${FAQ.title} Do I own the website? What does it cost after launch? Can I update it myself?`,
    path: "/faq",
  });

export default function FaqPage() {
  useReveal();
  return (
    <>
      <Faq level={1} />
      <PageCta tint />
    </>
  );
}
