import { useEffect, useRef, useState } from "react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [split, setSplit] = useState(false);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    const DURATION = 2400;
    let raf = 0;
    const tick = (t: number) => {
      if (startRef.current === null) startRef.current = t;
      const p = Math.min(1, (t - startRef.current) / DURATION);
      setCount(Math.floor(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setSplit(true);
        setTimeout(onComplete, 900);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[200] pointer-events-none">
      <div
        className="absolute top-0 left-0 right-0 h-1/2 flex items-start justify-start p-6 md:p-10 transition-transform duration-[900ms] ease-[cubic-bezier(0.77,0,0.175,1)]"
        style={{ transform: split ? "translateY(-100%)" : "translateY(0)", background: "var(--page-gradient)", backgroundAttachment: "fixed" }}
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-muted">LAVEE</span>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2 flex items-end justify-end p-6 md:p-10 transition-transform duration-[900ms] ease-[cubic-bezier(0.77,0,0.175,1)]"
        style={{ transform: split ? "translateY(100%)" : "translateY(0)", background: "var(--page-gradient)", backgroundAttachment: "fixed" }}
      >
        <span className="serif-italic text-[18vw] md:text-[12vw] leading-none text-text-primary tabular-nums">
          {String(count).padStart(3, "0")}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-stroke z-10">
        <div
          className="h-full bg-text-primary transition-[width] ease-out"
          style={{ width: `${count}%`, transitionDuration: "120ms" }}
        />
      </div>
    </div>
  );
}
