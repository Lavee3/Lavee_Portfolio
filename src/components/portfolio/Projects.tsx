import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Chapter from "./Chapter";

interface Project {
  title: string;
  blurb: string;
  detail: string;
  tags: string[];
  href: string;
}

const PROJECTS: Project[] = [
  {
    title: "Resume Reviewer AI",
    blurb: "NLP system that scores resumes against job descriptions.",
    detail:
      "Semantic embeddings + similarity scoring with a Streamlit interface. Designed to give candidates real, contextual feedback rather than keyword counts.",
    tags: ["NLP", "Semantic Embeddings", "Streamlit", "Python"],
    href: "https://github.com/Lavee3",
  },
  {
    title: "Expense Tracker",
    blurb: "Responsive personal finance app with real-time insights.",
    detail:
      "Full-stack tracker with categorisation, budget monitoring, and clean data visualisations. Built around the idea that finance tools should feel calm, not loud.",
    tags: ["Next.js", "React", "Tailwind", "JavaScript"],
    href: "https://github.com/Lavee3",
  },
  {
    title: "Healthcare ML Prediction Suite",
    blurb: "Four production-quality models unified into one framework.",
    detail:
      "Heart Disease (87%), Thyroid Cancer (95% F1), Forest Cover, Lung Cancer — shared preprocessing pipeline, consistent evaluation, reproducible experiments.",
    tags: ["Scikit-learn", "Pandas", "NumPy", "Seaborn"],
    href: "https://github.com/Lavee3",
  },
];

export default function Projects() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Chapter id="projects" number="03" title="Selected Work" align="left">
      <div className="border-t border-stroke">
        {PROJECTS.map((p, i) => {
          const isOpen = open === i;
          return (
            <div key={p.title} className="border-b border-stroke">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-baseline justify-between gap-6 py-8 md:py-10 text-left group"
                aria-expanded={isOpen}
              >
                <div className="flex items-baseline gap-4 md:gap-8 min-w-0">
                  <span className="text-[10px] text-muted tracking-[0.3em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="serif-italic text-text-primary truncate transition-colors group-hover:text-white"
                    style={{ fontSize: "clamp(1.75rem, 4vw, 3.25rem)" }}
                  >
                    {p.title}
                  </h3>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="hidden md:inline text-[10px] uppercase tracking-[0.3em] text-muted hover:text-text-primary transition-colors"
                  >
                    GitHub ↗
                  </a>
                  <span
                    className={`serif-italic text-2xl text-text-primary transition-transform duration-500 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </div>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 md:pl-20 grid md:grid-cols-12 gap-8">
                      <p className="md:col-span-7 text-base md:text-lg text-text-primary/85 leading-relaxed serif-italic">
                        {p.blurb}
                      </p>
                      <div className="md:col-span-5 space-y-4">
                        <p className="text-sm text-muted leading-relaxed">{p.detail}</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 pt-2">
                          {p.tags.map((t) => (
                            <span key={t} className="text-[10px] uppercase tracking-[0.25em] text-muted">
                              · {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Chapter>
  );
}
