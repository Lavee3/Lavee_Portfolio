export default function TechPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs bg-bg border border-stroke rounded-full px-3 py-1 text-text-primary/80 hover:border-[#FF9EC4]/50 hover:text-text-primary transition-colors">
      {children}
    </span>
  );
}
