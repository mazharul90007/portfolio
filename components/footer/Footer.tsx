"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        {/* Footer Text */}
        <p className="text-white/50 text-lg">
          © {new Date().getFullYear()} miSourabh. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/mazharul90007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 hover:text-white text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mazharul-islam-sourabh-4111b3227/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 hover:text-white text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 hover:text-white text-2xl"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:mazharul90006@gmail.com"
            className="text-white/90 hover:text-white text-2xl"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
