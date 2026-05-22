import Chapter from "./Chapter";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <Chapter id="experience" number="02" title="The Practice" align="right">
      <div className="max-w-3xl">
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.35em] text-muted mb-4">2024 — Internship</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h3 className="serif-italic text-3xl md:text-5xl text-text-primary mb-3">
            ML Engineer · Unified Mentor
          </h3>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-muted text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
            Designed and shipped four production-grade ML models, owning the full pipeline — data engineering, feature crafting, model selection, and evaluation under real constraints.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-8 border-t border-stroke pt-8">
          {[
            ["04", "Models shipped"],
            ["95%", "Best F1 score"],
            ["End-to-end", "Pipeline ownership"],
          ].map(([v, l], i) => (
            <Reveal key={l} delay={0.15 + i * 0.08}>
              <div>
                <p className="serif-italic text-4xl md:text-5xl text-text-primary mb-2">{v}</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted">{l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Chapter>
  );
}
