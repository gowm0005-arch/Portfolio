import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="text-center max-w-2xl mx-auto mb-14">
      {eyebrow && (
        <p className="text-[var(--color-accent)] font-medium tracking-widest uppercase text-xs mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display font-bold text-3xl sm:text-4xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && <p className="mt-3 text-slate-400">{subtitle}</p>}
    </Reveal>
  );
}
