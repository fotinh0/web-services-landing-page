import type { MetaFunction } from "react-router";
import Pricing from "../components/Pricing";
import RunningCosts from "../components/RunningCosts";
import PageCta from "../components/PageCta";
import { PRICES, SITE } from "../content/site";
import { pageMeta } from "../lib/meta";
import { useReveal } from "../lib/useReveal";

export const meta: MetaFunction = () =>
  pageMeta({
    title: `Pricing · ${SITE.name}`,
    description: PRICES.description,
    path: "/pricing",
  });

// The full comparison behind "Compare packages" on Home: the package cards,
// then running costs and notes on the tint, then the closing card.
export default function PricingPage() {
  useReveal();
  return (
    <>
      <Pricing level={1} />
      <RunningCosts />
      <PageCta />
    </>
  );
}
