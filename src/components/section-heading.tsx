type SectionHeadingProps = {
  index: string;
  kicker: string;
  title: string;
  note?: string;
  inverse?: boolean;
};

export function SectionHeading({
  index,
  kicker,
  title,
  note,
  inverse = false,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 grid gap-7 border-t border-current/15 pt-5 md:mb-16 md:grid-cols-[0.4fr_1.15fr_0.65fr] md:gap-10">
      <div className="flex items-start gap-3 text-xs font-semibold uppercase tracking-[0.16em]">
        <span className={inverse ? "text-[#e46d7d]" : "text-accent"}>
          {index}
        </span>
        <span className={inverse ? "text-white/55" : "text-muted"}>
          {kicker}
        </span>
      </div>
      <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {note ? (
        <p
          className={`max-w-sm text-sm leading-7 md:justify-self-end ${
            inverse ? "text-white/55" : "text-muted"
          }`}
        >
          {note}
        </p>
      ) : null}
    </div>
  );
}
