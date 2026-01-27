"use client";
import {
  LuBriefcase,
  LuCalendar,
  LuMapPin,
  LuCircleCheck,
} from "react-icons/lu";

const Experience = () => {
  return (
    <section className="relative py-16 w-full overflow-hidden">
      {/* Background Glow to match Hero/About */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 blur-[140px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-indigo-500 font-bold tracking-[0.2em] uppercase text-xs mb-6">
          <span className="w-10 h-px bg-indigo-500"></span>
          Experience
        </div>

        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 md:mb-12 tracking-tight">
          Professional <br />
          <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Journey
          </span>
        </h2>

        {/* Experience Timeline Item */}
        <div className="relative md:pl-12 md:border-l border-white/10 md:ml-4">
          {/* Timeline Dot/Icon */}
          <div className="hidden md:absolute -left-6 top-0 w-12 h-12 rounded-full bg-[#0a0a0a] border border-white/10 md:flex items-center justify-center text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
            <LuBriefcase size={20} />
          </div>

          {/* Main Experience Card */}
          <div className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white/2 border border-white/10 hover:border-indigo-500/30 hover:bg-indigo-500/1 transition-all duration-500">
            {/* Header Info */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-10">
              <div>
                <h3 className="text-3xl md:text-4xl text-white font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                  Backend Developer
                </h3>
                <div className="flex items-center gap-2 text-indigo-400/80 font-semibold text-lg italic">
                  SM Technology
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 text-sm">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70">
                  <LuCalendar className="text-indigo-500" size={16} />
                  06/2025 — 10/2025
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  Full Time • Onsite
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-2 mb-10 text-white/40 max-w-md italic">
              <LuMapPin className="mt-1 shrink-0" size={18} />
              <p className="text-sm leading-relaxed">
                H-14, Main Road, Block - A, Banasree, Rampura, Dhaka-1219
              </p>
            </div>

            {/* Responsibilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Designed scalable REST APIs using Node.js, Nest.js, Express.js TypeScript, Prisma & PostgreSQL",
                "Implemented secure RBAC and JWT-based authentication systems",
                "Integrated Stripe & PayPal for safe real-time payment processing",
                "Optimized asset storage using AWS S3 cloud infrastructure",
                "Configured Nginx Reverse Proxies and PM2 for production VPS deployment",
                "Managed DNS, SSL certificates, and Domain configurations",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 group/item">
                  <LuCircleCheck
                    className="shrink-0 text-indigo-500 mt-1 group-hover/item:scale-110 transition-transform"
                    size={20}
                  />
                  <p className="text-white/60 leading-relaxed text-base md:text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Subtle Gradient Accent */}
            <div className="absolute bottom-0 right-10 w-32 h-1 bg-linear-to-r from-transparent via-indigo-500/50 to-transparent blur-sm" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
