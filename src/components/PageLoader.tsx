"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const phrases = ["Smart Moves.", "Bold Dreams.", "Big Wins."];

export default function PageLoader() {
  const [logoVisible, setLogoVisible] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [unmounted, setUnmounted] = useState(false);

  useEffect(() => {
    // Logo fades in immediately
    const t1 = setTimeout(() => setLogoVisible(true), 80);

    // Cycle phrases: index 0 shown at start, swap to 1 at 900ms, 2 at 1650ms
    const t2 = setTimeout(() => setPhraseIndex(1), 900);
    const t3 = setTimeout(() => setPhraseIndex(2), 1700);

    // Start exit fade at 2700ms
    const t4 = setTimeout(() => setExiting(true), 2700);

    // Unmount at 3400ms (after 700ms fade)
    const t5 = setTimeout(() => setUnmounted(true), 3400);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
  }, []);

  if (unmounted) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0064b0",
        opacity: exiting ? 0 : 1,
        pointerEvents: exiting ? "none" : "auto",
        transition: "opacity 0.7s ease-in-out",
      }}
    >
      {/* Logo */}
      <div
        style={{
          opacity: logoVisible ? 1 : 0,
          transform: logoVisible ? "scale(1) translateY(0)" : "scale(0.85) translateY(12px)",
          transition: "opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <Image
          src="/images/logonew.png"
          alt="Smart Sports"
          width={220}
          height={130}
          priority
          className=""
          style={{ width: "clamp(150px, 20vw, 220px)", height: "auto" }}
        />
      </div>

      {/* Cycling text */}
      <div
        style={{
          marginTop: "2rem",
          height: "2.5rem",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "220px",
        }}
      >
        <p
          key={phraseIndex}
          style={{
            fontFamily: "var(--font-montserrat), system-ui, sans-serif",
            fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
            fontWeight: 800,
            color: "#ffcc00",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            margin: 0,
            animation: "text-swap-up 0.45s cubic-bezier(0.22,1,0.36,1) forwards",
          }}
        >
          {phrases[phraseIndex]}
        </p>
      </div>

      {/* Progress bar */}
      <div
        style={{
          marginTop: "2.5rem",
          width: "clamp(120px, 15vw, 180px)",
          height: "3px",
          borderRadius: "99px",
          backgroundColor: "rgba(255,255,255,0.2)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            borderRadius: "99px",
            backgroundColor: "#ffcc00",
            width: exiting ? "100%" : "0%",
            transition: exiting ? "none" : "width 2.6s linear",
            // Trigger the grow by starting at 0 and letting it fill over loader lifetime
          }}
          ref={(el) => {
            if (el) {
              requestAnimationFrame(() => {
                el.style.width = "100%";
                el.style.transition = "width 2.6s linear";
              });
            }
          }}
        />
      </div>
    </div>
  );
}
