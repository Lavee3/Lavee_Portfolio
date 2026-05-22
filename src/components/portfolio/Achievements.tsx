import Reveal from "./Reveal";

export default function Achievements() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6 py-32 text-center">
      <div className="max-w-4xl space-y-16">
        <Reveal>
          <div>
            <p
              className="serif-italic text-text-primary leading-[1.05]"
              style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)" }}
            >
              Top 30 / 3,000+ Teams
            </p>
            <p className="text-[10px] uppercase tracking-[0.4em] text-muted mt-4">
              National Hackathon Finalist
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div>
            <p
              className="serif-italic text-text-primary leading-[1.05]"
              style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)" }}
            >
              SIH 2024 Qualifier
            </p>
            <p className="text-[10px] uppercase tracking-[0.4em] text-muted mt-4">
              Smart India Hackathon · Government of India
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
