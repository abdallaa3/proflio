import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage } from "@/components/home-page";
import { getContent } from "@/lib/content";
import { isLocale, siteUrl, type Locale } from "@/lib/i18n";
import { SiteShell } from "./layout";

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
    title: content.meta.homeTitle,
    description: content.meta.homeDescription,
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        ar: `${siteUrl}/ar`,
        en: `${siteUrl}/en`,
      },
    },
    openGraph: {
      title: content.meta.homeTitle,
      description: content.meta.homeDescription,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      url: `${siteUrl}/${locale}`,
    },
  };
}

export default async function LocalizedHomePage({ params }: PageProps) {
  const locale = await getLocale(params);

  return (
    <SiteShell locale={locale} page="home">
      <HomePage locale={locale} />
    </SiteShell>
  );
}
