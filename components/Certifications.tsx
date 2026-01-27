"use client";
import { LuAward, LuCalendar, LuMapPin, LuExternalLink } from "react-icons/lu";
import { ShineBorder } from "@/components/ui/shine-border";

const certData = [
  {
    title: "Next Level Web Development 3.0",
    institution: "Programming Hero (Batch-6)",
    duration: "October 2025 — Present",
    address: "Online",
    color: "#6366f1",
    // Featured Background: Wide gradient
    bgClass:
      "bg-linear-to-r from-indigo-500/[0.12] via-purple-500/[0.05] to-transparent",
    isFeatured: true,
  },
  {
    title: "Complete Web Development",
    institution: "Programming Hero (Batch-10)",
    duration: "June 2024 — Jan 2025",
    address: "Online",
    color: "#6366f1",
    bgClass:
      "bg-linear-to-b from-indigo-500/[0.07] via-transparent to-transparent",
    isFeatured: false,
  },
  {
    title: "Professional Web Design",
    institution: "BASIS SEIP",
    duration: "April 2023 — June 2023",
    address: "Karwan Bazar, Dhaka",
    color: "#a855f7",
    bgClass:
      "bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.12),transparent_70%)]",
    isFeatured: false,
  },
  {
    title: "Web Design & Development",
    institution: "UY LAB",
    duration: "Jan 2023 — July 2023",
    address: "Mohakhali, Dhaka",
    color: "#3b82f6",
    bgClass:
      "bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.12),transparent_70%)]",
    isFeatured: true,
  },
];

const Certifications = () => {
  return (
    <section className="relative py-16 w-full overflow-hidden">
      {/* Global Background Glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-600/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-indigo-500 font-bold tracking-[0.2em] uppercase text-xs mb-6">
          <span className="w-10 h-px bg-indigo-500"></span>
          Credentials
        </div>

        <h2 className="text-5xl md:text-7xl font-bold text-white mb-16 tracking-tight leading-tight">
          Industry <br />
          <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certData.map((cert, idx) => (
            <div
              key={idx}
              className={`relative group p-8 rounded-[2.5rem] border border-white/10 hover:border-indigo-500/40 transition-all duration-500 overflow-hidden flex flex-col justify-between backdrop-blur-3xl 
                ${cert.isFeatured ? "lg:col-span-2" : "col-span-1"} 
                ${cert.bgClass}`}
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
                  className={`font-bold text-white mb-4 leading-tight group-hover:text-white transition-colors
                  ${cert.isFeatured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"}`}
                >
                  {cert.title}
                </h3>

                <div className="space-y-3 mb-8">
                  <p
                    className="font-semibold text-sm transition-colors"
                    style={{ color: cert.color }}
                  >
                    {cert.institution}
                  </p>

                  <div className="flex items-center gap-2 text-white/40 text-xs font-medium">
                    <LuCalendar size={14} className="text-indigo-500" />
                    <span>{cert.duration}</span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="relative z-10 pt-6 border-t border-white/5 flex items-center justify-between">
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
