import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { contactInfo } from "../data/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © 2026 M. Gowtham. Built using React + Tailwind CSS.
        </p>
        <div className="flex gap-3">
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-[var(--color-accent)] hover:-translate-y-1 transition-all"
          >
            <FiGithub size={15} />
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-[var(--color-accent)] hover:-translate-y-1 transition-all"
          >
            <FiLinkedin size={15} />
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            aria-label="Email"
            className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-[var(--color-accent)] hover:-translate-y-1 transition-all"
          >
            <FiMail size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
