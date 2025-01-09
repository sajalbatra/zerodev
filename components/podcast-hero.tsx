"use client"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MicVocal } from "lucide-react";

export default function PodcastHero() {
  const textRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    // Animate the text
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
    );

    // Animate the icon
    gsap.fromTo(
      iconRef.current,
      { scale: 0 },
      { scale: 1, duration: 1.5, ease: "bounce.out", delay: 0.5 }
    );
  }, []);

  return (
    <section className="px-6 py-20">
      <h1
        className="text-[200px] font-bold tracking-tight leading-none flex items-center"
        ref={textRef}
      >
        P
        <span className="inline-flex items-center justify-center">
          <MicVocal
            ref={iconRef}
            size={170}
            className="border-white rounded-full p-6 border-8"
          />
        </span>
        DCASTS
      </h1>
    </section>
  );
}
