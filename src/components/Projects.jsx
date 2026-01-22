import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animation";

export default function Projects() {
  const projects = [
    {
      title: "PNM Trans – Logistics & Transportation",
      desc: "A responsive and visually appealing frontend for a logistics and cargo transport platform. Users can explore services, track shipments, and view transport information seamlessly.",
    },
    {
      title: "MERN Blog",
      desc: "A full-stack blogging platform where users can register, create, edit, and delete posts, view authors, and manage their profiles. Includes rich text editing and media uploads for dynamic content.",
    },

    {
      title: "Task Management System",
      desc: "A web-based application to create, manage, and track daily tasks efficiently. Users can add, update, and delete tasks through a clean and intuitive interface.",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 max-w-7xl mx-auto px-6 transition-colors duration-500"
    >
      {/* Section Title */}
      <h2 className="section-title text-gray-900 dark:text-gray-100">
        Projects
      </h2>

      {/* Projects Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            variants={fadeUp}
            key={project.title}
            className="glass-card p-6 hover:-translate-y-2 hover:shadow-xl transition transform duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-400 mt-2">
              {project.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
