import { motion } from "framer-motion";
import { fadeUpItem, fadeUpStagger } from "../animation";
import profileImg from "../assets/profile.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import CountUp from "react-countup";
import ParticlesBg from "./ParticlesBg";
import resumePdf from "../assets/Senabadhy's_RESUME.pdf";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 flex items-center overflow-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      {/* Background Particles */}
      <ParticlesBg />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <motion.div variants={fadeUpStagger} initial="hidden" animate="visible">
          {/* Badge */}
          <motion.span
            variants={fadeUpItem}
            className="inline-block mb-4 text-sm font-medium bg-primary/10 text-primary px-4 py-1 rounded-full"
          >
            Open to Internships & Full-Time Roles
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={fadeUpItem}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Hi, I’m <span className="text-primary">Sena</span>
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            variants={fadeUpItem}
            className="mt-4 text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300"
          >
            Full Stack Developer (React · MERN · Cloud)
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUpItem}
            className="mt-6 text-gray-700 dark:text-gray-400 max-w-xl leading-relaxed"
          >
            I build scalable, performance-focused web applications with clean
            UI, strong architecture, and real-world problem solving. Experienced
            in React, backend integration, and cloud-based systems.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeUpItem}
            className="mt-8 grid grid-cols-3 gap-6 max-w-md"
          >
            <div>
              <h3 className="text-3xl font-bold text-primary">
                <CountUp end={3} duration={2} />+
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-primary">
                <CountUp end={1} duration={2} />+
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-primary">
                <CountUp end={10} duration={2} />+
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Technologies
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUpItem}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a href={resumePdf} download className="btn-outline">
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl"></div>

            <img
              src={profileImg}
              alt="Sena profile"
              loading="lazy"
              width="320"
              height="320"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-primary/40 shadow-xl dark:border-primary/60 transition-colors duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
