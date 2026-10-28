import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { SITE, START } from "../content/site";
import { START_EVENT, type StartChoice } from "../lib/startProject";
import { startHref } from "./hero/heroContent";

/**
 * The start form. Posts to Netlify Forms (the form is declared in public/__forms.html).
 * Without JS it still submits as a normal form. Errors appear under the field,
 * in place, when the visitor leaves it. Nothing shakes or moves.
 */

type Field =
  "name" | "email" | "business" | "package" | "launch" | "website" | "notes";
type Values = Record<Field, string>;
type Required = "name" | "email" | "business" | "package";
type Status = "idle" | "sending" | "sent" | "error";

const EMPTY: Values = {
  name: "",
  email: "",
  business: "",
  package: "",
  launch: "",
  website: "",
  notes: "",
};

const PACKAGE_OPTIONS = [
  { value: "starter", label: "Starter · $500" },
  { value: "professional", label: "Professional · $800" },
  { value: "shop", label: "Local Shop · $2,000" },
  { value: "unsure", label: "Not sure yet" },
];

const LAUNCH_OPTIONS = ["Within a month", "1–3 months", "Just exploring"];

/** Netlify detects the form from this static file (public/__forms.html) at deploy time. */
const FORMS_ENDPOINT = "/__forms.html";

function validate(field: Required, value: string): string {
  const v = value.trim();
  if (field === "email")
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : START.form.errors.email;
  return v ? "" : START.form.errors[field];
}

export default function StartForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<Required, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);

  // A start button elsewhere on the page tells the form what was picked.
  useEffect(() => {
    function onStart(e: Event) {
      const choice = (e as CustomEvent<StartChoice>).detail ?? {};
      setValues((v) => ({
        ...v,
        package: choice.packageId ?? v.package,
        notes:
          choice.projectType && !v.notes
            ? `I'm building: ${choice.projectType}`
            : v.notes,
      }));
      window.setTimeout(
        () => nameRef.current?.focus({ preventScroll: true }),
        450,
      );
    }
    window.addEventListener(START_EVENT, onStart);
    return () => window.removeEventListener(START_EVENT, onStart);
  }, []);

  // Arriving from a project page (/contact?like=foticeci.com) or a link with ?package=professional
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pkg = params.get("package");
    const like = params.get("like");
    if (!pkg && !like) return;
    setValues((v) => ({
      ...v,
      package:
        pkg && PACKAGE_OPTIONS.some((o) => o.value === pkg) ? pkg : v.package,
      notes: like && !v.notes ? `Project I liked: ${like}` : v.notes,
    }));
  }, []);

  const set =
    (field: Field) =>
    (
      e: ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      const value = e.target.value;
      setValues((v) => ({ ...v, [field]: value }));
      if (field in errors)
        setErrors((er) => ({
          ...er,
          [field]: validate(field as Required, value),
        }));
    };

  const check = (field: Required) => () =>
    setErrors((er) => ({ ...er, [field]: validate(field, values[field]) }));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const required: Required[] = ["name", "email", "business", "package"];
    const next: Partial<Record<Required, string>> = {};
    for (const f of required) next[f] = validate(f, values[f]);
    setErrors(next);
    const firstBad = required.find((f) => next[f]);
    if (firstBad) {
      document.getElementById(`start-${firstBad}`)?.focus();
      return;
    }

    setStatus("sending");
    const form = e.currentTarget;
    const bot =
      (form.elements.namedItem("bot-field") as HTMLInputElement | null)
        ?.value ?? "";
    try {
      const res = await fetch(FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "start",
          "bot-field": bot,
          ...values,
        }).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked: the address is selectable text right beside the button.
    }
  }

  const first = values.name.trim().split(/\s+/)[0] ?? "";

  if (status === "sent") {
    return (
      <div className="fc-form fc-form--sent" role="status" aria-live="polite">
        <p className="fc-form__sent-title">{START.form.successTitle(first)}</p>
        <p>{START.form.successBody(values.email.trim())}</p>
      </div>
    );
  }

  const describedBy = (f: Required) =>
    errors[f] ? `start-${f}-error` : undefined;

  return (
    <div className="fc-form">
      <form
        name="start"
        method="POST"
        action={FORMS_ENDPOINT}
        noValidate
        onSubmit={onSubmit}
      >
        <input type="hidden" name="form-name" value="start" />
        <p className="fc-hp" aria-hidden="true">
          <label>
            Leave this empty{" "}
            <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </p>

        <p className="fc-form__hint">{START.form.timeHint}</p>

        <div className="fc-field">
          <label htmlFor="start-name">Your name</label>
          <input
            ref={nameRef}
            id="start-name"
            name="name"
            autoComplete="name"
            placeholder="Maria Lopez"
            value={values.name}
            onChange={set("name")}
            onBlur={check("name")}
            aria-invalid={!!errors.name}
            aria-describedby={describedBy("name")}
          />
          {errors.name && (
            <p id="start-name-error" className="fc-field__error">
              {errors.name}
            </p>
          )}
        </div>

        <div className="fc-field">
          <label htmlFor="start-email">Email address</label>
          <input
            id="start-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="you@yourbusiness.com"
            value={values.email}
            onChange={set("email")}
            onBlur={check("email")}
            aria-invalid={!!errors.email}
            aria-describedby={
              errors.email ? "start-email-error" : "start-email-help"
            }
          />
          {errors.email ? (
            <p id="start-email-error" className="fc-field__error">
              {errors.email}
            </p>
          ) : (
            <p id="start-email-help" className="fc-field__help">
              I'll only use this to reply to you.
            </p>
          )}
        </div>

        <div className="fc-field">
          <label htmlFor="start-business">
            Your business name and what you do
          </label>
          <input
            id="start-business"
            name="business"
            autoComplete="organization"
            placeholder="Bloom & Co., a flower shop"
            value={values.business}
            onChange={set("business")}
            onBlur={check("business")}
            aria-invalid={!!errors.business}
            aria-describedby={describedBy("business")}
          />
          {errors.business && (
            <p id="start-business-error" className="fc-field__error">
              {errors.business}
            </p>
          )}
        </div>

        <div className="fc-field">
          <label htmlFor="start-package">Which package fits your needs?</label>
          <select
            id="start-package"
            name="package"
            value={values.package}
            onChange={set("package")}
            onBlur={check("package")}
            aria-invalid={!!errors.package}
            aria-describedby={
              errors.package ? "start-package-error" : "start-package-help"
            }
          >
            <option value="" disabled>
              Choose one
            </option>
            {PACKAGE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {errors.package ? (
            <p id="start-package-error" className="fc-field__error">
              {errors.package}
            </p>
          ) : (
            <p id="start-package-help" className="fc-field__help">
              Not sure is fine. We'll pick together.
            </p>
          )}
        </div>

        <div className="fc-field">
          <label htmlFor="start-launch">
            When would you ideally like to launch?{" "}
            <span className="fc-optional">Optional</span>
          </label>
          <select
            id="start-launch"
            name="launch"
            value={values.launch}
            onChange={set("launch")}
          >
            <option value="">No date yet</option>
            {LAUNCH_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>

        <div className="fc-field">
          <label htmlFor="start-website">
            Current website, if you have one{" "}
            <span className="fc-optional">Optional</span>
          </label>
          <input
            id="start-website"
            name="website"
            autoComplete="url"
            placeholder="yourbusiness.com"
            value={values.website}
            onChange={set("website")}
          />
        </div>

        <div className="fc-field">
          <label htmlFor="start-notes">
            Anything else I should know?{" "}
            <span className="fc-optional">Optional</span>
          </label>
          <textarea
            id="start-notes"
            name="notes"
            rows={3}
            placeholder="What you sell, a site you like, a deadline"
            value={values.notes}
            onChange={set("notes")}
          />
        </div>

        <button
          className="fc-btn fc-btn--primary fc-btn--full"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? START.form.sending : START.form.submit}
          {status !== "sending" && (
            <span className="fc-btn__arrow" aria-hidden="true">
              →
            </span>
          )}
        </button>

        <p className="fc-form__status" role="status" aria-live="polite">
          {status === "error" ? START.form.networkError : ""}
        </p>
      </form>

      <p className="fc-form__email">
        {START.emailLine}{" "}
        <a href={startHref()} className="fc-link">
          {SITE.email}
        </a>{" "}
        <button type="button" className="fc-copy" onClick={copyEmail}>
          {copied ? "Copied" : "Copy email"}
        </button>
      </p>
    </div>
  );
}
