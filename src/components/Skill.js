// import React from "react";
// import { motion } from "framer-motion";

// const skills = [
//   "React",
//   "Redux",
//   "React Router",
//   "Jest",
//   "JavaScript",
//   "Tailwind CSS",
//   "HTML",
//   "CSS",
//   "Git / GitHub",
//   "Node.js",
// ];

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="py-20 px-6 md:px-20 bg-gradient-to-b from-blue-50 to-white flex flex-col items-center"
//     >
//       {/* Title */}
//       <h2 className="text-5xl md:text-6xl font-bold text-sky-600 text-center mb-4">
//         Skills
//       </h2>
//       <p className="text-gray-600 text-center mb-12 text-xl md:text-2xl">
//         Technologies and tools I work with
//       </p>

//       {/* Skills Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 w-full max-w-4xl">
//         {skills.map((skill) => (
//           <motion.div
//             key={skill}
//             whileHover={{ scale: 1.1, backgroundColor: "#0ea5e9", color: "#fff" }}
//             transition={{ type: "spring", stiffness: 200 }}
//             className="flex items-center justify-center px-5 py-4 bg-white rounded-2xl shadow-md font-semibold cursor-default text-sky-600 hover:shadow-xl"
//           >
//             {skill}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;



import React from "react";
import { motion } from "framer-motion";
import { 
  FaReact, 
  FaJsSquare, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaNodeJs 
} from "react-icons/fa";
import { SiRedux, SiReactrouter, SiTailwindcss, SiJest } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-400 w-6 h-6" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500 w-6 h-6" /> },
  { name: "React Router", icon: <SiReactrouter className="text-red-500 w-6 h-6" /> },
  { name: "Jest", icon: <SiJest className="text-pink-500 w-6 h-6" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 w-6 h-6" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 w-6 h-6" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 w-6 h-6" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600 w-6 h-6" /> },
  { name: "Git / GitHub", icon: <FaGitAlt className="text-red-500 w-6 h-6" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-6 h-6" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-20 bg-gradient-to-b from-[#001F1F] to-[#002A2A] flex flex-col items-center text-white"
    >
      {/* Title */}
      <h2 className="text-5xl md:text-6xl font-bold text-teal-400 drop-shadow-[0_0_15px_#00FFD1] text-center mb-4">
        Skills
      </h2>
      <p className="text-gray-300 text-center mb-12 text-xl md:text-2xl">
        Technologies and tools I work with
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 w-full max-w-4xl">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.1, backgroundColor: "#00FFD1", color: "#000" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex items-center gap-2 justify-center px-5 py-4 bg-gray-800 rounded-2xl shadow-md font-semibold cursor-default text-teal-400 hover:shadow-xl"
          >
            {skill.icon}
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
