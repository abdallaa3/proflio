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
  };
};

export function CampaignGallery({ campaigns, locale, labels }: CampaignGalleryProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const active = campaigns.find((campaign) => campaign.slug === activeSlug);

  return (
    <>
      <div className="grid gap-7 md:grid-cols-2">
        {campaigns.map((campaign) => {
          const isPortrait = campaign.height > campaign.width;

          return (
            <article
              key={campaign.slug}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-2xl shadow-black/20"
            >
              <button
                type="button"
                onClick={() => setActiveSlug(campaign.slug)}
                className={`image-frame relative flex w-full items-center justify-center overflow-hidden ${
                  isPortrait ? "aspect-[4/5]" : "aspect-[16/9]"
                }`}
                aria-label={`${labels.openPreview}: ${campaign.title[locale]}`}
              >
                <Image
                  src={campaign.image}
                  alt={campaign.title[locale]}
                  width={campaign.width}
                  height={campaign.height}
                  sizes="(min-width: 768px) 48vw, 100vw"
                  className="h-full w-full object-contain p-3 transition duration-500 group-hover:scale-[1.025]"
                />
              </button>
              <div className="p-6">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-accent">
                  {campaign.platform}
                </p>
                <h3 className="mt-3 text-xl font-black text-white">{campaign.title[locale]}</h3>
                <p className="mt-3 leading-7 text-slate-400">{campaign.description[locale]}</p>
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
                alt={active.title[locale]}
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
