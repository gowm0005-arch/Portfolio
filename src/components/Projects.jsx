import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Recent work"
          title="Projects"
          subtitle="A selection of projects I've built while learning and practicing."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.06}>
              <div className="group glass gradient-border rounded-2xl overflow-hidden h-full flex flex-col hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300">
                <div className="h-40 bg-gradient-to-br from-[var(--color-primary)]/30 via-[var(--color-secondary)]/30 to-[var(--color-accent)]/30 flex items-center justify-center">
                  <span className="font-display text-3xl font-bold text-white/70">
                    {project.title.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-lg mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-[var(--color-accent)] border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 text-sm py-2 rounded-full border border-white/10 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                    >
                      <FiGithub /> Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 text-sm py-2 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white hover:scale-105 transition-transform"
                    >
                      <FiExternalLink /> Live
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
