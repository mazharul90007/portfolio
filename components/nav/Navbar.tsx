"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import brand from "@/public/images/brand.png";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/#projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-black/60 backdrop-blur-xl border-b border-white/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo Section */}
        <Link href="/" className="group flex items-center gap-3">
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
        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-6 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-white ${
                  pathname === link.href ? "text-white" : "text-white/40"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/resume/Resume_of_Sourabh.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-2.5 px-5 rounded-xl text-xs font-bold uppercase tracking-widest text-black bg-white hover:bg-indigo-500 hover:text-white transition-all duration-300 shadow-lg shadow-white/5 hover:shadow-indigo-500/20"
          >
            Resume
            <RiArrowRightDoubleFill size={16} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white z-60 hover:bg-white/10 transition-colors"
          aria-label="Toggle Menu"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* --- MOBILE NAVIGATION --- */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-70 bg-[#0a0a0a] border-l border-white/10 shadow-2xl transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 px-8 py-32">
          {navLinks.map((link, idx) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${idx * 50}ms` }}
              className={`text-sm font-bold uppercase tracking-[0.3em] transition-all ${
                pathname === link.href
                  ? "text-indigo-500 translate-x-2"
                  : "text-white/40 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="h-px w-full bg-white/10 mt-4" />

          <Link
            href="/resume/Resume_of_Sourabh.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 rounded-xl py-4 text-xs font-bold uppercase tracking-widest text-black bg-white hover:bg-indigo-500 hover:text-white transition-all duration-300"
          >
            Resume
            <RiArrowRightDoubleFill size={16} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
