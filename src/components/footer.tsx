import Link from "next/link";
import { contact, getContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const content = getContent(locale);

  return (
    <footer className="border-t border-white/10 bg-[#05070b] px-5 py-10 text-sm text-slate-400 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-bold text-white">© 2026 Abdullah Kmar</p>
          <p className="mt-1">Performance Marketing & Media Buying</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link className="transition hover:text-white" href={`mailto:${contact.email}`}>
            {content.common.email}
          </Link>
          <Link className="transition hover:text-white" href={contact.whatsappHref} target="_blank">
            {content.common.whatsapp}
          </Link>
          <Link className="transition hover:text-white" href={contact.linkedin} target="_blank">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
