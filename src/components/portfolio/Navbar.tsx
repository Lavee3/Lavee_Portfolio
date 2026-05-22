import { useEffect, useRef, useState } from "react";
import { scrollTo } from "./SmoothScroll";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 80 && y > lastY.current) setHidden(true);
      else setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    scrollTo(target, { duration: 1.6 });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-500 ${
        hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <a
        href="#home"
        onClick={(e) => handleNavClick(e, "#home")}
        className="serif-italic text-xl md:text-2xl text-text-primary tracking-tight cursor-pointer"
      >
        Lavee
      </a>
      <a
        href="#contact"
        onClick={(e) => handleNavClick(e, "#contact")}
        className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-text-primary cursor-pointer"
      >
        <span className="relative">
          Hire Me
          <span className="absolute -bottom-1 left-0 right-0 h-px bg-text-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
        </span>
        <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
      </a>
    </nav>
  );
}
