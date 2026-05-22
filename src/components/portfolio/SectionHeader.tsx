import { motion } from "framer-motion";

function parseHeading(text: string) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("*") && p.endsWith("*")) {
      return (
        <em key={i} className="font-display italic not-italic accent-text">
          {p.slice(1, -1)}
        </em>
      );
    }
    return <span key={i}>{p}</span>;
  });
}

interface Props {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  cta?: { label: string; href: string };
}

export default function SectionHeader({ eyebrow, heading, subtext, cta }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
    >
      <div>
        {eyebrow && (
          <p className="text-xs text-muted uppercase tracking-[0.3em] mb-4">{eyebrow}</p>
        )}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-text-primary leading-tight">
          {parseHeading(heading)}
        </h2>
        {subtext && (
          <p className="text-sm md:text-base text-muted mt-4 max-w-xl">{subtext}</p>
        )}
      </div>
      {cta && (
        <a
          href={cta.href}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-sm text-text-primary border border-stroke hover:border-white/30 rounded-full px-5 py-2.5 transition-colors"
        >
          {cta.label}
        </a>
      )}
    </motion.div>
  );
}
