"use client";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import brand from "@/public/images/brand.png";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Education", href: "/#education" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // 1. Handle Scroll Effect & Intersection Observer
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // Fallback: If at the very top, set active to home
      if (window.scrollY < 100) setActiveSection("home");
    };

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px", // Triggers when section is in upper-mid screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 2. Smooth Scroll Handler
  const handleSmoothScroll = (e: React.MouseEvent, href: string) => {
    if (href === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setOpen(false);
    } else if (href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setOpen(false);
    }
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all px-4 duration-300 ${
        scrolled
          ? "py-4 bg-black/60 backdrop-blur-xl border-b border-white/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex  items-center justify-between overflow-x-hidden">
        {/* Logo Section */}
        <Link
          href="/"
          onClick={(e) => handleSmoothScroll(e, "/")}
          className="group flex items-center gap-3"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            <Image
              src={brand}
              fill
              alt="Brand"
              className="p-1.5 object-contain rounded-xl"
            />
          </div>
          <span className="text-xl font-bold text-white tracking-tighter uppercase italic">
            mi<span className="text-indigo-500">Sourabh</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-6 px-6 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const sectionId =
                link.href === "/" ? "home" : link.href.replace("/#", "");
              const isActive = activeSection === sectionId;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-white ${
                    isActive ? "text-indigo-400 scale-105" : "text-white/50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/cv/CV_of_Sourabh.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center gap-2 py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-widest text-black bg-white hover:bg-indigo-500 hover:text-white transition-all duration-300 shadow-lg shadow-white/5 hover:shadow-indigo-500/20"
          >
            View CV
            <RiArrowRightDoubleFill
              size={16}
              className="transform group-hover/btn:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center p-2 rounded-xl bg-white/5 border border-white/10 text-white z-60"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* --- MOBILE NAVIGATION --- */}
      <div
        className={`fixed inset-0 bg-black/50 w-full h-screen transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-60 bg-[#0a0a0a] border-l border-white/10 shadow-2xl transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 px-8 py-32 h-screen bg-black/60 overflow-y-auto">
          {navLinks.map((link) => {
            const sectionId =
              link.href === "/" ? "home" : link.href.replace("/#", "");
            const isActive = activeSection === sectionId;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`text-sm font-bold uppercase tracking-[0.3em] transition-all ${
                  isActive
                    ? "text-indigo-500 translate-x-2"
                    : "text-white/40 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Mobile CTA moved inside the container */}
          <Link
            href="/cv/CV_of_Sourabh.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 group/btn flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-xs font-bold uppercase tracking-widest text-black bg-white hover:bg-indigo-500 hover:text-white transition-all duration-300 shadow-lg shadow-white/5 hover:shadow-indigo-500/20"
          >
            View CV
            <RiArrowRightDoubleFill
              size={16}
              className="transform group-hover/btn:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
