// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeUpItem, fadeUpStagger } from "../animation";
import { GraduationCap, BookOpen, Code } from "lucide-react";

export default function About() {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "SRM University",
      year: "2022 - 2026",
      // score: "CGPA: 8.96/10", // Placeholder
    },
    {
      degree: "Class XII (CBSE)(MPC)",
      institution: "Kendriya Vidyalaya",
      year: "2020 - 2022",
      // score: "73.2", // Placeholder
    },
    {
      degree: "Class X (CBSE) (MPCB)",
      institution: "Kendriya Vidyalaya",
      year: "2019 - 2020",
      // score: "73.2", // Placeholder
    },
  ];

  return (
    <section
      id="about"
      className="py-24 max-w-6xl mx-auto px-6 transition-colors duration-500"
    >
      <motion.div
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Title */}
        <motion.h2
          variants={fadeUpItem}
          className="section-title text-gray-900 dark:text-gray-100"
        >
          About Me
        </motion.h2>

        {/* Intro Description */}
        <motion.p
          variants={fadeUpItem}
          className="text-center text-gray-700 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto mt-8 text-lg"
        >
          I am a Computer Science student specializing in{" "}
          <span className="font-semibold text-primary">Full Stack Development</span> and{" "}
          <span className="font-semibold text-primary">Cloud Computing</span>. I enjoy building
          scalable web applications and exploring AI-powered solutions. I have
          experience in <span className="font-semibold text-primary">React</span>,{" "}
          <span className="font-semibold text-primary">MERN stack</span>, and cloud-based
          systems.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* My Journey */}
          <motion.div variants={fadeUpItem} className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3 text-gray-900 dark:text-gray-100">
              <Code className="text-primary" />
              My Journey
            </h3>
            <div className="text-gray-700 dark:text-gray-400 leading-relaxed space-y-4 text-lg">
              <p>
                My fascination with technology began with a curiosity about how things work on the internet, which soon 
                turned into a passion for software development. Over the years, I’ve immersed myself in 
                <span className="text-primary font-medium"> Full Stack Development</span> and 
                <span className="text-primary font-medium"> Cloud Computing</span>, building projects that solve real-world problems.
              </p>
              <p>
                I’ve worked on diverse projects, from AR/VR applications and IoT-based solutions to full-fledged 
                web apps like a responsive MERN stack blog, doctor appointment booking platform, and a food donation system. 
                Each project has strengthened my skills in <span className="text-primary font-medium">React, Node.js, TypeScript</span>, and cloud technologies.
              </p>
              <p>
                I continuously learn and stay updated with the latest trends in AI and web technologies, striving to 
                create scalable, efficient, and impactful solutions.
              </p>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={fadeUpItem} className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3 text-gray-900 dark:text-gray-100">
              <GraduationCap className="text-primary" />
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="glass-card p-6 border-l-4 border-l-primary hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-primary/10 text-primary whitespace-nowrap">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">
                    {edu.institution}
                  </p>
                  {/* Optional Score */}
                  {/* <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {edu.score}
                  </p> */}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
