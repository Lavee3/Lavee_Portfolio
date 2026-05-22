import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;

type ScrollListener = (progress: number, state: "start" | "progress" | "end") => void;
const listeners = new Set<ScrollListener>();

export function onScrollTransition(listener: ScrollListener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function emit(progress: number, state: "start" | "progress" | "end") {
  listeners.forEach((l) => l(progress, state));
}

export function scrollTo(target: string | number, options?: { offset?: number; duration?: number }) {
  const duration = options?.duration ?? 1.4;
  emit(0, "start");

  const startTime = performance.now();
  let rafId = 0;
  const tick = (now: number) => {
    const p = Math.min(1, (now - startTime) / (duration * 1000));
    emit(p, p >= 1 ? "end" : "progress");
    if (p < 1) rafId = requestAnimationFrame(tick);
  };
  rafId = requestAnimationFrame(tick);

  const cleanup = () => {
    cancelAnimationFrame(rafId);
    emit(1, "end");
  };

  if (lenisInstance) {
    lenisInstance.scrollTo(target, {
      offset: options?.offset ?? 0,
      duration,
      onComplete: cleanup,
    });
  } else {
    const el = typeof target === "string" ? document.querySelector(target) : null;
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: typeof target === "number" ? target : 0, behavior: "smooth" });
    setTimeout(cleanup, duration * 1000);
  }
}

export default function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenisRef.current = lenis;
    lenisInstance = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      lenisInstance = null;
    };
  }, []);

  return null;
}
