import Image from "next/image";
import Link from "next/link";
import { campaigns, contact, getContent } from "@/lib/content";
import { getLocalizedPath, type Locale } from "@/lib/i18n";
import { CampaignGallery } from "./campaign-gallery";
import { SectionHeading } from "./section-heading";

export function HomePage({ locale }: { locale: Locale }) {
  const content = getContent(locale);

  return (
    <main>
      <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:py-28">
        <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_50%_0%,rgba(47,125,246,0.22),transparent_58%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <h1 className="text-balance text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              {content.home.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-300 sm:text-xl">
              {content.home.heroLead}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={getLocalizedPath(locale, "campaigns")}
                className="rounded-full bg-accent px-7 py-4 text-center text-sm font-black text-white shadow-lg shadow-accent/20 transition hover:bg-accent-strong"
              >
                {content.common.viewCampaigns}
              </Link>
              <Link
                href={getLocalizedPath(locale, "cv")}
                className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-black text-white transition hover:border-accent/70 hover:bg-white/5"
              >
                {content.common.downloadCv}
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {content.home.heroPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 text-center text-sm font-black text-slate-200"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[470px]">
            <div className="absolute inset-8 -z-10 rounded-full bg-accent/20 blur-3xl" />
            <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-surface p-4 shadow-2xl shadow-black/40">
              <Image
                src="/assets/images/abdullah-kmar-profile.png"
                alt="Abdullah Kmar"
                width={640}
                height={640}
                priority
                sizes="(min-width: 1024px) 470px, 90vw"
                className="aspect-square rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading title={content.home.aboutTitle} />
          <p className="text-xl leading-10 text-slate-300">{content.home.aboutBody}</p>
        </div>
      </section>

      <section id="services" className="border-y border-white/10 bg-surface/55 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title={content.home.servicesTitle} subtitle={content.home.servicesSubtitle} />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {content.services.map((service, index) => (
              <article key={service.title} className="rounded-3xl border border-white/10 bg-background/70 p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/12 font-mono text-sm font-black text-accent">
                  0{index + 1}
                </div>
                <h3 className="mt-6 text-2xl font-black text-white">{service.title}</h3>
                <p className="mt-4 leading-8 text-slate-400">{service.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {content.focus.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 text-center font-black text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title={content.home.brandsTitle} align="center" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {content.brands.map(([brand, country]) => (
              <article key={brand} className="min-h-40 rounded-3xl border border-white/10 bg-surface p-7 text-center">
                <h3 className="text-2xl font-black text-white">{brand}</h3>
                <p className="mt-3 font-mono text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                  {country}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#060912] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading title={content.home.campaignsTitle} subtitle={content.home.campaignsSubtitle} />
            <Link
              href={getLocalizedPath(locale, "campaigns")}
              className="w-fit rounded-full border border-white/15 px-6 py-3 text-sm font-black text-white transition hover:border-accent/70"
            >
              {content.common.viewCampaigns}
            </Link>
          </div>
          <CampaignGallery
            campaigns={campaigns}
            locale={locale}
            labels={{ openPreview: content.common.openPreview, close: content.common.close }}
          />
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-surface p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <h2 className="text-3xl font-black text-white sm:text-4xl">{content.home.cvTitle}</h2>
            <p className="mt-4 max-w-3xl text-lg leading-9 text-slate-400">{content.home.cvBody}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Link
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-black text-slate-950 transition hover:bg-slate-200"
              href={getLocalizedPath(locale, "cv")}
            >
              {content.nav.cv}
            </Link>
            <Link
              className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-black text-white transition hover:border-accent/70"
              href={contact.cvHref}
              target="_blank"
            >
              {content.common.downloadCv}
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-surface-strong p-7 text-center shadow-2xl shadow-black/25 sm:p-12">
          <h2 className="text-3xl font-black text-white sm:text-5xl">{content.home.contactTitle}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-9 text-slate-400">{content.home.contactBody}</p>
          <div className="mt-9 grid gap-4 md:grid-cols-2">
            <Link className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white transition hover:border-accent/70" href={`mailto:${contact.email}`}>
              <span className="block text-sm font-bold text-slate-500">{content.common.email}</span>
              <span className="mt-2 block font-black">{contact.email}</span>
            </Link>
            <Link className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white transition hover:border-accent/70" href={contact.whatsappHref} target="_blank">
              <span className="block text-sm font-bold text-slate-500">{content.common.whatsapp}</span>
              <span className="mt-2 block font-black">{contact.phone}</span>
            </Link>
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link className="rounded-full border border-white/10 px-5 py-3 text-sm font-black text-slate-200 transition hover:text-white" href={contact.facebook} target="_blank">
              Facebook
            </Link>
            <Link className="rounded-full border border-white/10 px-5 py-3 text-sm font-black text-slate-200 transition hover:text-white" href={contact.instagram} target="_blank">
              Instagram
            </Link>
            <Link className="rounded-full border border-white/10 px-5 py-3 text-sm font-black text-slate-200 transition hover:text-white" href={contact.linkedin} target="_blank">
              LinkedIn
            </Link>
            <Link className="rounded-full bg-accent px-5 py-3 text-sm font-black text-white transition hover:bg-accent-strong" href={contact.linktree} target="_blank">
              Linktree
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
