import { FiBookOpen } from "react-icons/fi";
import { education } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Academic background" title="Education" />

        <div className="relative pl-10 border-l-2 border-dashed border-white/10">
          <Reveal>
            <div className="relative mb-2">
              <span className="absolute -left-[3.1rem] top-0 w-9 h-9 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-white">
                <FiBookOpen size={16} />
              </span>
              <div className="glass gradient-border rounded-2xl p-6">
                <p className="text-xs text-[var(--color-accent)] font-medium mb-1">
                  {education.duration}
                </p>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {education.degree}
                </h3>
                <p className="text-sm text-slate-400">{education.college}</p>
                <p className="text-sm text-slate-400">{education.university}</p>
                <p className="mt-3 inline-block text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  CGPA: {education.cgpa}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
