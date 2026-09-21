// Shared server-side input validation for API routes. Kept intentionally
// simple: format + presence + length checks, not a full schema library.

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
const TIME_REGEX = /^\d{2}:\d{2}$/;

export function isValidEmail(value: unknown, maxLength = 254): value is string {
  return typeof value === "string" && value.length <= maxLength && EMAIL_REGEX.test(value);
}

export function isNonEmptyString(value: unknown, maxLength: number): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maxLength;
}

export function isValidDate(value: unknown): value is string {
  return typeof value === "string" && DATE_REGEX.test(value) && !Number.isNaN(Date.parse(value));
}

export function isValidTime(value: unknown): value is string {
  return typeof value === "string" && TIME_REGEX.test(value);
}

// Honeypot: a hidden form field real users never fill in. Bots that
// auto-fill every field will populate it. If it has any value, the caller
// should silently report success instead of a validation error, so bots
// don't learn to look for a different tell.
export function isHoneypotTripped(value: unknown): boolean {
  return typeof value === "string" && value.trim().length > 0;
}
