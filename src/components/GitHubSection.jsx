import { FiGithub } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function GitHubSection() {
  const username = "gowtham-dev"; // replace with the real GitHub username

  return (
    <section id="github" className="relative py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Open source"
          title="GitHub Activity"
          subtitle="A live snapshot of my contributions and most-used languages."
        />

        <Reveal>
          <div className="glass gradient-border rounded-2xl p-6 overflow-hidden">
            <img
              src={`https://ghchart.rshah.org/3B82F6/${username}`}
              alt="GitHub contribution graph"
              className="w-full"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          <Reveal delay={0.1}>
            <div className="glass gradient-border rounded-2xl p-4 flex justify-center">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=3B82F6&icon_color=06B6D4&text_color=94A3B8`}
                alt="GitHub stats"
                className="max-w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="glass gradient-border rounded-2xl p-4 flex justify-center">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=3B82F6&text_color=94A3B8`}
                alt="Most used languages"
                className="max-w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 text-center">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass gradient-border hover:scale-105 transition-transform"
            >
              <FiGithub /> View Full Profile
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
