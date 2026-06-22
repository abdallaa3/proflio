"use client";

import Image from "next/image";
import { useState } from "react";
import type { Campaign } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type CampaignGalleryProps = {
  campaigns: Campaign[];
  locale: Locale;
  labels: {
    openPreview: string;
    close: string;
    caseStudy: string;
    business: string;
    goal: string;
    optimized: string;
    result: string;
  };
};

export function CampaignGallery({ campaigns, locale, labels }: CampaignGalleryProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const active = campaigns.find((campaign) => campaign.slug === activeSlug);

  return (
    <>
      <div className="grid gap-7 md:grid-cols-2">
        {campaigns.map((campaign, index) => {
          const isPortrait = campaign.height > campaign.width;
          const isPanoramic = campaign.width / campaign.height > 3.5;
          const isTallMobile = isPortrait && campaign.width / campaign.height < 0.58;

          return (
            <article
              key={campaign.slug}
              className={`group overflow-hidden rounded-[1.5rem] border border-white/10 bg-surface shadow-2xl shadow-black/20 transition hover:border-accent/35 ${
                isPortrait ? "" : "md:col-span-2"
              }`}
            >
              <button
                type="button"
                onClick={() => setActiveSlug(campaign.slug)}
                className={`image-frame relative flex w-full items-center justify-center overflow-hidden ${
                  isPortrait
                    ? isTallMobile
                      ? "aspect-[9/16] max-h-[720px]"
                      : "aspect-[4/5] max-h-[620px]"
                    : isPanoramic
                      ? "aspect-[4/1] min-h-[220px]"
                      : "aspect-[16/6.2] min-h-[280px]"
                }`}
                aria-label={`${labels.openPreview}: ${campaign.title[locale]}`}
              >
                <Image
                  src={campaign.image}
                  alt={campaign.alt?.[locale] ?? campaign.title[locale]}
                  width={campaign.width}
                  height={campaign.height}
                  priority={index === 0}
                  sizes={isPortrait ? "(min-width: 768px) 46vw, 100vw" : "(min-width: 768px) 88vw, 100vw"}
                  className="h-full w-full object-contain p-3 transition duration-500 group-hover:scale-[1.018]"
                />
              </button>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-accent">
                    {campaign.platform}
                  </p>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold text-slate-300">
                    {labels.caseStudy}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-black text-white">{campaign.title[locale]}</h3>
                <p className="mt-3 leading-7 text-slate-400">{campaign.description[locale]}</p>
                <dl className="mt-5 grid gap-3 text-sm md:grid-cols-2">
                  <CaseStudyItem label={labels.business} value={campaign.business[locale]} />
                  <CaseStudyItem label={labels.goal} value={campaign.goal[locale]} />
                  <CaseStudyItem label={labels.optimized} value={campaign.optimized[locale]} />
                  <CaseStudyItem label={labels.result} value={campaign.result[locale]} />
                </dl>
                <div className="mt-5 flex flex-wrap gap-2">
                  {campaign.details[locale].map((detail) => (
                    <span
                      key={detail}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-bold text-slate-300"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-surface-strong shadow-2xl">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  {active.platform}
                </p>
                <h3 className="mt-1 font-black text-white">{active.title[locale]}</h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveSlug(null)}
                className="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-slate-200"
              >
                {labels.close}
              </button>
            </div>
            <div className="image-frame relative max-h-[78vh] w-full overflow-auto p-3">
              <Image
                src={active.image}
                alt={active.alt?.[locale] ?? active.title[locale]}
                width={active.width}
                height={active.height}
                sizes="100vw"
                className="mx-auto h-auto max-h-[74vh] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function CaseStudyItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
      <dt className="text-xs font-black text-slate-500">{label}</dt>
      <dd className="mt-2 leading-6 text-slate-200">{value}</dd>
    </div>
  );
}
