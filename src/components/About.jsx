import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { aboutStats } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();
    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(value);
    }
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display font-bold text-3xl sm:text-4xl text-gradient">
      {count}+
    </span>
  );
}

const traits = [
  "BCA Graduate",
  "Passionate about Web Development",
  "Learning React",
  "JavaScript Developer",
  "Responsive Web Design",
  "Problem Solving",
  "Continuous Learner",
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Get to know me"
          title="About Me"
          subtitle="A quick look at who I am and what drives me as a developer."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 mx-auto md:mx-0">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] opacity-70 blur-md animate-pulse" />
              <div className="relative w-full h-full rounded-3xl glass flex items-center justify-center font-display text-5xl font-bold text-gradient">
                MG
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {traits.map((trait) => (
                <li
                  key={trait}
                  className="flex items-center gap-2 text-sm text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                  {trait}
                </li>
              ))}
            </ul>
            <p className="text-slate-400 leading-relaxed">
              I&apos;m a BCA graduate based in Bangalore with a strong interest
              in frontend development. I enjoy turning designs into
              functional, responsive interfaces and am currently deepening my
              skills in React while building real projects to sharpen my
              problem-solving and UI craftsmanship.
            </p>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {aboutStats.map((stat) => (
            <div
              key={stat.label}
              className="glass gradient-border rounded-2xl py-6 px-4 text-center"
            >
              <Counter value={stat.value} />
              <p className="mt-2 text-xs sm:text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
