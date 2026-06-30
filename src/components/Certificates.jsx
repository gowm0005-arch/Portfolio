import { FiAward } from "react-icons/fi";
import { certificates } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Verified learning" title="Certificates" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, i) => (
            <Reveal key={cert} delay={i * 0.06}>
              <div className="glass gradient-border rounded-2xl p-6 flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300">
                <span className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] flex items-center justify-center text-white">
                  <FiAward size={18} />
                </span>
                <p className="font-medium text-slate-200">{cert}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
