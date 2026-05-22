import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/portfolio/LoadingScreen";
import SmoothScroll from "@/components/portfolio/SmoothScroll";
import ScrollTransition from "@/components/portfolio/ScrollTransition";
import ThemeToggle from "@/components/portfolio/ThemeToggle";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Builder from "@/components/portfolio/Builder";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Marquee from "@/components/portfolio/Marquee";
import Skills from "@/components/portfolio/Skills";
import Achievements from "@/components/portfolio/Achievements";
import Contact from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Laveena Armarkar — AI/ML Engineer · Dehradun" },
      {
        name: "description",
        content:
          "Portfolio of Laveena Armarkar — AI/ML Engineer and full-stack developer building systems that think. Based in Dehradun, India.",
      },
      { property: "og:title", content: "Laveena Armarkar — AI/ML Engineer" },
      {
        property: "og:description",
        content: "Building systems that think.",
      },
    ],
  }),
});

function Index() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (loading) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [loading]);

  return (
    <div className="text-text-primary font-body grain min-h-screen">
      {mounted && (
        <AnimatePresence>
          {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
        </AnimatePresence>
      )}

      <SmoothScroll />
      <ScrollTransition />
      <Navbar />
      <ThemeToggle />
      <main>
        <Hero />
        <Builder />
        <Experience />
        <Projects />
        <Marquee />
        <Skills />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}
