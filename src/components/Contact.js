// import React, { useRef } from "react";
// import emailjs from "emailjs-com";
// import { motion } from "framer-motion";

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_8v8dm5m",
//         "template_5i9lm0y",
//         form.current,
//         "YOUR_PUBLIC_KEY"
//       )
//       .then(() => {
//         alert("✅ Message sent successfully!");
//         form.current.reset();
//       })
//       .catch(() => {
//         alert("❌ Failed to send. Please try again.");
//       });
//   };

//   return (
//     <section
//       id="contact"
//       className="flex justify-center items-center min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 px-6 py-20"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-lg"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold text-center text-indigo-600 mb-8">
//           Get in Touch 💬
//         </h2>

//         <form
//           ref={form}
//           onSubmit={sendEmail}
//           className="flex flex-col gap-5"
//         >
//           <input
//             type="text"
//             name="user_name"
//             placeholder="Your Name"
//             required
//             className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg"
//           />
//           <input
//             type="email"
//             name="user_email"
//             placeholder="Your Email"
//             required
//             className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg"
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             required
//             rows="6"
//             className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg"
//           />

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             className="bg-indigo-600 text-white font-bold py-4 rounded-xl shadow-md hover:bg-indigo-700 transition-all duration-300 text-lg"
//           >
//             Send Message 🚀
//           </motion.button>
//         </form>
//       </motion.div>
//     </section>
//   );
// };

// export default Contact;
// // add phone number , add email, add linkedin 
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8v8dm5m",
        "template_5i9lm0y",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        alert("❌ Failed to send. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#001F1F] via-[#002A2A] to-black px-6 py-20 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900 rounded-3xl shadow-2xl p-10 w-full max-w-lg"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center text-teal-400 drop-shadow-[0_0_15px_#00FFD1] mb-8">
          Get in Touch 💬
        </h2>

        {/* Contact Info */}
        <div className="flex flex-col gap-4 mb-8 text-gray-300">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-teal-400" />
            <a href="mailto:jyotiduddy00@gmail.com" className="hover:text-teal-400 transition">
              jyotiduddy00@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-teal-400" />
            <a href="tel:8700449293" className="hover:text-teal-400 transition">
              +91 8700449293
            </a>
          </div>
          <div className="flex items-center gap-3">
            {/* <FaLinkedin className="text-teal-400" />
            <a
              href="https://www.linkedin.com/in/jyoti-duddy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              linkedin.com/in/jyoti-duddy
            </a> */}
            <FaLinkedin className="text-teal-400" />
<a
  href="https://www.linkedin.com/in/jyoti-duddy-892416353/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-teal-400 transition"
>
  linkedin.com/in/jyoti-duddy-892416353
</a>

          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-5"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-4 rounded-xl border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400 text-lg text-white"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-4 rounded-xl border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400 text-lg text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="6"
            className="p-4 rounded-xl border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400 text-lg text-white"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-teal-400 text-black font-bold py-4 rounded-xl shadow-md hover:bg-teal-500 transition-all duration-300 text-lg"
          >
            Send Message 🚀
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
