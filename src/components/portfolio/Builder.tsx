import Chapter from "./Chapter";
import Reveal from "./Reveal";

export default function Builder() {
  return (
    <Chapter number="01" title="The Builder" align="left">
      <div className="grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-7 space-y-6">
          <Reveal>
            <p className="text-xl md:text-2xl serif-italic text-text-primary/90 leading-relaxed">
              I’m a Computer Science undergraduate from Dehradun, India, building intelligence into software, from machine learning pipelines to full-stack systems.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base text-muted leading-relaxed max-w-xl">
              I obsess over how things are made: how a model learns, how an interface breathes, how a system scales. Every project I ship is a small experiment in making technology feel inevitable.
            </p>
          </Reveal>
        </div>
        <div className="md:col-span-5 md:pl-10 md:border-l border-stroke space-y-8">
          {[
            ["Currently", "B.Tech CS · Year 4th · Uttaranchal University"],
            ["Focus", "Applied ML · Full-stack engineering"],
            ["Based", "Dehradun, India · Open globally"],
          ].map(([k, v], i) => (
            <Reveal key={k} delay={0.15 + i * 0.08}>
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-muted mb-2">{k}</p>
                <p className="text-base text-text-primary serif-italic">{v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Chapter>
  );
}
