import Chapter from "./Chapter";
import Reveal from "./Reveal";

const LEFT = [
  "Supervised Learning",
  "Feature Engineering",
  "Tensorflow",
  "PyTorch",
  "XGBoost",
  "Ensemble Methods",
  "NLP",
  "Semantic Embeddings",
  "Model Deployment",
  "ROC-AUC",
  "Cross-Validation",
];
const RIGHT = [
  "Python",
  "JavaScript",
  "SQL",
  "React",
  "Next.js",
  "Node.js",
  "API Development",
  "Git",
  "Linux",
  "PostgreSQL",
  "System Design",
];

function Column({ items, label }: { items: string[]; label: string }) {
  return (
    <div>
      <Reveal>
        <p className="text-[10px] uppercase tracking-[0.4em] text-muted mb-6 pb-4 border-b border-stroke">
          {label}
        </p>
      </Reveal>
      <ul className="space-y-1">
        {items.map((s, i) => (
          <Reveal key={s} delay={i * 0.04}>
            <li className="group relative py-2.5 overflow-hidden">
              <span
                className="serif-italic text-text-primary"
                style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.25rem)" }}
              >
                {s}
              </span>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-text-primary/40 transition-all duration-700 group-hover:w-full" />
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <Chapter id="skills" number="04" title="The Arsenal" align="right">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        <Column items={LEFT} label="ML / AI" />
        <Column items={RIGHT} label="Engineering" />
      </div>
    </Chapter>
  );
}
