import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { contact, getContent } from "@/lib/content";
import { isLocale, siteUrl, type Locale } from "@/lib/i18n";
import { SiteShell } from "../layout";

type PageProps = {
  params: Promise<{ locale: string }>;
};

async function getLocale(params: PageProps["params"]): Promise<Locale> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return locale;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = await getLocale(params);
  const content = getContent(locale);

  return {
    title: content.meta.cvTitle,
    description: content.meta.cvDescription,
    alternates: {
      canonical: `${siteUrl}/${locale}/cv`,
      languages: {
        ar: `${siteUrl}/ar/cv`,
        en: `${siteUrl}/en/cv`,
      },
    },
    openGraph: {
      title: content.meta.cvTitle,
      description: content.meta.cvDescription,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      url: `${siteUrl}/${locale}/cv`,
    },
  };
}

export default async function CvPage({ params }: PageProps) {
  const locale = await getLocale(params);
  const content = getContent(locale);
  const cv = content.cv;

  return (
    <SiteShell locale={locale} page="cv">
      <main className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="h-fit rounded-[1.75rem] border border-white/10 bg-surface p-7 lg:sticky lg:top-28">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-accent">
              {content.common.pageIntro}
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">{cv.title}</h1>
            <p className="mt-5 text-lg leading-9 text-slate-300">{cv.summary}</p>
            <div className="mt-8 flex flex-col gap-3">
              <Link
                href={contact.cvHref}
                target="_blank"
                className="rounded-full bg-accent px-6 py-4 text-center text-sm font-black text-white shadow-lg shadow-accent/20 transition hover:-translate-y-0.5 hover:bg-accent-strong"
              >
                {content.common.downloadCv}
              </Link>
              <Link
                href={contact.whatsappHref}
                target="_blank"
                className="rounded-full border border-white/15 px-6 py-4 text-center text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-accent/70 hover:bg-white/5"
              >
                {content.common.primaryCta}
              </Link>
            </div>
          </aside>

          <div className="space-y-6">
            <section className="rounded-[1.75rem] border border-white/10 bg-surface p-7">
              <h2 className="text-2xl font-black text-white">{cv.profileTitle}</h2>
              <p className="mt-4 leading-9 text-slate-300">{cv.summary}</p>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <CvBlock title={cv.coreSkillsTitle} items={cv.coreSkills} />
              <CvBlock title={cv.platformsTitle} items={cv.platforms} />
            </section>

            <section className="rounded-[1.75rem] border border-white/10 bg-surface p-7">
              <h2 className="text-2xl font-black text-white">{cv.highlightsTitle}</h2>
              <ul className="mt-5 grid gap-3 text-slate-300">
                {cv.highlights.map((highlight) => (
                  <li key={highlight} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 leading-8">
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <CvBlock title={cv.toolsTitle} items={cv.tools} />
              <section className="rounded-[1.75rem] border border-white/10 bg-surface p-7">
                <h2 className="text-2xl font-black text-white">{cv.downloadTitle}</h2>
                <p className="mt-4 leading-8 text-slate-300">{cv.downloadBody}</p>
                <Link
                  href={contact.cvHref}
                  target="_blank"
                  className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-200"
                >
                  {content.common.downloadCv}
                </Link>
              </section>
            </section>

            <section className="rounded-[1.75rem] border border-white/10 bg-surface p-7">
              <h2 className="text-2xl font-black text-white">{cv.contactTitle}</h2>
              <p className="mt-4 leading-8 text-slate-300">{cv.contactBody}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Link className="rounded-2xl bg-accent p-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-accent-strong" href={contact.whatsappHref} target="_blank">
                  {content.common.whatsapp}: {contact.phone}
                </Link>
                <Link className="rounded-2xl bg-white/[0.04] p-4 text-slate-200 transition hover:-translate-y-0.5 hover:bg-white/[0.07]" href={`mailto:${contact.email}`}>
                  {contact.email}
                </Link>
                <Link className="rounded-2xl bg-white/[0.04] p-4 text-slate-200 transition hover:-translate-y-0.5 hover:bg-white/[0.07]" href={contact.linkedin} target="_blank">
                  LinkedIn
                </Link>
                <Link className="rounded-2xl bg-white/[0.04] p-4 text-slate-200 transition hover:-translate-y-0.5 hover:bg-white/[0.07]" href={contact.linktree} target="_blank">
                  Linktree
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}

function CvBlock({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-surface p-7">
      <h2 className="text-2xl font-black text-white">{title}</h2>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-200">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
