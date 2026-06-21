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
      <main className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="h-fit rounded-[2rem] border border-white/10 bg-surface p-7 lg:sticky lg:top-28">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-accent">
              {content.common.pageIntro}
            </p>
            <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">{cv.title}</h1>
            <p className="mt-5 text-lg leading-9 text-slate-300">{cv.summary}</p>
            <div className="mt-8 flex flex-col gap-3">
              <Link
                href={contact.cvHref}
                target="_blank"
                className="rounded-full bg-accent px-6 py-4 text-center text-sm font-black text-white transition hover:bg-accent-strong"
              >
                {content.common.downloadCv}
              </Link>
              <Link
                href={`mailto:${contact.email}`}
                className="rounded-full border border-white/15 px-6 py-4 text-center text-sm font-black text-white transition hover:border-accent/70"
              >
                {content.common.contactMe}
              </Link>
            </div>
          </aside>

          <div className="space-y-6">
            <section className="rounded-[2rem] border border-white/10 bg-surface p-7">
              <h2 className="text-2xl font-black text-white">{cv.experienceTitle}</h2>
              <div className="mt-6 space-y-6">
                {cv.experience.map((item) => (
                  <article key={item.role} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl font-black text-white">{item.role}</h3>
                        <p className="mt-1 text-slate-400">{item.company}</p>
                      </div>
                      <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-accent">
                        {item.period}
                      </p>
                    </div>
                    <ul className="mt-5 space-y-3 text-slate-300">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="leading-8">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <CvBlock title={cv.skillsTitle} items={cv.skills} />
              <CvBlock title={cv.toolsTitle} items={cv.tools} />
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-surface p-7">
              <h2 className="text-2xl font-black text-white">{cv.educationTitle}</h2>
              <p className="mt-4 leading-8 text-slate-300">{cv.education}</p>
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-surface p-7">
              <h2 className="text-2xl font-black text-white">{cv.contactTitle}</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Link className="rounded-2xl bg-white/[0.04] p-4 text-slate-200 transition hover:bg-white/[0.07]" href={`mailto:${contact.email}`}>
                  {contact.email}
                </Link>
                <Link className="rounded-2xl bg-white/[0.04] p-4 text-slate-200 transition hover:bg-white/[0.07]" href={contact.whatsappHref} target="_blank">
                  {contact.phone}
                </Link>
                <Link className="rounded-2xl bg-white/[0.04] p-4 text-slate-200 transition hover:bg-white/[0.07]" href={contact.linkedin} target="_blank">
                  LinkedIn
                </Link>
                <Link className="rounded-2xl bg-white/[0.04] p-4 text-slate-200 transition hover:bg-white/[0.07]" href={contact.linktree} target="_blank">
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
    <section className="rounded-[2rem] border border-white/10 bg-surface p-7">
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
