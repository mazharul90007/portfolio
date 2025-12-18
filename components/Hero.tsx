"use client";
import Image from "next/image";
import Link from "next/link";
import { LuDownload } from "react-icons/lu";
import { Play, SkipBack, SkipForward } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="relative w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20 py-12">
      {/* Text content */}
      <div className="flex-3">
        <h1 className="text-5xl md:text-7xl text-sub font-bold leading-tight md:leading-normal">
          Hello! I&apos;m <br /> Mazharul Islam Sourabh
        </h1>
        <p className="text-white/50 font-medium text-xl md:text-2xl mt-6 mb-16">
          Full Stack Web developer
        </p>

        <Link
          href="/resume/Resume_of_Sourabh.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 py-3 px-6 rounded-3xl border border-white/20 text-lg md:text-xl font-medium bg-transparent text-white w-fit cursor-pointer bg-white/10"
        >
          View Resume
          <LuDownload className="" />
        </Link>
        <div></div>
      </div>

      {/* Image */}
      <div className="relative rounded-full border border-white/20 p-2">
        <Image
          src="/images/sourabh.png"
          height={300}
          width={300}
          alt="Sourabh"
          className="rounded-full object-cover"
        />
        <BorderBeam
          duration={6}
          size={400}
          className="from-transparent via-red-500 to-transparent"
        />
        <BorderBeam
          duration={6}
          delay={3}
          size={400}
          borderWidth={2}
          className="from-transparent via-blue-500 to-transparent"
        />
      </div>
    </section>
  );
};

export default Hero;
