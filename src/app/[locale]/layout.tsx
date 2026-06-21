import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getDirection, isLocale, locales, type Locale, type PageKey } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;

  return (
    <div lang={locale} dir={getDirection(locale)} className="min-h-screen">
      {children}
    </div>
  );
}

export function SiteShell({
  children,
  locale,
  page,
}: {
  children: React.ReactNode;
  locale: Locale;
  page: PageKey;
}) {
  return (
    <>
      <Header locale={locale} page={page} />
      {children}
      <Footer locale={locale} />
    </>
  );
}
