import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-[#001F1F] to-[#002A2A] text-white px-8 md:px-20 py-10 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Initials */}
        <div>
          <h2 className="text-2xl font-bold text-teal-400 drop-shadow-[0_0_10px_#00FFD1] border-2 border-teal-400 p-3 rounded-full inline-block">
            JD
          </h2>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6">
          {["Home", "About", "Projects", "Skills", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-teal-400 transition-all duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-2xl">
          <a
            href="https://github.com/JyotiDuddy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jyoti-duddy-892416353/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-all duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/jyoti"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-all duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/jyoti"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-all duration-300"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-6 text-sm">
        © {new Date().getFullYear()} Jyoti Duddy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
