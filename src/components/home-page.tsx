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
      <section className="relative overflow-hidden px-5 py-16 sm:px-8 lg:py-22">
        <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_50%_0%,rgba(47,125,246,0.22),transparent_58%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <h1 className="max-w-4xl text-balance text-4xl font-black leading-[1.18] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {content.home.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-300">
              {content.home.heroLead}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={getLocalizedPath(locale, "campaigns")}
                className="rounded-full bg-accent px-7 py-4 text-center text-sm font-black text-white shadow-lg shadow-accent/20 transition hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-accent/30"
              >
                {content.common.viewCampaigns}
              </Link>
              <Link
                href={getLocalizedPath(locale, "cv")}
                className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-accent/70 hover:bg-white/5"
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

      <section id="about" className="scroll-mt-24 px-5 py-14 sm:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading title={content.home.aboutTitle} />
          <p className="text-xl leading-10 text-slate-300">{content.home.aboutBody}</p>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 border-y border-white/10 bg-surface/55 px-5 py-14 sm:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title={content.home.servicesTitle} subtitle={content.home.servicesSubtitle} />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {content.services.map((service, index) => (
              <article key={service.title} className="rounded-[1.5rem] border border-white/10 bg-background/70 p-6 transition hover:-translate-y-1 hover:border-accent/35 hover:bg-background">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/12 font-mono text-sm font-black text-accent">
                  0{index + 1}
                </div>
                <h3 className="mt-5 text-xl font-black text-white">{service.title}</h3>
                <p className="mt-3 leading-8 text-slate-400">{service.body}</p>
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

      <section className="px-5 py-14 sm:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title={content.home.brandsTitle} align="center" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {content.brands.map((brand) => (
              <article key={brand.name} className="rounded-[1.5rem] border border-white/10 bg-surface p-6">
                <h3 className="text-xl font-black text-white">{brand.name}</h3>
                <p className="mt-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  {brand.market[locale]}
                </p>
                <p className="mt-4 leading-7 text-slate-400">
                  {brand.context[locale]}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="campaigns" className="scroll-mt-24 border-y border-white/10 bg-[#060912] px-5 py-14 sm:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading title={content.home.campaignsTitle} subtitle={content.home.campaignsSubtitle} />
            <Link
              href={getLocalizedPath(locale, "campaigns")}
              className="w-fit rounded-full border border-white/15 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-accent/70 hover:bg-white/5"
            >
              {content.common.viewCampaigns}
            </Link>
          </div>
          <CampaignGallery
            campaigns={campaigns}
            locale={locale}
            layout="featured"
            labels={{
              openPreview: content.common.openPreview,
              close: content.common.close,
              caseStudy: content.common.caseStudy,
              business: content.common.business,
              goal: content.common.goal,
              optimized: content.common.optimized,
              result: content.common.result,
            }}
          />
          <div className="mt-10 rounded-[1.5rem] border border-accent/25 bg-accent/10 p-6 text-center">
            <h3 className="text-2xl font-black text-white">{content.home.campaignsCtaTitle}</h3>
            <p className="mx-auto mt-3 max-w-2xl leading-8 text-slate-300">{content.home.campaignsCtaBody}</p>
            <Link
              href={contact.whatsappHref}
              target="_blank"
              className="mt-6 inline-flex rounded-full bg-accent px-7 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-accent-strong"
            >
              {content.common.primaryCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[1.75rem] border border-white/10 bg-surface p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <h2 className="text-3xl font-black text-white sm:text-4xl">{content.home.cvTitle}</h2>
            <p className="mt-4 max-w-3xl text-lg leading-9 text-slate-400">{content.home.cvBody}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Link
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-200"
              href={getLocalizedPath(locale, "cv")}
            >
              {content.nav.cv}
            </Link>
            <Link
              className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-accent/70 hover:bg-white/5"
              href={contact.cvHref}
              target="_blank"
            >
              {content.common.downloadCv}
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-4xl rounded-[1.75rem] border border-white/10 bg-surface-strong p-7 text-center shadow-2xl shadow-black/25 sm:p-12">
          <h2 className="text-3xl font-black text-white sm:text-4xl">{content.home.contactTitle}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-9 text-slate-400">{content.home.contactBody}</p>
          <div className="mx-auto mt-8 max-w-xl">
            <Link className="block rounded-2xl bg-accent p-5 text-white shadow-lg shadow-accent/20 transition hover:-translate-y-0.5 hover:bg-accent-strong" href={contact.whatsappHref} target="_blank">
              <span className="block text-sm font-bold text-blue-100">{content.common.whatsapp}</span>
              <span className="mt-2 block font-black">{contact.phone}</span>
            </Link>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <Link className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white transition hover:-translate-y-0.5 hover:border-accent/70" href={`mailto:${contact.email}`}>
              <span className="block text-sm font-bold text-slate-500">{content.common.email}</span>
              <span className="mt-2 block font-black">{contact.email}</span>
            </Link>
            <Link className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white transition hover:-translate-y-0.5 hover:border-accent/70" href={contact.linktree} target="_blank">
              <span className="block text-sm font-bold text-slate-500">Linktree</span>
              <span className="mt-2 block font-black">abdullah_kmar</span>
            </Link>
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link className="rounded-full border border-white/10 px-5 py-3 text-sm font-black text-slate-200 transition hover:-translate-y-0.5 hover:border-accent/60 hover:text-white" href={contact.facebook} target="_blank">
              Facebook
            </Link>
            <Link className="rounded-full border border-white/10 px-5 py-3 text-sm font-black text-slate-200 transition hover:-translate-y-0.5 hover:border-accent/60 hover:text-white" href={contact.instagram} target="_blank">
              Instagram
            </Link>
            <Link className="rounded-full border border-white/10 px-5 py-3 text-sm font-black text-slate-200 transition hover:-translate-y-0.5 hover:border-accent/60 hover:text-white" href={contact.linkedin} target="_blank">
              LinkedIn
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
