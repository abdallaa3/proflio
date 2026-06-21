type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "start" | "center";
};

export function SectionHeading({ title, subtitle, align = "start" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-8 text-slate-400 sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
