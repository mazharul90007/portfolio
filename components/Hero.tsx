"use client";
import Image from "next/image";
import Link from "next/link";
import { LuDownload } from "react-icons/lu";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";
import { BorderBeam } from "@/components/ui/border-beam";

const Hero = () => {
  return (
    <section className="relative w-full flex flex-col md:flex-row items-center justify-between gap-12 pt-20 pb-8 md:pt-28 md:pb-12">
      {/* Dynamic Ambient Glows */}
      <div className="absolute -top-20 -left-10 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600/10 blur-[120px] rounded-full" />

      <div className="flex-1 z-10 text-center md:text-left">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs md:text-sm font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Available for Projects
        </div>

        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none text-white">
          Hello! I&apos;m <br />
          <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Mazharul Islam
          </span>
        </h1>

        <p className="max-w-xl text-lg md:text-xl text-white/50 font-medium mt-6 mb-10 leading-relaxed">
          Full Stack Web Developer crafting high-performance, user-centric
          applications with the modern web stack.
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <Link
            href="/resume/Resume_of_Sourabh.pdf"
            target="blank"
            className="group flex items-center gap-2 py-3 px-8 rounded-full bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-all duration-300 shadow-lg shadow-indigo-500/20"
          >
            View Resume
            <LuDownload className="group-hover:translate-y-1 transition-transform" />
          </Link>

          {/* Social Dock */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            {[
              { href: "https://github.com/mazharul90007", icon: FaGithub },
              { href: "https://linkedin.com/in/misourabh", icon: FaLinkedin },
              { href: "https://facebook.com/mazharul90005", icon: FaFacebook },
            ].map((social, i) => (
              <Link
                key={i}
                href={social.href}
                target="_blank"
                className="p-3 text-white/60 hover:text-indigo-400 hover:bg-white/10 rounded-full transition-all"
              >
                <social.icon size={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Image with Purple/Blue Beam */}
      <div className="relative shrink-0 group">
        <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full group-hover:bg-indigo-500/30 transition-all duration-500" />
        <div className="relative rounded-full p-1 bg-linear-to-b from-white/20 to-transparent">
          <div className="rounded-full overflow-hidden border-4 border-[#0a0a0a] bg-[#111]">
            <Image
              src="/images/sourabh.png"
              height={320}
              width={320}
              alt="Sourabh"
              className="object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <BorderBeam
            duration={6}
            size={300}
            className="from-transparent via-blue-500 to-transparent"
          />
          <BorderBeam
            duration={6}
            size={300}
            className="to-transparent via-purple-500 from-transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
