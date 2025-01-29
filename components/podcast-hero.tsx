"use client";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { MicVocal } from "lucide-react";

export default function PodcastHero() {
  const [iconSize, setIconSize] = useState(40); // Default size for small devices
  const textRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    // Set initial size based on window width
    const updateIconSize = () => {
      if (window.innerWidth >= 768) {
        setIconSize(110); // Large size for larger devices
      } else {
        setIconSize(40); // Default size for small devices
      }
    };

    updateIconSize(); // Update size initially
    window.addEventListener("resize", updateIconSize); // Update size on window resize

    return () => window.removeEventListener("resize", updateIconSize); // Clean up on unmount
  }, []);

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
        className="text-[50px] md:text-[150px] sm:text-[80px] font-bold tracking-tight leading-none flex items-center justify-center text-center break-words"
        ref={textRef}
      >
        P
        <span className="inline-flex items-center justify-center mx-1">
          <MicVocal
            ref={iconRef}
            size={iconSize} // Dynamically set icon size based on window width
            className="border-white rounded-full md:p-6 md:border-8 size-170 border p-2"
          />
        </span>
        DCASTS
      </h1>
    </section>
  );
}
