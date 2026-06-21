import type { Metadata } from "next";
import { Cairo, Geist, Geist_Mono } from "next/font/google";
import { siteUrl } from "@/lib/i18n";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "عبدالله قمر | مختص تسويق أداء وميديا باير",
    template: "%s | Abdullah Kmar",
  },
  description:
    "Portfolio website for Abdullah Kmar, performance marketing specialist and media buyer for Meta, Google, Instagram, and TikTok ads.",
  keywords: [
    "عبدالله قمر",
    "Abdullah Kmar",
    "Media Buyer",
    "Performance Marketing",
    "Meta Ads",
    "Google Ads",
    "Digital Marketing",
  ],
  authors: [{ name: "Abdullah Kmar" }],
  creator: "Abdullah Kmar",
  openGraph: {
    type: "website",
    locale: "ar_EG",
    alternateLocale: ["en_US"],
    siteName: "Abdullah Kmar Portfolio",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@abdullahkmar",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/icon", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
