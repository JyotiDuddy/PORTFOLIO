// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const links = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Projects", href: "#projects" },
//     { name: "Skills", href: "#skills" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-sky-100 to-white/80 backdrop-blur-md shadow-md">
//       <div className="max-w-6xl mx-auto flex justify-between items-center px-6 md:px-12 h-24">
//         <motion.a
//           href="#home"
//           className="text-3xl md:text-4xl font-bold text-sky-600"
//           whileHover={{ scale: 1.1 }}
//         >
//           JD
//         </motion.a>

//         <nav className="hidden md:flex items-center gap-10 text-gray-700 font-semibold text-lg">
//           {links.map((link) => (
//             <motion.a
//               key={link.href}
//               href={link.href}
//               whileHover={{ scale: 1.05, color: "#0ea5e9" }}
//               transition={{ duration: 0.3 }}
//             >
//               {link.name}
//             </motion.a>
//           ))}
//         </nav>

//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-3xl text-gray-700 focus:outline-none"
//         >
//           {isOpen ? "✖" : "☰"}
//         </button>
//       </div>

//       {isOpen && (
//         <motion.div
//           className="md:hidden bg-white shadow-md py-4 space-y-3 text-center text-gray-700 font-medium"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           {links.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               onClick={() => setIsOpen(false)}
//               className="block hover:text-sky-600 transition"
//             >
//               {link.name}
//             </a>
//           ))}
//         </motion.div>
//       )}
//     </header>
//   );
// };

// export default Navbar;
// Green color
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const links = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Projects", href: "#projects" },
//     { name: "Skills", href: "#skills" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <motion.header
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       className="fixed top-0 w-full z-50 bg-white/30 backdrop-blur-lg border-b border-white/20 shadow-md"
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 h-20">
//         <motion.a
//           href="#home"
//           className="text-3xl font-extrabold text-primary"
//           whileHover={{ scale: 1.1 }}
//         >
//           JD
//         </motion.a>

//         <nav className="hidden md:flex items-center gap-10 text-gray-700 font-semibold text-lg">
//           {links.map((link) => (
//             <motion.a
//               key={link.href}
//               href={link.href}
//               whileHover={{ scale: 1.1, color: "#14b8a6" }}
//               transition={{ duration: 0.3 }}
//               className="transition-colors"
//             >
//               {link.name}
//             </motion.a>
//           ))}
//         </nav>

//         {/* Mobile menu toggle */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-3xl text-gray-700 focus:outline-none"
//         >
//           {isOpen ? "✖" : "☰"}
//         </button>
//       </div>

//       {/* Mobile dropdown */}
//       {isOpen && (
//         <motion.div
//           className="md:hidden bg-white/70 backdrop-blur-md shadow-lg py-4 text-center text-gray-700 font-medium"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           {links.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               onClick={() => setIsOpen(false)}
//               className="block py-2 hover:text-primary transition"
//             >
//               {link.name}
//             </a>
//           ))}
//         </motion.div>
//       )}
//     </motion.header>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-black via-[#001F1F] to-[#002A2A] shadow-[0_0_20px_rgba(0,255,200,0.15)] backdrop-blur-xl border-b border-teal-900/40">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 md:px-16 h-28 gap-20">
        {/* Logo */}
        <motion.a
          href="#home"
          className="text-4xl font-extrabold text-white tracking-wide"
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-white">Jyoti</span>
          <span className="text-teal-400"> Duddy</span>
        </motion.a>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-16 text-gray-300 font-medium text-lg">
          {links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="relative hover:text-teal-400 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              {link.name}
              <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-teal-400 transition-all duration-300 hover:w-full"></span>
            </motion.a>
          ))}

          {/* Social Icons */}
          <div className="flex gap-8 text-3xl ml-10">
            <a
              href="https://github.com/JyotiDuddy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jyoti-duddy-892416353/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-4xl text-gray-300 focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-[#001A1A] text-gray-300 py-6 space-y-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-xl hover:text-teal-400 transition"
            >
              {link.name}
            </a>
          ))}
          <div className="flex justify-center gap-8 text-3xl mt-4">
            <a
              href="https://github.com/JyotiDuddy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jyoti-duddy-892416353/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
