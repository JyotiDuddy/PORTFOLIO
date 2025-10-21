// import React from "react";

// const projects = [
//   {
//     title: "MovieFlix (Netflix Clone)",
//     desc: "A responsive Netflix clone built using React, TMDB API, and Tailwind CSS.",
//     tech: ["React", "Tailwind CSS", "API"],
//     live: "https://movieflix-by-jyoti.netlify.app/",
//     code: "https://github.com/JyotiDuddy/Netflix",
//     image: "/Netflix.png",
//   },
//   {
//     title: "YouTube Clone",
//     desc: "A YouTube clone built with React and YouTube API.",
//     tech: ["React", "API", "Tailwind CSS"],
//     live: "https://jyotiduddy-youtube.netlify.app/",
//     code: "https://github.com/JyotiDuddy/YOUTUBE",
//     image: "/Youtube.png",
//   },
//   {
//     title: "Jyoti Swiggy Clone",
//     desc: "A Swiggy clone to explore restaurant menus and simulate online ordering.",
//     tech: ["React", "Tailwind CSS", "API"],
//     live: "https://jyotiswiggy.netlify.app/",
//     code: "https://github.com/JyotiDuddy/SWIGGY",
//     image: "/Swiggy.png",
//   },
// ];

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="min-h-screen px-6 md:px-20 py-20 bg-gradient-to-b from-sky-50 to-white"
//     >
//       <h2 className="text-5xl md:text-6xl font-bold text-sky-600 text-center mb-3">
//         My Projects
//       </h2>
//       <p className="text-gray-600 text-xl md:text-2xl text-center mb-12">
//         Some of my featured works
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//         {projects.map((project) => (
//           <div
//             key={project.title}
//             className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 border border-gray-100"
//           >
//             {/* Image Section */}
//             <div className="relative w-full h-64 overflow-hidden group">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-500 flex items-center justify-center">
//                 <span className="text-white text-base opacity-0 group-hover:opacity-100 transition duration-500 font-medium tracking-wide">
//                   View Preview
//                 </span>
//               </div>
//             </div>

//             {/* Content Section */}
//             <div className="p-6 flex flex-col justify-between h-[250px]">
//               <div>
//                 <h3 className="text-2xl font-semibold text-gray-800 mb-2">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {project.desc}
//                 </p>

//                 <div className="flex flex-wrap gap-2 mt-4">
//                   {project.tech.map((tech) => (
//                     <span
//                       key={tech}
//                       className="text-xs px-2 py-1 border border-sky-200 rounded-full text-sky-600 bg-sky-50"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Buttons Section */}
//               <div className="flex gap-4 mt-6">
//                 <a
//                   href={project.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex-1 text-center bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 rounded-lg transition duration-300 shadow-sm hover:shadow-md"
//                 >
//                   Live Demo
//                 </a>
//                 <a
//                   href={project.code}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex-1 text-center border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white font-medium py-2 rounded-lg transition duration-300 shadow-sm hover:shadow-md"
//                 >
//                   View Code
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "MovieFlix (Netflix Clone)",
    desc: "A responsive Netflix clone built using React, TMDB API, and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "API"],
    live: "https://myflix-jyoti.netlify.app/",
    code: "https://github.com/JyotiDuddy/Netflix",
    image: "/Netflix.png",
  },
  {
    title: "YouTube Clone",
    desc: "A YouTube clone built with React and YouTube API.",
    tech: ["React", "API", "Tailwind CSS"],
    live: "https://jyoti-youtube.netlify.app/",
    code: "https://github.com/JyotiDuddy/YOUTUBE",
    image: "/Youtube.png",
  },
  {
    title: "Jyoti Swiggy Clone",
    desc: "A Swiggy clone to explore restaurant menus and simulate online ordering.",
    tech: ["React", "Tailwind CSS", "API"],
    live: "https://jyotiswiggy.netlify.app/",
    code: "https://github.com/JyotiDuddy/SWIGGY",
    image: "/Swiggy.png",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 md:px-20 py-20 bg-gradient-to-b from-[#001F1F] to-[#002A2A] text-white"
    >
      <h2 className="text-5xl md:text-6xl font-bold text-teal-400 drop-shadow-[0_0_15px_#00FFD1] text-center mb-3">
        My Projects
      </h2>
      <p className="text-gray-300 text-xl md:text-2xl text-center mb-12">
        Some of my featured works
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 border border-teal-500"
          >
            {/* Image Section */}
            <div className="relative w-full h-64 overflow-hidden group rounded-t-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-teal-500 bg-opacity-0 group-hover:bg-opacity-30 transition duration-500 flex items-center justify-center rounded-t-2xl">
                <span className="text-white text-base opacity-0 group-hover:opacity-100 transition duration-500 font-medium tracking-wide">
                  View Preview
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col justify-between h-[280px]">
              <div>
                <h3 className="text-2xl font-semibold text-teal-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 border border-teal-400 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400 text-black font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons Section */}
              <div className="flex gap-4 mt-6">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-teal-400 hover:bg-teal-500 text-black font-medium py-2 rounded-lg transition duration-300 shadow-sm hover:shadow-md"
                >
                  Live Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black font-medium py-2 rounded-lg transition duration-300 shadow-sm hover:shadow-md"
                >
                  View Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
