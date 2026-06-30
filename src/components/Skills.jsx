import { motion } from "framer-motion";
import {
  FiCode, FiDatabase, FiTool, FiCpu,
} from "react-icons/fi";
import { skillGroups } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const groupIcons = {
  Frontend: FiCode,
  Programming: FiCpu,
  Database: FiDatabase,
  Tools: FiTool,
};

function SkillBar({ name, level, delay }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-slate-300">{name}</span>
        <span className="text-slate-500">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)]"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="What I work with"
          title="Skills"
          subtitle="Technologies and tools I use to bring ideas to life."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => {
            const Icon = groupIcons[group.title] || FiCode;
            return (
              <Reveal key={group.title} delay={gi * 0.08}>
                <div className="glass gradient-border rounded-2xl p-6 h-full hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-white">
                      <Icon size={16} />
                    </span>
                    <h3 className="font-display font-semibold text-lg">{group.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {group.skills.map((skill, i) => (
                      <SkillBar key={skill.name} {...skill} delay={i * 0.05} />
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
