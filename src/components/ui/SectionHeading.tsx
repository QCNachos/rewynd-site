interface SectionHeadingProps {
  label?: string;
  title: string;
  titleAccent?: string;
  description?: string;
}

export default function SectionHeading({
  label,
  title,
  titleAccent,
  description,
}: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      {label && (
        <span className="inline-block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#00ff88]/70 mb-4 font-mono">
          {label}
        </span>
      )}
      <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-5 leading-tight tracking-tight">
        {title}{" "}
        {titleAccent && (
          <span className="bg-gradient-to-r from-[#00f5d4] to-[#00ff88] bg-clip-text text-transparent">
            {titleAccent}
          </span>
        )}
      </h2>
      {description && (
        <p className="text-[clamp(1rem,1.4vw,1.1rem)] text-white/45 max-w-[600px] mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
