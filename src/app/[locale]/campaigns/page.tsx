import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CampaignGallery } from "@/components/campaign-gallery";
import { SectionHeading } from "@/components/section-heading";
import { campaigns, getContent } from "@/lib/content";
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
    title: content.meta.campaignsTitle,
    description: content.meta.campaignsDescription,
    alternates: {
      canonical: `${siteUrl}/${locale}/campaigns`,
      languages: {
        ar: `${siteUrl}/ar/campaigns`,
        en: `${siteUrl}/en/campaigns`,
      },
    },
    openGraph: {
      title: content.meta.campaignsTitle,
      description: content.meta.campaignsDescription,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      url: `${siteUrl}/${locale}/campaigns`,
    },
  };
}

export default async function CampaignsPage({ params }: PageProps) {
  const locale = await getLocale(params);
  const content = getContent(locale);

  return (
    <SiteShell locale={locale} page="campaigns">
      <main className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title={content.home.campaignsTitle}
            subtitle={content.home.campaignsSubtitle}
          />
          <div className="mt-12">
            <CampaignGallery
              campaigns={campaigns}
              locale={locale}
              labels={{ openPreview: content.common.openPreview, close: content.common.close }}
            />
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
