// import React from "react";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="min-h-[75vh] flex flex-col md:flex-row items-center justify-center px-8 md:px-20 py-20 bg-gradient-to-b from-white to-sky-50"
//     >
//       <div className="flex-1 flex justify-center mb-10 md:mb-0">
//         <img
//           src="https://media.licdn.com/dms/image/v2/D5603AQEvittYuO7urg/profile-displayphoto-shrink_800_800/B56ZWFD9_wGsAc-/0/1741694166410?e=1763596800&v=beta&t=P_u1O-NydWXOytigTII68lrhnkUCpZAo4JpNWEDCK08"
//           alt="Jyoti Duddy"
//           className="w-72 md:w-96 rounded-2xl shadow-lg object-cover"
//         />
//       </div>

//       <div className="flex-1 text-center md:text-left space-y-6">
//         <h2 className="text-4xl md:text-5xl font-bold text-sky-600">About Me</h2>
//         <p className="text-gray-600 text-lg leading-relaxed">
//           I’m <span className="font-semibold text-sky-500">Jyoti Duddy</span>, a passionate Frontend Developer focused on creating clean, responsive web apps.
//         </p>
//         <p className="text-gray-600 text-lg leading-relaxed">
//           I love bringing ideas to life through code and design, and continuously improving my skills to contribute to impactful projects.
//         </p>

//         <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
//           {["React","Redux","React Router","Jest","Tailwind CSS","HTML","CSS","JavaScript","Git / GitHub"].map(skill => (
//             <span key={skill} className="bg-sky-100 text-sky-600 px-4 py-2 rounded-lg font-medium shadow-sm hover:bg-sky-600 hover:text-white transition">
//               {skill}
//             </span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[75vh] flex flex-col items-center justify-center px-8 md:px-20 py-20 bg-gradient-to-b from-black via-[#001F1F] to-[#002A2A] text-white"
    >
      <div className="max-w-4xl text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-400 drop-shadow-[0_0_15px_#00FFD1]">
          About Me
        </h2>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          I’m <span className="font-semibold text-teal-400">Jyoti Duddy</span>, a passionate Frontend Developer focused on creating clean, responsive, and high-performance web apps.
        </p>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          I love bringing ideas to life through code and design, crafting elegant UI/UX, and continuously improving my skills to contribute to impactful projects.
        </p>

        <h3 className="text-2xl md:text-3xl font-semibold text-teal-300 mt-6">
          Technologies I Work With
        </h3>

        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {[
            "React",
            "Redux",
            "React Router",
            "Jest",
            "Tailwind CSS",
            "HTML",
            "CSS",
            "JavaScript",
            "Git / GitHub",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-gradient-to-r from-teal-500 via-cyan-400 to-blue-400 text-black px-4 py-2 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
