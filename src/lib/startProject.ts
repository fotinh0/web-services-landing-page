import type { PackageId } from "../components/hero/heroContent";

/**
 * Every "start" button on the page is a plain link to #start (works with no JS).
 * On click it also tells the form what the visitor picked, so it arrives pre-filled.
 */
export interface StartChoice {
  packageId?: PackageId;
  projectType?: string;
}

export const START_EVENT = "fc:start";
// "/#start" works from any page: on the home page it just scrolls.
export const START_HREF = "/#start";

export function chooseStart(choice: StartChoice = {}): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent<StartChoice>(START_EVENT, { detail: choice }));
}
