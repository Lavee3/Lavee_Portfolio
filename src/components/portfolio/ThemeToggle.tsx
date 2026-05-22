import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as "dark" | "light" | null) ?? "dark";
    setTheme(stored);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") root.classList.add("light");
    else root.classList.remove("light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="fixed bottom-6 right-6 z-[60] w-10 h-10 rounded-full border border-stroke bg-surface/60 backdrop-blur-md flex items-center justify-center text-text-primary text-sm hover:scale-110 transition-transform"
    >
      {theme === "dark" ? "☾" : "☀"}
    </button>
  );
}
