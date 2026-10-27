// Low-power devices: keep press/hover feedback, drop ambient motion
// (the hero's entrance and scroll reveals). See the motion spec.

export function isLowPower(): boolean {
  if (typeof navigator === "undefined") return false;
  const nav = navigator as Navigator & {
    connection?: { saveData?: boolean };
    deviceMemory?: number; // Chromium only, in GB
  };
  return (
    nav.connection?.saveData === true ||
    (nav.deviceMemory !== undefined && nav.deviceMemory <= 2) ||
    (nav.hardwareConcurrency ?? 8) <= 2
  );
}

/** Adds `motion-lite` to <html> once, before the hero first renders. */
export function applyMotionLite(): void {
  if (typeof document === "undefined") return;
  if (isLowPower()) document.documentElement.classList.add("motion-lite");
}
