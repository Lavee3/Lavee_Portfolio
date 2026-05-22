const ITEMS = [
  "MACHINE LEARNING",
  "FULL STACK",
  "AI SYSTEMS",
  "PYTHON",
  "NEURAL NETWORKS",
  "DATA ENGINEERING",
  "OPEN TO WORK",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="py-20 md:py-28 border-y border-stroke overflow-hidden">
      <div className="flex whitespace-nowrap animate-[marquee_40s_linear_infinite]" style={{ width: "max-content" }}>
        {row.map((t, i) => (
          <span key={i} className="flex items-center text-[10px] md:text-xs uppercase tracking-[0.45em] text-muted mx-8">
            {t}
            <span className="ml-16 text-text-primary/30">·</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }`}</style>
    </div>
  );
}
