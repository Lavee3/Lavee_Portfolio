import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  id?: string;
  number: string;
  title: string;
  children: ReactNode;
  align?: "left" | "right";
}

export default function Chapter({ id, number, title, children, align = "left" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".chap-title-line", {
        yPercent: 110,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
        },
      });
      gsap.from(".chap-num", {
        opacity: 0,
        x: align === "left" ? -60 : 60,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      });
    }, ref);
    return () => ctx.revert();
  }, [align]);

  return (
    <section
      id={id}
      ref={ref}
      className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-32 overflow-hidden"
    >
      <span
        className={`chap-num chapter-num absolute pointer-events-none ${
          align === "left" ? "-left-4 md:left-0" : "-right-4 md:right-0"
        } top-1/2 -translate-y-1/2`}
      >
        {number}
      </span>
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <p className="text-[10px] uppercase tracking-[0.4em] text-muted mb-6">Chapter {number}</p>
        <h2 className="serif-italic text-text-primary leading-[0.95] tracking-tight mb-10" style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
          <span className="block overflow-hidden">
            <span className="chap-title-line inline-block">{title}</span>
          </span>
        </h2>
        {children}
      </div>
    </section>
  );
}
