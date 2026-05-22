import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollTo } from "./SmoothScroll";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        yPercent: 110,
        duration: 1.4,
        ease: "power4.out",
        stagger: 0.12,
        delay: 0.1,
      });
      gsap.from(".hero-fade", {
        opacity: 0,
        y: 16,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.6,
      });

      if (nameRef.current) {
        gsap.to(nameRef.current, {
          scale: 2.4,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Subtle animated backdrop */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(126,184,247,0.10), transparent 55%), radial-gradient(ellipse at 70% 30%, rgba(167,139,250,0.08), transparent 50%)",
        }}
      />
      <div className="absolute inset-0 pointer-events-none" />

      <div className="hero-fade absolute top-[18vh] left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.45em] text-muted text-center px-4">
        AI / ML ENGINEER · DEHRADUN, INDIA
      </div>

      <h1
        ref={nameRef}
        className="relative z-10 serif-italic text-text-primary text-center leading-[0.85] tracking-tight"
        style={{ fontSize: "clamp(4.5rem, 16vw, 18rem)", willChange: "transform" }}
      >
        <span className="block overflow-hidden">
          <span className="hero-reveal inline-block">Laveena</span>
        </span>
        <span className="block overflow-hidden">
          <span className="hero-reveal inline-block">Armarkar</span>
        </span>
      </h1>

      <p className="hero-fade mt-10 text-sm md:text-base text-text-primary/80 tracking-wide">
        Building systems that think.
      </p>

      <button
        onClick={() => scrollTo("#builder", { duration: 1.6 })}
        className="hero-fade absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        aria-label="Scroll to next section"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-muted group-hover:text-text-primary transition-colors">
          Scroll
        </span>
        <div className="relative w-3 h-5 overflow-hidden">
          <span
            className="absolute left-1/2 -translate-x-1/2 text-text-primary text-xs"
            style={{ animation: "arrow-down 1.6s ease-in-out infinite" }}
          >
            ↓
          </span>
        </div>
      </button>
    </section>
  );
}
