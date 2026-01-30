"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Particles from "./Particles";

gsap.registerPlugin(ScrollTrigger);

export default function HomeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // 1. Initialize Lenis
    const lenis = new Lenis({
      duration: 2, // Increased for a more noticeable "floaty" feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.5,
    });

    function update(time: number) {
      lenis.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // 3. Sync ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        {" "}
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={1000}
          particleSpread={15}
          speed={0.08}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Page content */}
      <div className="relative flex flex-col justify-center items-start px-2 lg:px-4 xl:px-8">
        {children}
      </div>
    </div>
  );
}
