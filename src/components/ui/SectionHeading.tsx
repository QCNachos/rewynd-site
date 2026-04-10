interface SectionHeadingProps {
  label?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  align?: "center" | "left";
  accentGradient?: string;
}

export default function SectionHeading({
  label,
  title,
  titleAccent,
  description,
  align = "center",
  accentGradient = "from-[#00f5d4] to-[#00ff88]",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-16 ${isCenter ? "text-center" : "text-left max-w-[700px]"}`}>
      {label && (
        <span className="inline-block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#00ff88]/70 mb-4 font-mono">
          {label}
        </span>
      )}
      <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-5 leading-tight tracking-tight">
        {title}{" "}
        {titleAccent && (
          <span className={`bg-gradient-to-r ${accentGradient} bg-clip-text text-transparent`}>
            {titleAccent}
          </span>
        )}
      </h2>
      {description && (
        <p className={`text-[clamp(1rem,1.4vw,1.1rem)] text-white/45 leading-relaxed ${isCenter ? "max-w-[600px] mx-auto" : "max-w-[550px]"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
