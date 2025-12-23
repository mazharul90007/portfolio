"use client";

import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dp6urj3gj/image/upload/v1766114389/EzyTicket_jg6den.webp",
    name: "Ezy Ticket",
    type: "Online Ticket Booking Website",
    description:
      "EzyTicket is an online ticket booking platform with secure payments, role-based dashboards, and full CRUD functionality.",
    liveLink: "https://ezyticket-7198b.web.app/",
    githubClient: "https://github.com/mazharul90007/ezyTicket-client",
    githubServer: "https://github.com/mazharul90007/ezyTicket-server-2",
    tags: ["React", "TypeScript", "Firebase", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dp6urj3gj/image/upload/v1766476698/workboard-ss_wfjxlh.png",
    name: "Work Board",
    type: "Task Management Website",
    description:
      "WORK BOARD is a task management platform. The platform supports user and assigned task management using modern frontend and backend technologies.",
    liveLink: "https://workboard-client.vercel.app/",
    githubClient: "https://github.com/mazharul90007/work-board-client",
    githubServer: "https://github.com/mazharul90007/workboard-server",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "TanStack Query",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Zod",
      "Vercel",
    ],
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dp6urj3gj/image/upload/v1765627636/bd-destinationERD_pftztz.png",
    name: "BD-DESTINATION",
    type: "BD Travel information website (server)",
    description:
      "BD Destination is a travel guide platform built with Node.js, Express, and TypeScript, offering comprehensive information about beautiful tourist destinations in Bangladesh.",
    liveLink: "https://bd-destination.vercel.app",
    githubClient: "https://bd-destination.vercel.app",
    githubServer: "https://github.com/mazharul90007/bd-destination",
    tags: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "Postgresql",
      "Prisma",
      "JWT",
      "Zod",
      "Cloudinary",
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="py-16 w-full">
      <p className="text-white/50 font-medium text-xl md:text-2xl mb-4">
        <span className="mr-2">||</span>Projects
      </p>
      <h2 className="text-5xl text-sub font-semibold mb-16">
        A showcase of my work
      </h2>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="shadow-md rounded-lg overflow-hidden border border-white/20 p-4"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Image */}
              <div
                className={`w-full lg:w-7/12 h-[380px] lg:h-[450px] overflow-y-auto hide-scrollbar rounded-lg border border-white/10
  ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={1400}
                  height={2000}
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="w-full h-auto"
                  priority={index === 0}
                />
              </div>

              {/* Content */}
              <div
                className={`flex flex-col lg:w-5/12
  ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
              >
                <h3 className="text-2xl md:text-3xl font-bold">
                  {project.name}
                </h3>
                <p className="text-white/90 text-lg font-medium mt-1">
                  {project.type}
                </p>

                <p className="text-white/50 text-lg mt-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg bg-white/10 hover:bg-white/20 hover:scale-105  transition-transform duration-300"
                  >
                    <FiExternalLink /> Live Demo
                  </a>

                  <a
                    href={project.githubClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg bg-white/10  hover:bg-white/20 hover:scale-105  transition-transform duration-300"
                  >
                    <FiGithub /> Client
                  </a>

                  {project.githubServer && (
                    <a
                      href={project.githubServer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-105  transition-transform duration-300"
                    >
                      <FiGithub /> Server
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
