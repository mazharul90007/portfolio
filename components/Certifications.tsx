"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShineBorder } from "@/components/ui/shine-border";

const Certifications = () => {
  return (
    <div className="py-16 w-full">
      <p className="text-white/50 font-medium text-xl md:text-2xl mb-4">
        <span className="mr-2">||</span>Certifications
      </p>
      <h2 className="text-5xl text-sub font-semibold mb-16">
        Industry-Recognized Skills & Credentials
      </h2>
      <div className="w-full flex flex-col md:flex-row gap-4">
        {/* =====================Programming Hero================= */}
        <div className="relative w-full overflow-hidden flex-1 p-4 rounded-lg border border-white/20">
          <ShineBorder shineColor={["#FFFFFF", "#3B82F6"]} />
          <div>
            <h5 className="text-white mb-4 text-2xl">
              Complete Web Development Course
            </h5>
            <p className="text-white/50 mb-2 text-lg">
              <span className="mr-2 text-white/90">Institution:</span>{" "}
              Programming Hero (Batch-10)
            </p>
            <p className="text-white/50 mb-2 text-lg">
              <span className="mr-2 text-white/90">Duration: </span> June 2024
              to January 2025
            </p>
            <p className="text-white/50 text-lg">
              <span className="mr-2 text-white/90">Address:</span> Online
            </p>
          </div>
        </div>

        {/* =====================BASIS SEIP================= */}
        <div className="relative w-full overflow-hidden flex-1 p-4 rounded-lg border border-white/20">
          <ShineBorder shineColor={["#FFFFFF", "#3B82F6"]} />
          <div>
            <h5 className="text-2xl text-white mb-4">
              Professional Web Design
            </h5>
            <p className="text-white/50 mb-2 text-lg">
              <span className="mr-2 text-white/90">Institution:</span> BASIS
              SEIP
            </p>
            <p className="text-white/50 mb-2 text-lg">
              <span className="mr-2 text-white/90">Duration:</span> 9th April
              2023 to 25th June 2023
            </p>
            <p className="text-white/50 text-lg">
              <span className="mr-2 text-white/90">Address: </span> Karwan
              Bazar, Dhaka, Bangladesh
            </p>
          </div>
        </div>

        {/* =====================UY LAB================= */}
        <div className="relative w-full overflow-hidden flex-1 p-4 rounded-lg border border-white/20">
          <ShineBorder shineColor={["#FFFFFF", "#3B82F6"]} />
          <div>
            <h5 className="text-2xl text-white mb-4">
              Professional Web Design and Development
            </h5>
            <p className="text-white/50 mb-2 text-lg">
              <span className="mr-2 text-white/90">Institution:</span> UY LAB
            </p>
            <p className="text-white/50 mb-2 text-lg">
              <span className="mr-2 text-white/90">Duration:</span> 30th January
              2023 to 24th July 2023
            </p>
            <p className="text-white/50 text-lg">
              <span className="mr-2 text-white/90">Address: </span> Wireless
              Gate Rd, Mohakhali, Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
