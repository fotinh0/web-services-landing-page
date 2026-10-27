import type { ReactNode } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, isRouteErrorResponse, useRouteError } from "react-router";
import type { LinksFunction } from "react-router";
import "./index.css";
import "./styles/site.css";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export const links: LinksFunction = () => [
  { rel: "icon", type: "image/svg+xml", href: "/icon.svg" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@500;600;700&family=Albert+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&family=Instrument+Serif:ital@1&display=swap",
  },
];

export function Layout({ children }: { children: ReactNode }) {
  return (
    // suppressHydrationWarning: the low-power check adds a class to <html> before React hydrates.
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0F172A" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className="fc-site">
      <a className="fc-skip" href="#main">
        Skip to content
      </a>
      <div id="top" tabIndex={-1} />
      <div id="top-marker" aria-hidden="true" />
      <TopNav />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  const notFound = isRouteErrorResponse(error) && error.status === 404;
  return (
    <div className="fc-site">
      <TopNav />
      <main id="main" className="fc-section fc-section--light">
        <div className="fc-wrap fc-head">
          <p className="fc-eyebrow">{notFound ? "Page not found" : "Something went wrong"}</p>
          <h1 className="fc-page-title">
            {notFound ? "This page moved or never existed." : "This page didn't load properly."}
          </h1>
          <p className="fc-lead">
            <a className="fc-link" href="/">
              Go to the home page →
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
