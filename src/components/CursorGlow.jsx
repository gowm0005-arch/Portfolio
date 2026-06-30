import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const el = ref.current;
    let raf;
    const move = (e) => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (el) {
          el.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
        }
      });
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-0 hidden md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
