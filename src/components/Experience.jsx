import { FiBriefcase } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Where I stand" title="Experience" />

        <Reveal>
          <div className="glass gradient-border rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-start">
            <span className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-white">
              <FiBriefcase size={20} />
            </span>
            <div>
              <h3 className="font-display font-semibold text-lg mb-2">
                Frontend Developer <span className="text-slate-500 font-normal">(Fresher)</span>
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Currently building personal projects, improving my React
                skills, learning modern frontend development practices, and
                preparing for software developer roles. I previously
                completed a web development internship at Zypher Pvt. Ltd.,
                where I worked on real client-facing tasks.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
