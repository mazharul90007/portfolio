"use client";
import {
  LuGraduationCap,
  LuCalendar,
  LuMapPin,
  LuBookOpen,
} from "react-icons/lu";
import { ShineBorder } from "@/components/ui/shine-border";
import Title from "./Title";

const educationData = [
  {
    degree: "Bachelor of Science in Mathematics",
    institution: "Government Titumir College, Dhaka",
    year: "Graduated 2020",
    address: "A.K. Khandakar Road, Mohakhali, Dhaka",
    details: "Focus on Analytical Logic & Computational Foundations",
    icon: LuBookOpen,
    bgClass:
      "bg-linear-to-b from-indigo-500/[0.09] via-transparent to-blue-500/[0.06]",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Government Science College, Dhaka",
    year: "2012 — 2014",
    address: "34/B, West Farmgate, Tejturi Bazar, Dhaka",
    details: "Science Group • Major in Physics, Chemistry & Higher Math",
    icon: LuGraduationCap,
    bgClass:
      "bg-linear-to-br from-purple-500/[0.08] via-transparent to-blue-500/[0.06]",
  },
];

const Education = () => {
  return (
    <section id="education" className="relative py-16 w-full overflow-hidden">
      {/* Background Glow to match Hero */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Title category="Education" title1="Academic" title2="Foundations" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="group relative p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] bg-white/2 border border-white/10 hover:border-indigo-500/30 hover:bg-indigo-500/1 transition-all duration-500 jellyfish-card"
            >
              {/* Magic Shine Effect */}
              <ShineBorder
                className="absolute inset-0 bg-transparent"
                color="#6366f1"
              />

              <div className="relative z-10">
                {/* Icon & Year */}
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20 group-hover:scale-110 transition-transform duration-500">
                    <edu.icon size={28} />
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/50 text-sm font-medium">
                    <LuCalendar className="text-indigo-500" size={14} />
                    {edu.year}
                  </div>
                </div>

                {/* Degree & Institution */}
                <h3 className="text-2xl md:text-3xl font-bold text-white/90 mb-3 leading-tight group-hover:text-indigo-400 transition-colors duration-300">
                  {edu.degree}
                </h3>
                <p className="text-indigo-400/80 font-semibold mb-6 italic">
                  {edu.institution}
                </p>

                {/* Details & Address */}
                <div className="space-y-4">
                  <p className="text-white/60 text-base md:text-lg leading-relaxed">
                    {edu.details}
                  </p>

                  <div className="flex items-start gap-2 text-white/30 text-sm">
                    <LuMapPin className="shrink-0 mt-1" size={16} />
                    <span>{edu.address}</span>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
