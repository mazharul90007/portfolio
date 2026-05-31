"use client";
import { LuAward, LuCalendar, LuMapPin, LuExternalLink } from "react-icons/lu";
import { ShineBorder } from "@/components/ui/shine-border";
import Title from "./Title";

const certData = [
  {
    id: 1,
    title: "Next Level Web Development 3.0",
    institution: "Programming Hero (Batch-6)",
    duration: "October 2025 — May 2026",
    address: "Online",
    color: "#6366f1",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Complete Web Development",
    institution: "Programming Hero (Batch-10)",
    duration: "June 2024 — Jan 2025",
    address: "Online",
    color: "#a855f7",
    isFeatured: false,
  },
  {
    id: 3,
    title: "React Native - The Practical Guide",
    institution: "Udemy - Academind by Maximilian Schwarzmuller",
    duration: "November 2025 — March 2026",
    address: "Online",
    color: "#6366f1",
    isFeatured: false,
  },
  {
    id: 4,
    title: "Professional Web Design",
    institution: "BASIS SEIP",
    duration: "April 2023 — June 2023",
    address: "Karwan Bazar, Dhaka",
    color: "#a855f7",
    isFeatured: false,
  },
  {
    id: 5,
    title: "Web Design & Development",
    institution: "UY LAB",
    duration: "Jan 2023 — July 2023",
    address: "Mohakhali, Dhaka",
    color: "#3b82f6",
    isFeatured: false,
  },
];

const Certifications = () => {
  return (
    <section className="relative py-16 w-full overflow-hidden">
      {/* Global Background Glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-600/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Title
          category="Credentials"
          title1="Industry"
          title2="Certifications"
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certData.map((cert, idx) => (
            <div
              key={idx}
              className={`relative group p-6 rounded-3xl md:rounded-[2.5rem] bg-white/2 border border-white/10 hover:border-indigo-500/40 transition-all duration-500 overflow-hidden flex flex-col justify-between jellyfish-card 
                ${cert.isFeatured ? "lg:col-span-2" : "col-span-1"} 
               `}
            >
              {/* ShineBorder effect */}
              <ShineBorder
                className="absolute inset-0 bg-transparent"
                color={cert.color}
              />

              <div className="relative z-10">
                {/* Header: Icon and Progress Badge for Featured */}
                <div className="flex justify-between items-start mb-8">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 border border-white/10"
                    style={{
                      backgroundColor: `${cert.color}15`,
                      color: cert.color,
                    }}
                  >
                    <LuAward
                      size={24}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </div>

                  {cert.duration.includes("Present") && (
                    <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] uppercase tracking-widest font-bold animate-pulse">
                      In Progress
                    </span>
                  )}
                </div>

                <h3
                  className={`font-bold text-white/90 mb-4 leading-tight group-hover:text-white transition-colors
                  ${cert.isFeatured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"}`}
                >
                  {cert.title}
                </h3>

                <div className="space-y-3 mb-4">
                  <p className="font-semibold text-md transition-colors text-indigo-400/80">
                    {cert.institution}
                  </p>

                  <div className="flex items-center gap-2 text-white/40 text-xs font-medium">
                    <LuCalendar size={14} className="text-indigo-500" />
                    <span>{cert.duration}</span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="relative z-10 pt-2 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-white/30 text-xs italic">
                  <LuMapPin size={12} />
                  <span>{cert.address}</span>
                </div>
                <div
                  className="p-2 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"
                  style={{ color: cert.color }}
                >
                  <LuExternalLink size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
