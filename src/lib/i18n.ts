export const locales = ["ar", "en"] as const;

export type Locale = (typeof locales)[number];
export type PageKey = "home" | "campaigns" | "cv";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDirection(locale: Locale) {
  return locale === "ar" ? "rtl" : "ltr";
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "ar" ? "en" : "ar";
}

export function getLocalizedPath(locale: Locale, page: PageKey) {
  if (page === "home") {
    return `/${locale}`;
  }

  return `/${locale}/${page}`;
}

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://abdullahkmar.netlify.app";
