import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { achievements } from "../data/content";
import Reveal from "./Reveal";

function AchievementCounter({ value, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();
    const duration = 1000;
    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(value);
    }
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display font-extrabold text-4xl sm:text-5xl text-gradient">
        {count}+
      </p>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
  );
}

export default function Achievements() {
  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="glass gradient-border rounded-3xl py-12 px-6 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {achievements.map((item) => (
              <AchievementCounter key={item.label} {...item} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
