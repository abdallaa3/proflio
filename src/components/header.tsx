import Link from "next/link";
import { getAlternateLocale, getLocalizedPath, type Locale, type PageKey } from "@/lib/i18n";
import { getContent } from "@/lib/content";

type HeaderProps = {
  locale: Locale;
  page: PageKey;
};

export function Header({ locale, page }: HeaderProps) {
  const content = getContent(locale);
  const alternate = getAlternateLocale(locale);
  const home = getLocalizedPath(locale, "home");

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/82 backdrop-blur-xl">
      <div className="mx-auto flex min-h-18 w-full max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href={home} dir="ltr" className="shrink-0 text-xl font-black tracking-tight text-white">
          {content.common.brand}
          <span className="text-accent">{content.common.brandSuffix}</span>
        </Link>

        <nav className="hidden items-center justify-center gap-5 text-sm font-semibold text-slate-300 lg:flex">
          <Link className="transition hover:text-white" href={`${home}#about`}>
            {content.nav.about}
          </Link>
          <Link className="transition hover:text-white" href={`${home}#services`}>
            {content.nav.services}
          </Link>
          <Link className="transition hover:text-white" href={`${home}#campaigns`}>
            {content.nav.campaigns}
          </Link>
          <Link className="transition hover:text-white" href={getLocalizedPath(locale, "cv")}>
            {content.nav.cv}
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href={getLocalizedPath(alternate, page)}
            className="rounded-full border border-white/10 px-3 py-2 text-xs font-bold text-slate-200 transition hover:-translate-y-0.5 hover:border-accent/60 hover:text-white sm:px-4"
          >
            {content.nav.language}
          </Link>
          <Link
            href={`${home}#contact`}
            className="rounded-full bg-white px-4 py-2 text-xs font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-200 sm:px-5"
          >
            {content.nav.contact}
          </Link>
        </div>
      </div>
    </header>
  );
}
