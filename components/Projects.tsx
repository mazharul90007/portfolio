"use client";

import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dp6urj3gj/image/upload/v1765627636/bd-destinationERD_pftztz.png",
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
      "https://res.cloudinary.com/dp6urj3gj/image/upload/v1765627636/bd-destinationERD_pftztz.png",
    name: "NestTree",
    type: "Real Estate Marketplace",
    description:
      "A dynamic marketplace where users can browse, list, and manage properties with admin and agent control.",
    liveLink: "https://nesttree-d03bc.web.app/",
    githubClient: "https://github.com/mazharul90007/nesttree-client",
    githubServer: "https://github.com/mazharul90007/nesttree-server",
    tags: ["React", "Firebase", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dp6urj3gj/image/upload/v1765627636/bd-destinationERD_pftztz.png",
    name: "Recommendo",
    type: "Product Recommendation Platform",
    description:
      "Users can request and suggest product recommendations with authentication and moderation features.",
    liveLink: "https://recommendo-b1c90.web.app/",
    githubClient: "https://github.com/mazharul90007/recommendo",
    githubServer: "https://github.com/mazharul90007/recommendo-server",
    tags: ["React", "Firebase", "Node.js", "MongoDB"],
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
      <div className="space-y-14">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-base-200 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow"
          >
            {/* Image */}
            <div className="relative w-full h-[320px] md:h-[400px] overflow-hidden rounded-xl">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
            </div>

            {/* Content */}
            <div
              className={`flex flex-col ${index % 2 !== 0 ? "lg:order-1" : ""}`}
            >
              <h3 className="text-2xl md:text-3xl font-bold">{project.name}</h3>
              <p className="text-primary font-medium mt-1">{project.type}</p>

              <p className="text-base-content/70 mt-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full border border-base-content/20 bg-base-100"
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
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-content hover:opacity-90 transition"
                >
                  <FiExternalLink /> Live Demo
                </a>

                <a
                  href={project.githubClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-base-content/30 hover:bg-base-300 transition"
                >
                  <FiGithub /> Client
                </a>

                {project.githubServer && (
                  <a
                    href={project.githubServer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-base-content/30 hover:bg-base-300 transition"
                  >
                    <FiGithub /> Server
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
