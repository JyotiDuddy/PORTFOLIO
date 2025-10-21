// import React from "react";
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="relative w-full min-h-[75vh] flex flex-col md:flex-row items-center justify-center px-8 md:px-20 bg-gradient-to-b from-white via-sky-50 to-sky-100 overflow-hidden"
//     >
//       <motion.div
//         className="flex-1 flex flex-col justify-center text-center md:text-left space-y-5"
//         initial={{ x: -50, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">👋 Hi, I’m</h2>
//         <h1 className="text-5xl md:text-6xl font-bold text-sky-600 leading-tight">Jyoti Duddy</h1>
//         <h3 className="text-xl md:text-2xl font-medium text-gray-600">Frontend / React Developer</h3>
//         <p className="text-gray-500 max-w-lg mx-auto md:mx-0 text-base md:text-lg leading-relaxed">
//           I craft interactive and responsive web experiences using React and modern tools.
//         </p>

//         <div className="flex justify-center md:justify-start gap-4 mt-4">
//           <motion.a
//             href="#contact"
//             whileHover={{ scale: 1.05 }}
//             className="bg-sky-600 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-sky-700 transition"
//           >
//             Hire Me
//           </motion.a>
//           <motion.a
//             href="#projects"
//             whileHover={{ scale: 1.05 }}
//             className="border border-sky-600 text-sky-600 px-6 py-3 rounded-lg text-lg font-medium hover:bg-sky-600 hover:text-white transition"
//           >
//             View Projects
//           </motion.a>
//         </div>
//       </motion.div>

//       <motion.div
//         className="flex-1 flex justify-center items-center mt-6 md:mt-0"
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <motion.img
//           src="https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-5932693-4865609.png"
//           alt="Developer"
//           className="w-72 md:w-96 rounded-2xl shadow-2xl border-4 border-white object-cover"
//           whileHover={{ scale: 1.05, rotate: 1 }}
//           transition={{ type: "spring", stiffness: 120 }}
//         />
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;


// import React from "react";
// import { motion } from "framer-motion";
// import Tilt from "react-parallax-tilt";
// // import developerImg from "../assets/developer.png"; // use your own image

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 bg-gradient-to-br from-white via-gray-50 to-teal-50 overflow-hidden"
//     >
//       {/* Left Section */}
//       <motion.div
//         className="flex-1 flex flex-col justify-center text-center md:text-left space-y-5"
//         initial={{ x: -80, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
//           👋 Hi, I’m
//         </h2>
//         <h1 className="text-5xl md:text-6xl font-extrabold text-primary leading-tight">
//           Jyoti Duddy
//         </h1>
//         <motion.h3
//           className="text-xl md:text-2xl font-medium text-gray-600"
//           animate={{ opacity: [0, 1], y: [10, 0] }}
//           transition={{ delay: 0.8, duration: 0.8 }}
//         >
//           Frontend / React Developer
//         </motion.h3>

//         <p className="text-gray-500 max-w-lg mx-auto md:mx-0 text-base md:text-lg leading-relaxed">
//           I create sleek, responsive, and interactive web experiences using
//           React, Tailwind, and Framer Motion.
//         </p>

//         <div className="flex justify-center md:justify-start gap-4 mt-4">
//           <motion.a
//             href="#contact"
//             whileHover={{ scale: 1.05 }}
//             className="bg-primary text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-secondary transition"
//           >
//             Hire Me
//           </motion.a>
//           <motion.a
//             href="#projects"
//             whileHover={{ scale: 1.05 }}
//             className="border border-primary text-primary px-6 py-3 rounded-lg text-lg font-medium hover:bg-primary hover:text-white transition"
//           >
//             View Projects
//           </motion.a>
//         </div>
//       </motion.div>

//       {/* Right Section with 3D tilt effect */}
//       <motion.div
//         className="flex-1 flex justify-center items-center mt-10 md:mt-0"
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <Tilt
//           tiltMaxAngleX={15}
//           tiltMaxAngleY={15}
//           perspective={1000}
//           scale={1.05}
//           transitionSpeed={2000}
//           className="p-4 rounded-2xl bg-white/40 backdrop-blur-xl shadow-2xl border border-white/30"
//         >
//           {/* <motion.img
//             src={developerImg}
//             alt="Developer Illustration"
//             className="w-72 md:w-96 rounded-2xl"
//             whileHover={{ rotate: 2, scale: 1.03 }}
//             transition={{ type: "spring", stiffness: 120 }}
//           /> */}
//         </Tilt>
//       </motion.div>

//       {/* Decorative glow */}
//       <div className="absolute w-72 h-72 bg-teal-300/30 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
//       <div className="absolute w-64 h-64 bg-gray-300/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>
//     </section>
//   );
// };

// export default Hero;

// Hero.jsx



// import React from "react";
// import { motion } from "framer-motion";
// import Tilt from "react-parallax-tilt";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-10 md:px-24 bg-gradient-to-b from-black via-[#001F1F] to-[#002A2A] text-white overflow-hidden"
//     >
//       {/* Glow Background */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_25%,rgba(45,212,191,0.15),transparent_70%)]"></div>

//       {/* Left Content */}
//       <motion.div
//         className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-8 z-10"
//         initial={{ x: -80, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h3 className="text-teal-400 text-xl font-semibold tracking-wide">
//           👋 Hello, I'm
//         </h3>
//         <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-[0_0_15px_#00FFD1]">
//           Jyoti Duddy
//         </h1>
//         <h2 className="text-3xl md:text-4xl font-semibold text-gray-300">
//           Frontend Developer | React Specialist
//         </h2>
//         <p className="text-gray-400 max-w-2xl leading-relaxed text-lg">
//           I design and build elegant, interactive, and high-performance web
//           experiences using React, Tailwind, and modern JavaScript. Passionate
//           about crafting UI with smooth animations and great usability.
//         </p>

//         <div className="flex justify-center md:justify-start gap-6 mt-4">
//           <motion.a
//             href="#projects"
//             whileHover={{ scale: 1.08 }}
//             className="bg-teal-500 text-black px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-teal-400 transition"
//           >
//             View Projects
//           </motion.a>
//           <motion.a
//             href="#contact"
//             whileHover={{ scale: 1.08 }}
//             className="border border-teal-400 text-teal-400 px-8 py-3 rounded-xl font-semibold hover:bg-teal-400 hover:text-black transition"
//           >
//             Contact Me
//           </motion.a>
//         </div>
//       </motion.div>

//       {/* Right Image */}
//       <motion.div
//         className="flex-1 flex justify-center items-center mt-12 md:mt-0 z-10"
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <Tilt
//           glareEnable={true}
//           glareMaxOpacity={0.4}
//           glareColor="#00FFD1"
//           glarePosition="all"
//           tiltMaxAngleX={10}
//           tiltMaxAngleY={10}
//           perspective={800}
//         >
//           <motion.img
//             src="/jyoti.jpeg"
//             alt="Jyoti Duddy"
//             className="w-80 md:w-[28rem] rounded-[3rem] shadow-[0_0_40px_#00FFD1] border-2 border-teal-400 object-cover"
//             whileHover={{ scale: 1.05, rotate: 1 }}
//             transition={{ type: 'spring', stiffness: 120 }}
//           />
//         </Tilt>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;


import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-10 md:px-24 bg-gradient-to-b from-black via-[#001F1F] to-[#002A2A] text-white overflow-hidden"
    >
      {/* Inline Keyframes for gradient animation */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      {/* Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_25%,rgba(45,212,191,0.15),transparent_70%)]"></div>

      {/* Left Content */}
      <motion.div
        className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-8 z-10"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-teal-400 text-xl font-semibold tracking-wide">
          👋 Hello, I'm
        </h3>
        {/* Animated Gradient Name */}
        <h1
          className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text drop-shadow-[0_0_15px_#00FFD1]"
          style={{
            backgroundImage:
              "linear-gradient(270deg, #00FFD1, #FF0080, #FFD700, #00FFD1)",
            backgroundSize: "600% 600%",
            animation: "gradientMove 5s ease infinite",
          }}
        >
          Jyoti Duddy
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-300">
          Frontend Developer | React Specialist
        </h2>
        <p className="text-gray-400 max-w-2xl leading-relaxed text-lg">
          I design and build elegant, interactive, and high-performance web
          experiences using React, Tailwind, and modern JavaScript. Passionate
          about crafting UI with smooth animations and great usability.
        </p>

        <div className="flex justify-center md:justify-start gap-6 mt-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.08 }}
            className="bg-teal-500 text-black px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-teal-400 transition"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08 }}
            className="border border-teal-400 text-teal-400 px-8 py-3 rounded-xl font-semibold hover:bg-teal-400 hover:text-black transition"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="flex-1 flex justify-center items-center mt-12 md:mt-0 z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.4}
          glareColor="#00FFD1"
          glarePosition="all"
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={800}
        >
          <motion.img
            src="/jyoti.jpeg"
            alt="Jyoti Duddy"
            className="w-80 md:w-[28rem] rounded-[3rem] shadow-[0_0_40px_#00FFD1] border-2 border-teal-400 object-cover"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </Tilt>
      </motion.div>
    </section>
  );
};

export default Hero;
