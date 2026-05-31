"use client";

import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { BiCodeAlt } from "react-icons/bi";
import Title from "./Title";

const projects = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dp6urj3gj/image/upload/v1779446682/chaka-ride_whdqss.png",
    name: "Chaka Ride",
    type: "AI-Powered Ride-Sharing & Car Rental Platform",
    description:
      "A professional, production-grade ride-sharing and car rental ecosystem consisting of a decoupled Next.js frontend and a NestJS/PostgreSQL backend. Features multi-role capabilities (Passenger, Driver, Admin) and advanced AI integrations via OpenRouter. Passengers enjoy a natural-language Smart Trip Assistant for vehicle suggestions, while drivers benefit from a bidding dashboard with an AI-generated Fair Market Price estimator.",
    liveLink: "https://chaka-ride.vercel.app/en",
    githubClient: "https://github.com/mazharul90007/chaka_ride",
    githubServer: "https://github.com/mazharul90007/chaka_ride_server",
    color: "#3b82f6",
    bgClass:
      "bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.1),transparent_70%)]",
    tags: [
      "Next.js 16",
      "NestJS",
      "TypeScript",
      "OpenRouter (AI)",
      "PostgreSQL",
      "Prisma ORM",
      "Better Auth",
      "TanStack Query",
      "Zustand",
      "Framer Motion",
      "Tailwind CSS",
    ],
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dp6urj3gj/image/upload/v1779446133/quick-hire_bmddaz.png",
    name: "Quick Hire",
    type: "Job portal Application",
    description:
      "QUICK HIRE CLIENT is a modern, responsive job portal frontend designed for a seamless recruitment experience. It allows applicants to discover opportunities, manage their profiles, and track applications, while providing administrators with a powerful dashboard for managing job listings and platform operations.",
    liveLink: "https://quick-hire-client-chi.vercel.app",
    githubClient: "https://github.com/mazharul90007/quick-hire",
    githubServer: "https://github.com/mazharul90007/quick-hire-server",
    color: "#6366f1",
    bgClass:
      "bg-linear-to-br from-indigo-500/[0.1] via-purple-500/[0.03] to-transparent",
    tags: [
      "Next.js 15",
      "Zustand",
      "TanStack",
      "ShadcnUI",
      "Express.js",
      "Better Auth",
      "Zod",
      "PostgreSQL",
      "Prisma",
      "TypeScript",
      "Stripe",
      "RAG",
    ],
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dp6urj3gj/image/upload/v1777989355/chemistbd_mkl5ch.png",
    name: "Chemist BD",
    type: "Ecommerce Website",
    description:
      "CHEMIST BD is a modern, responsive e-commerce frontend designed for pharmacies. It provides a seamless experience for customers to browse medicines, manage their cart, and place orders, while offering powerful dashboards for sellers and administrators.",
    liveLink: "https://chemistbd-client.vercel.app",
    githubClient: "https://github.com/mazharul90007/chemist-bd",
    githubServer: "https://github.com/mazharul90007/chemist-bd-server",
    color: "#10b981",
    bgClass:
      "bg-linear-to-tl from-emerald-500/[0.12] via-teal-500/[0.04] to-transparent",
    tags: [
      "Next.js 15",
      "Zustand",
      "TanStack",
      "ShadcnUI",
      "Express.js",
      "Better Auth",
      "PostgreSQL",
      "Prisma",
      "TypeScript",
    ],
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dp6urj3gj/image/upload/v1769278587/workboard_j5hlmt.png",
    name: "Work Board",
    type: "Task Management Website",
    description:
      "WORK BOARD is a task management platform supporting user and assigned task management using modern frontend and backend technologies.",
    liveLink: "https://workboard-client.vercel.app/",
    githubClient: "https://github.com/mazharul90007/work-board-client",
    githubServer: "https://github.com/mazharul90007/workboard-server-nestjs",
    color: "#f59e0b",
    bgClass:
      "bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.12),transparent_68%)]",
    tags: [
      "Next.js 15",
      "Zustand",
      "TanStack",
      "Nest.js",
      "PostgreSQL",
      "Prisma",
      "TypeScript",
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="w-full py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Background Glows */}
        <div className="absolute top-0 right-0 w-125 h-125 bg-indigo-600/5 blur-[150px] rounded-full -z-10" />
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-blue-600/5 blur-[150px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <Title category="Projects" title1="A showcase of" title2="my work" />

          {/* Project Cards */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`relative flex flex-col lg:flex-row gap-8 items-center group p-6 md:p-8 rounded-3xl md:rounded-[3rem] border border-white/15 hover:border-white/20 transition-all duration-500 overflow-hidden jellyfish-card ${project.bgClass}`}
              >
                {/* Dynamic Animated Glow behind the card */}
                <div
                  className="absolute -inset-24 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-[100px] -z-10"
                  style={{ backgroundColor: project.color }}
                />

                {/* Image Side */}
                <div
                  className={`w-full lg:w-7/12 relative rounded-2xl md:rounded-[2rem] border border-white/10 bg-black/40 p-2 overflow-hidden
                ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div
                    data-lenis-prevent
                    className="h-80 md:h-120 overflow-y-auto hide-scrollbar rounded-xl md:rounded-[1.5rem] border border-white/5 relative bg-[#0a0a0a]"
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={1400}
                      height={2000}
                      quality={95}
                      className="w-full h-auto"
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

                  <h3 className="text-3xl md:text-4xl font-bold text-white/90 mb-4 tracking-tight">
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
                      className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/90 text-black font-bold text-xs uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all duration-300 shadow-xl shadow-white/5"
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
      </div>
    </section>
  );
}

export default Projects;
