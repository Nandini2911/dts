type SectionTitleProps = {
  eyebrow: string;
  title: string;
  gradient?: string;
  text?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  gradient,
  text,
}: SectionTitleProps) {
  return (
    <div>
      <p className="text-sm font-black uppercase tracking-[0.25em] text-[#6288B9]">
        {eyebrow}
      </p>

      <h2
        className="mt-3 text-3xl font-black tracking-[-0.05em] text-[#0D2444] sm:text-5xl"
        style={{
          fontFamily: "New York, ui-serif, Georgia, serif",
        }}
      >
        {title}
        {gradient && (
          <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
            {gradient}
          </span>
        )}
      </h2>

      {text && (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#53677F]">
          {text}
        </p>
      )}
    </div>
  );
}
