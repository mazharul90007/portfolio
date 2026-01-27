"use client";
import { FaReact, FaNodeJs, FaGithub, FaFigma, FaDocker } from "react-icons/fa";
import {
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiFirebase,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiDaisyui,
  SiShadcnui,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiZod,
  SiJsonwebtokens,
  SiMongoose,
  SiHyperskill,
  SiNestjs,
} from "react-icons/si";
import { BiLogoVisualStudio, BiCheck } from "react-icons/bi";
import {
  AiOutlineCode,
  AiOutlineDatabase,
  AiOutlineTool,
} from "react-icons/ai";
import { RiBearSmileFill } from "react-icons/ri";
import { MdDesignServices } from "react-icons/md";
import { IconType } from "react-icons/lib";

const frontendTech = [
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Zustand", icon: RiBearSmileFill, color: "#443E38" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "DaisyUI", icon: SiDaisyui, color: "#1AD1A5" },
  { name: "Shadcn", icon: SiShadcnui, color: "#ffffff" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
];

const backendTech = [
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Nest.js", icon: SiNestjs, color: "#E0234E" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Prisma", icon: SiPrisma, color: "#ffffff" },
  { name: "Mongoose", icon: SiMongoose, color: "#880000" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "JWT", icon: SiJsonwebtokens, color: "#ffffff" },
  { name: "Zod", icon: SiZod, color: "#3E67B1" },
];

const designTech = [
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
  {
    name: "Photoshop",
    icon: SiAdobephotoshop,
    color: "#31A8FF",
  },
  {
    name: "Illustrator",
    icon: SiAdobeillustrator,
    color: "#FF9A00",
  },
];

const toolTech = [
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  {
    name: "VSCode",
    icon: BiLogoVisualStudio,
    color: "#007ACC",
  },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
];

const Skills = () => {
  const SkillIcon = ({
    icon: Icon,
    name,
    color,
  }: {
    icon: IconType;
    name: string;
    color: string;
  }) => (
    <div className="flex flex-col gap-1 items-center">
      <div className="flex relative w-14 h-14 md:w-24 md:h-24 rounded-2xl bg-white/5 border border-white/10 items-center justify-center transition-all duration-300 group-hover/item:bg-white/15 group-hover/item:-translate-y-2 group-hover/item:border-white/30">
        <Icon
          size={36}
          style={{ color }}
          className="drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
        />
        {/* Intense Hover Glow */}
        <div
          className="absolute inset-0 blur-2xl opacity-0 group-hover/item:opacity-40 transition-opacity rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
      <span className="text-[10px] md:text-xs text-white/40 font-bold uppercase tracking-widest group-hover/item:text-white transition-colors">
        {name}
      </span>
    </div>
  );

  return (
    <section className="relative py-24 w-full overflow-hidden">
      {/* Intense Background Glows */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-indigo-600/10 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-blue-600/10 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 text-indigo-500 font-bold tracking-[0.2em] uppercase text-xs mb-6">
          <span className="w-10 h-px bg-indigo-500"></span>
          Abilities
        </div>
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-16 tracking-tight">
          Technical <br />
          <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Toolbox
          </span>
        </h2>

        {/* ===============Card Sections============== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* 1. Frontend - Featured Wide Card */}
          <div className="lg:col-span-3 relative group p-10 rounded-[3rem] border border-white/10 overflow-hidden bg-[#0a0a0a]">
            {/* Eye-Catching Background Glow */}
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-600/20 blur-[100px] rounded-full group-hover:bg-blue-600/30 transition-colors duration-700" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-12">
                <AiOutlineCode className="text-blue-400" size={32} />
                <h3 className="text-xl font-bold text-white tracking-widest uppercase italic">
                  Frontend Mastery
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {frontendTech.map((s) => (
                  <SkillIcon key={s.name} {...s} />
                ))}
              </div>
            </div>
          </div>

          {/* 2. Backend - Standard Card */}
          <div className="lg:col-span-2 relative group p-10 rounded-[3rem] border border-white/10 overflow-hidden bg-[#0a0a0a]">
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-purple-600/20 blur-[100px] rounded-full group-hover:bg-purple-600/30 transition-colors duration-700" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-12">
                <AiOutlineDatabase className="text-purple-400" size={32} />
                <h3 className="text-xl font-bold text-white tracking-widest uppercase italic">
                  Backend
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {backendTech.map((s) => (
                  <SkillIcon key={s.name} {...s} />
                ))}
              </div>
            </div>
          </div>

          {/* 3. Design Tools - Standard Card */}
          <div className="lg:col-span-2 relative group p-10 rounded-[3rem] border border-white/10 overflow-hidden bg-[#0a0a0a]">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-pink-600/20 blur-[80px] rounded-full" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-12">
                <MdDesignServices className="text-pink-400" size={32} />
                <h3 className="text-xl font-bold text-white tracking-widest uppercase italic">
                  Design
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {designTech.map((s) => (
                  <SkillIcon key={s.name} {...s} />
                ))}
              </div>
            </div>
          </div>

          {/* 4. Dev Tools - Featured Wide Card */}
          <div className="lg:col-span-3 relative group p-10 rounded-[3rem] border border-white/10 overflow-hidden bg-[#0a0a0a]">
            <div className="absolute inset-0 bg-linear-to-r from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-12">
                <AiOutlineTool className="text-indigo-400" size={32} />
                <h3 className="text-xl font-bold text-white tracking-widest uppercase italic">
                  Workflow Tools
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {toolTech.map((s) => (
                  <SkillIcon key={s.name} {...s} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className=" mt-6 group p-10 rounded-[3rem] border border-white/10 bg-white/2 backdrop-blur-3xl overflow-hidden relative">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full" />
          <h3 className="text-white font-bold uppercase tracking-[0.3em] text-xs mb-8 flex items-center gap-3">
            <SiHyperskill className="text-indigo-500 animate-pulse" /> Core
            Strengths
          </h3>
          <div className="flex flex-wrap gap-4">
            {[
              "Problem Solving",
              "Adaptability",
              "Collaboration",
              "Time Management",
              "Critical Thinking",
              "Creativity",
              "Attention to Detail",
            ].map((s) => (
              <div
                key={s}
                className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white/50 text-xs font-bold uppercase tracking-widest hover:border-indigo-500/50 hover:text-indigo-400 hover:bg-indigo-500/5 transition-all cursor-default flex items-center gap-2"
              >
                <BiCheck size={18} className="text-indigo-500" /> {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
