"use client";
import {
  LuBriefcase,
  LuCalendar,
  LuMapPin,
  LuCircleCheck,
} from "react-icons/lu";
import Title from "./Title";

const experiences = [
  {
    title: "Software Engineer",
    company: "ANA Soft",
    dateRange: "14/06/2026 — Present",
    arrangement: "Full Time • Onsite",
    location: "Banasree, Dhaka",
    highlights: [
      "Developing Mobile app and Web using modern technologies like Next.js and Nest.js, and React Native.",
      "Collaborated with team members to add new features via APIs and ensure the final product can handle growth smoothly.",
      "Building smooth mobile features using React Native for both ios and android devices and integrating advanced AI-driven features",
      "focusing on smart data saving and fast state updates so the app responds instantly without lagging.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "AxentraLab",
    dateRange: "03/01/2026 — 31/05/2026",
    arrangement: "Full Time • Remote",
    location: "Dhanmondi, Dhaka",
    highlights: [
      "Developed SaaS products using modern technologies like Next.js and Nest.js, successfully integrating advanced AI-driven features.",
      "Engineered scalable backend architectures and optimized data workflows using Node.js, PostgreSQL, Prisma, and RAG (Retrieval-Augmented Generation).",
      "Collaborated with team members to add new features via APIs and ensure the final product can handle growth smoothly.",
      "Built smooth mobile features using React Native, focusing on smart data saving and fast state updates so the app responds instantly without lagging.",
    ],
  },
  {
    title: "Backend Developer",
    company: "SM Technology",
    dateRange: "06/2025 — 12/2025",
    arrangement: "Full Time • Onsite",
    location: "H-14, Main Road, Block - A, Banasree, Rampura, Dhaka-1219",
    highlights: [
      "Developed SaaS products, designed and deployed scalable RESTful APIs utilizing Next.js Nest.js, Express.js, PostgreSQL, and Prisma, successfully integrating advanced AI-driven features.",
      "Engineered cross-platform mobile features using React Native, integrating complex backend RESTful APIs to ensure real-time data sync and smooth user experiences.",
      "Implemented robust JWT authentication and Role-Based Access Control (RBAC) to enforce strict application security.",
      "Integrated Stripe and PayPal payment gateways alongside AWS cloud services for secure transaction processing, asset storage, and deployment.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-16 w-full overflow-hidden">
      {/* Background Glow to match Hero/About */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 blur-[140px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Title category="Experience" title1="Professional" title2="Journey" />

        <div className="relative md:pl-12 md:border-l border-white/10 md:ml-4 flex flex-col gap-12 md:gap-16">
          {experiences.map((job) => (
            <div key={job.company} className="relative">
              <div className="hidden md:absolute -left-6 top-0 w-12 h-12 rounded-full bg-[#0a0a0a] border border-white/10 md:flex items-center justify-center text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                <LuBriefcase size={20} />
              </div>

              <div className="group relative p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] bg-white/2 border border-white/10 hover:border-indigo-500/30 hover:bg-indigo-500/1 transition-all duration-500 jellyfish-card">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl text-white/90 font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-2 text-indigo-400/80 font-semibold text-lg italic">
                      {job.company}
                    </div>
                    <div className="flex items-start gap-2 text-white/40 max-w-md italic">
                      <LuMapPin className="mt-1 shrink-0" size={18} />
                      <p className="text-sm leading-relaxed">{job.location}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row lg:flex-col gap-3 text-sm">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70">
                      <LuCalendar className="text-indigo-500" size={16} />
                      {job.dateRange}
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                      {job.arrangement}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {job.highlights.map((item, idx) => (
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

                <div className="absolute bottom-0 right-10 w-32 h-1 bg-linear-to-r from-transparent via-indigo-500/50 to-transparent blur-sm" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
