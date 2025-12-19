"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import brand from "@/public/images/brand.png";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 xl:px-0">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
            <Image
              src={brand}
              width={40}
              height={40}
              alt="Brand"
              className="rounded-lg"
            />
          </div>
          <span className="text-2xl font-semibold text-white playfair">
            miSourabh
          </span>
        </Link>

        {/* Navigation Links */}
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
        {/* CTA Button */}
        <Link
          href="/resume/Resume_of_Sourabh.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 py-2 px-4 rounded-2xl border border-white/20 text-xl font-medium  text-white bg-white/10"
        >
          Resume
          <RiArrowRightDoubleFill className="h-4 w-4" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle Menu"
        >
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="flex flex-col gap-6 px-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-xl font-medium ${
                  pathname === link.href ? "text-white" : "text-white/70"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Resume Button */}
            <Link
              href="/resume/Resume_of_Sourabh.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-white/20 py-3 text-lg font-medium text-white bg-white/10"
            >
              Resume
              <RiArrowRightDoubleFill className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
