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

  // Prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <nav className="relative z-50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 xl:px-0">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-white overflow-hidden">
            <Image src={brand} fill alt="Brand" className="rounded-lg" />
          </div>
          <span className="text-2xl font-semibold text-white playfair">
            miSourabh
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-2xl font-medium transition-colors hover:text-white ${
                pathname === link.href ? "text-white" : "text-white/50"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <Link
          href="/resume/Resume_of_Sourabh.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 py-1.5 md:py-3 px-2 md:px-4 rounded-xl md:rounded-2xl text-lg md:text-xl font-medium text-white border border-white/20 bg-white/10  hover:bg-white/20  transition-transform duration-300"
        >
          Resume
          <RiArrowRightDoubleFill className="h-4 w-4" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white z-[60]"
          aria-label="Toggle Menu"
        >
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* --- MOBILE SIDEBAR MODAL --- */}

      {/* 1. Backdrop (The Blur & Overlay) */}
      <div
        className={`fixed inset-0 bg-black/10 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)} // Close when clicking outside
      />

      {/* 2. Side Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-50 bg-[#121212] border-l border-white/10 shadow-2xl transition-transform duration-300 ease-in-out transform md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 px-6 py-24">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-2xl font-medium transition-colors ${
                pathname === link.href
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Resume Button */}
          <Link
            href="/resume/Resume_of_Sourabh.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 w-fit flex items-center justify-center gap-2 rounded-xl  py-1.5 px-3 text-lg font-medium text-white   border border-white/20 bg-white/10  hover:bg-white/20 transition-transform duration-300"
          >
            Resume
            <RiArrowRightDoubleFill className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
