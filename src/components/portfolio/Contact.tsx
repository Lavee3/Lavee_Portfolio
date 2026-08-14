import { useState } from "react";
import Reveal from "./Reveal";

const EMAIL = "liarmarkar@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 70%, rgba(126,184,247,0.10), transparent 60%), radial-gradient(ellipse at 50% 100%, rgba(30,40,90,0.4), transparent 70%)",
        }}
      />

      <div className="relative z-10 text-center max-w-5xl">
        <Reveal>
          <h2
            className="serif-italic text-text-primary leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(3.5rem, 12vw, 12rem)" }}
          >
            Let’s Build
            <br />
            Something.
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col items-center gap-3">
            <button
              onClick={copy}
              className="group relative text-base md:text-xl text-text-primary"
              aria-label="Copy email"
            >
              <span className="border-b border-stroke group-hover:border-text-primary transition-colors pb-1">
                {EMAIL}
              </span>
              <span
                className={`absolute -right-20 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[0.3em] text-text-primary transition-opacity ${
                  copied ? "opacity-100" : "opacity-0"
                }`}
              >
                Copied ✓
              </span>
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-10 flex items-center justify-center gap-8 text-[10px] uppercase tracking-[0.35em] text-muted">
            {[
              ["GitHub", "https://github.com/Lavee3"],
              ["LinkedIn", "https://www.linkedin.com/in/laveena-armarkar/"],
              ["LeetCode", "https://leetcode.com/Lavee3/"],
            ].map(([l, h]) => (
              <a
                key={l}
                href={h}
                target="_blank"
                rel="noreferrer"
                className="hover:text-text-primary transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-muted z-10">
        <span>© 2026 Laveena Armarkar</span>
        <span className="flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full bg-emerald-400"
            style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
          />
          Open to opportunities
        </span>
      </div>
    </section>
  );
}
