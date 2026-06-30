import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiDownload, FiMail } from "react-icons/fi";
import { typewriterWords } from "../data/content";

function useTypewriter(words, speed = 90, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

function Particles() {
  const particles = Array.from({ length: 28 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => {
        const size = Math.random() * 3 + 1;
        const left = Math.random() * 100;
        const delay = Math.random() * 6;
        const duration = Math.random() * 10 + 10;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-[var(--color-accent)]/50"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: "100%",
              animation: `floatUp ${duration}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.5; }
          100% { transform: translateY(-110vh) translateX(20px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default function Hero() {
  const typed = useTypewriter(typewriterWords);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-[var(--color-primary)] glow-blob" />
      <div className="absolute top-1/3 -right-32 w-[26rem] h-[26rem] rounded-full bg-[var(--color-secondary)] glow-blob" />
      <div className="absolute bottom-0 left-1/3 w-[20rem] h-[20rem] rounded-full bg-[var(--color-accent)] glow-blob" />
      <Particles />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[var(--color-accent)] font-medium tracking-wide mb-3">
            Hi, I&apos;m
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight">
            M. <span className="text-gradient">Goutham</span>
          </h1>

          <div className="mt-4 h-9 flex items-center">
            <span className="font-display text-xl sm:text-2xl text-slate-200">
              {typed}
              <span className="inline-block w-[2px] h-6 align-middle bg-[var(--color-accent)] ml-1 animate-pulse" />
            </span>
          </div>

          <p className="mt-3 text-slate-400">BCA Graduate</p>

          <p className="mt-6 text-slate-400 max-w-md leading-relaxed">
            I build clean, responsive, and accessible web interfaces — turning
            ideas into fast, modern experiences with React and JavaScript.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] font-medium text-white shadow-lg shadow-blue-900/30 hover:scale-105 transition-transform"
            >
              View Projects
            </a>
            <a
<<<<<<< HEAD
              href="/M_Goutham_Resume.pdf"
              download="M_Goutham_Resume.pdf"
=======
              href="/resume.pdf"
              download="M_Gowtham_Resume.pdf"
>>>>>>> 75c155599f106965c367ec807fed38eb2e5954a6
              className="px-6 py-3 rounded-full glass gradient-border font-medium flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <FiDownload /> Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full font-medium flex items-center gap-2 text-slate-200 hover:text-[var(--color-accent)] transition-colors"
            >
              <FiMail /> Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-[var(--color-primary)]/40"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              className="absolute inset-6 rounded-full border border-dashed border-[var(--color-accent)]/30"
            />
            <div className="absolute inset-12 rounded-full glass gradient-border flex items-center justify-center overflow-hidden">
              <div className="font-display text-6xl font-bold text-gradient">MG</div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-[var(--color-accent)]"
      >
        <FiArrowDown size={22} />
      </motion.a>
    </section>
  );
}
