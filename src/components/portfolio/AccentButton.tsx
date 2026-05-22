import { ReactNode } from "react";

interface Props {
  variant?: "solid" | "outline";
  href?: string;
  children: ReactNode;
  onClick?: () => void;
}

export default function AccentButton({ variant = "solid", href, children, onClick }: Props) {
  const base =
    "relative inline-flex items-center gap-2 rounded-full text-sm px-7 py-3.5 transition-all duration-300 hover:scale-105 group";
  const styles =
    variant === "solid"
      ? "bg-text-primary text-bg hover:bg-bg hover:text-text-primary"
      : "border-2 border-stroke bg-bg text-text-primary hover:border-transparent";

  const inner = (
    <>
      <span
        className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10"
        style={{ animation: "gradient-shift 4s ease infinite" }}
      />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${base} ${styles}`} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <button className={`${base} ${styles}`} onClick={onClick}>
      {inner}
    </button>
  );
}
