"use client";

import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { BiCodeAlt } from "react-icons/bi";

const projects = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dp6urj3gj/image/upload/v1769278587/workboard_j5hlmt.png",
    name: "Work Board",
    type: "Task Management Website",
    description:
      "WORK BOARD is a task management platform supporting user and assigned task management using modern frontend and backend technologies.",
    liveLink: "https://workboard-client.vercel.app/",
    githubClient: "https://github.com/mazharul90007/work-board-client",
    githubServer: "https://github.com/mazharul90007/workboard-server-nestjs",
    color: "#6366f1",
    bgClass:
      "bg-linear-to-br from-indigo-500/[0.1] via-purple-500/[0.03] to-transparent",
    tags: [
      "Next.js 15",
      "Nest.js",
      "PostgreSQL",
      "Prisma",
      "Zustand",
      "TypeScript",
    ],
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dp6urj3gj/image/upload/v1765627636/bd-destinationERD_pftztz.png",
    name: "BD-DESTINATION",
    type: "Travel Information Guide",
    description:
      "A travel guide platform built with Node.js and Express, offering comprehensive information about beautiful tourist destinations in Bangladesh.",
    liveLink: "https://bd-destination.vercel.app",
    githubServer: "https://github.com/mazharul90007/bd-destination",
    color: "#10b981",
    bgClass:
      "bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.1),transparent_70%)]",
    tags: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Prisma", "Zod"],
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dp6urj3gj/image/upload/v1766114389/EzyTicket_jg6den.webp",
    name: "Ezy Ticket",
    type: "Online Ticket Booking Website",
    description:
      "EzyTicket is an online ticket booking platform with secure payments, role-based dashboards, and full CRUD functionality.",
    liveLink: "https://ezyticket-7198b.web.app/",
    githubClient: "https://github.com/mazharul90007/ezyTicket-client",
    githubServer: "https://github.com/mazharul90007/ezyTicket-server-2",
    color: "#3b82f6",
    bgClass:
      "bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.1),transparent_70%)]",
    tags: ["React", "TypeScript", "Firebase", "Node.js", "MongoDB", "Stripe"],
  },
];

function Projects() {
  return (
    <section id="projects" className="py-16 relative overflow-hidden">
      {/* Section Background Glows */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-indigo-600/5 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-blue-600/5 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center gap-3 text-indigo-500 font-bold tracking-[0.2em] uppercase text-xs mb-6">
          <span className="w-10 h-px bg-indigo-500"></span>
          Projects
        </div>
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-16 tracking-tight">
          A showcase of <br />
          <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            my work
          </span>
        </h2>

        {/* Project Cards */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`relative flex flex-col lg:flex-row gap-8 items-center group p-6 md:p-8 rounded-[3rem] border border-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-3xl overflow-hidden ${project.bgClass}`}
            >
              {/* Dynamic Animated Glow behind the card */}
              <div
                className="absolute -inset-24 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-[100px] -z-10"
                style={{ backgroundColor: project.color }}
              />

              {/* Image Side */}
              <div
                className={`w-full lg:w-7/12 relative rounded-[2rem] border border-white/10 bg-black/40 p-2 overflow-hidden
                ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="h-80 md:h-100 overflow-y-auto hide-scrollbar rounded-[1.5rem] border border-white/5 relative bg-[#0a0a0a]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={1400}
                    height={2000}
                    quality={95}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                    priority={index === 0}
                  />
                </div>
              </div>

              {/* Content Side */}
              <div
                className={`flex flex-col lg:w-5/12 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
              >
                <div
                  className="flex items-center gap-2 font-mono text-[10px] mb-4 uppercase tracking-[0.2em]"
                  style={{ color: project.color }}
                >
                  <BiCodeAlt size={16} />
                  {project.type}
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                  {project.name}
                </h3>

                <p className="text-white/50 text-base md:text-lg leading-relaxed mb-8 font-medium">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-white transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all duration-300 shadow-xl shadow-white/5"
                  >
                    <FiExternalLink size={16} /> Live Demo
                  </a>

                  <div className="flex gap-3">
                    {project.githubClient && (
                      <a
                        href={project.githubClient}
                        target="_blank"
                        className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-indigo-500/50 transition-all"
                      >
                        <FiGithub size={20} />
                      </a>
                    )}
                    {project.githubServer && (
                      <a
                        href={project.githubServer}
                        target="_blank"
                        className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-indigo-500/50 transition-all"
                      >
                        <HiOutlineCodeBracket size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
