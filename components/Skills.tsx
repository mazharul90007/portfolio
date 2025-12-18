import StarBorder from "./StarBorder";
import { FaReact, FaNodeJs, FaGithub, FaFigma } from "react-icons/fa";
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
} from "react-icons/si";
import { BiLogoVisualStudio, BiCheck } from "react-icons/bi";
import {
  AiOutlineCode,
  AiOutlineDatabase,
  AiOutlineTool,
} from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";

const skills = {
  Frontend: [
    { name: "Next.js", icon: SiNextdotjs, color: "bg-gray-500" },
    { name: "React", icon: FaReact, color: "bg-blue-500" },
    { name: "Redux", icon: SiRedux, color: "bg-purple-600" },
    { name: "TypeScript", icon: SiTypescript, color: "bg-blue-600" },
    { name: "JavaScript", icon: SiJavascript, color: "bg-yellow-500" },
    { name: "Firebase", icon: SiFirebase, color: "bg-orange-500" },
    { name: "Shadcn UI", icon: SiShadcnui, color: "bg-slate-700" },
    { name: "DaisyUI", icon: SiDaisyui, color: "bg-teal-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "bg-blue-400" },
    { name: "Bootstrap", icon: SiBootstrap, color: "bg-purple-600" },
    { name: "HTML5", icon: SiHtml5, color: "bg-orange-600" },
    { name: "CSS3", icon: SiCss3, color: "bg-blue-600" },
  ],
  Backend: [
    { name: "Node.js", icon: FaNodeJs, color: "bg-green-600" },
    { name: "Postgresql", icon: SiPostgresql, color: "bg-blue-600" },
    { name: "Prisma", icon: SiPrisma, color: "bg-gray-600" },
    { name: "Express.js", icon: SiExpress, color: "bg-slate-600" },
    { name: "MongoDB", icon: SiMongodb, color: "bg-green-700" },
    { name: "Mongoose", icon: SiMongoose, color: "bg-red-800" },
    { name: "JWT", icon: SiJsonwebtokens, color: "bg-blue-900" },
    { name: "Zod", icon: SiZod, color: "bg-sky-600" },
  ],
  "Dev Tools": [
    { name: "GitHub", icon: FaGithub, color: "bg-slate-900" },
    { name: "VSCode", icon: BiLogoVisualStudio, color: "bg-blue-600" },
    { name: "Postman", icon: SiPostman, color: "bg-orange-600" },
    { name: "MongoDB Compass", icon: SiMongodb, color: "bg-green-600" },
  ],
  "Design Tools": [
    { name: "Figma", icon: FaFigma, color: "bg-purple-500" },
    { name: "Photoshop", icon: SiAdobephotoshop, color: "bg-blue-700" },
    { name: "Illustrator", icon: SiAdobeillustrator, color: "bg-orange-700" },
  ],
};

const categoryIcons = {
  Frontend: AiOutlineCode,
  Backend: AiOutlineDatabase,
  "Dev Tools": AiOutlineTool,
  "Design Tools": MdDesignServices,
};

const softSkills = [
  "Communication Skills",
  "Problem Solving",
  "Teamwork & Collaboration",
  "Adaptability",
  "Attention to Detail",
  "Time Management",
  "Critical Thinking",
  "Creativity",
];

const Skills = () => {
  return (
    <section className="py-12 w-full">
      <div className="max-w-7xl mx-auto">
        <p className="text-white/50 font-medium text-xl md:text-2xl mb-4">
          <span className="mr-2">||</span>Tech Skills
        </p>
        <h2 className="text-5xl text-sub font-semibold mb-16">
          My Core tools for development
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, skillList]) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons];
            return (
              <div key={category}>
                <h3 className="text-2xl md:text-3xl font-bold text-white/90 mb-4 flex items-center gap-3">
                  <Icon className="w-7 h-7" />
                  {category}
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
                  {skillList.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <StarBorder
                        key={skill.name}
                        as="button"
                        className="custom-class"
                        color="white"
                        speed="5s"
                      >
                        <div className="rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 p-2 flex items-center gap-4">
                          <div
                            className={`${skill.color} w-14 h-14 rounded-xl flex items-center justify-center text-white/90 flex-shrink-0`}
                          >
                            <SkillIcon className="w-8 h-8" />
                          </div>
                          <span className="text-white/50 font-semibold text-lg">
                            {skill.name}
                          </span>
                        </div>
                      </StarBorder>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white/90 mb-4 flex items-center gap-3">
            <span>
              <SiHyperskill />
            </span>
            Soft Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {softSkills.map((skill) => {
              return (
                <div
                  key={skill}
                  className=" border border-white/20 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 p-4 flex items-center gap-4"
                >
                  <span>
                    <BiCheck />
                  </span>
                  <span className="text-white/50 font-semibold text-lg">
                    {skill}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
