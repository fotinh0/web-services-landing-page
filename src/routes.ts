import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  // One page per project. Add a slug here, in WORK (content/site.ts) and in
  // react-router.config.ts's prerender list to publish a new case study.
  route("work/:slug", "routes/work.tsx"),
] satisfies RouteConfig;
