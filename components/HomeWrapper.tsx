"use client";

import Particles from "./Particles";

export default function HomeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={2000}
          particleSpread={10}
          speed={0.08}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Page content */}
      <div className="relative h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-2 lg:px-4 xl:px-8">
        {children}
      </div>
    </div>
  );
}
