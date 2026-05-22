import { useEffect, useState } from "react";
import { onScrollTransition } from "./SmoothScroll";

export default function ScrollTransition() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout> | null = null;
    const off = onScrollTransition((p, state) => {
      if (state === "start") {
        if (hideTimer) clearTimeout(hideTimer);
        setActive(true);
        setProgress(0);
      } else if (state === "progress") {
        setProgress(p);
      } else {
        setProgress(1);
        hideTimer = setTimeout(() => {
          setActive(false);
          setProgress(0);
        }, 450);
      }
    });
    return () => {
      off();
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {/* Thin top progress bar */}
      <div
        className="fixed top-0 left-0 right-0 z-[110] h-[2px] pointer-events-none"
        style={{ opacity: active ? 1 : 0, transition: "opacity 300ms ease" }}
        aria-hidden
      >
        <div
          className="h-full origin-left"
          style={{
            width: "100%",
            transform: `scaleX(${progress})`,
            transformOrigin: "left center",
            background: "linear-gradient(90deg, #FF9EC4 0%, #E0A8FF 50%, #FFC2A8 100%)",
            boxShadow: "0 0 12px rgba(224,168,255,0.55)",
            transition: "transform 80ms linear",
          }}
        />
      </div>

      {/* Cinematic fade + blur overlay */}
      <div
        className="fixed inset-0 z-[105] pointer-events-none"
        aria-hidden
        style={{
          opacity: active ? Math.sin(progress * Math.PI) * 0.55 : 0,
          backdropFilter: active ? `blur(${Math.sin(progress * Math.PI) * 6}px)` : "none",
          WebkitBackdropFilter: active ? `blur(${Math.sin(progress * Math.PI) * 6}px)` : "none",
          background:
            "radial-gradient(ellipse at center, rgba(13,6,48,0.6) 0%, rgba(4,2,15,0.85) 100%)",
          transition: "opacity 250ms ease",
        }}
      />
    </>
  );
}
