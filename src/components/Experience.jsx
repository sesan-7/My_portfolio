// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experience = [
  {
    role: "CyberSecurity Analyst",
    company: "Nissan Digital India LLP",
    period: "2025 ",
    desc: "Working on advanced security protocols and threat analysis to safeguard enterprise data.",
    location: "Trivandrum, India",
  },
  {
    role: "Full Stack Intern",
    company: "Zer01",
    period: "2025",
    desc: "Built scalable MERN stack applications and optimized RESTful APIs for better performance.",
    location: "Remote",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-gray-900 dark:text-gray-100">
            Professional Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            My journey in the tech industry, building secure and scalable solutions.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 rounded-full hidden md:block" />
          
          {/* Mobile Left Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200 dark:bg-white/10 md:hidden" />

          <div className="space-y-12 md:space-y-24">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } items-start md:items-center gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-4 h-4 md:w-6 md:h-6">
                    <div className="w-4 h-4 md:w-6 md:h-6 bg-primary rounded-full ring-4 ring-white dark:ring-gray-900 shadow-[0_0_15px_rgba(99,102,241,0.5)] z-10" />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-3rem)] pl-20 md:pl-0">
                  <div className="glass-card p-8 hover:border-primary/50 transition-colors duration-300 group">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <span className="flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary w-fit">
                            {exp.period}
                        </span>
                    </div>

                    <div className="flex flex-col gap-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                            <Briefcase size={16} className="text-primary" />
                            <span className="font-medium">{exp.company}</span>
                        </div>
                        {exp.location && (
                             <div className="flex items-center gap-2">
                             <MapPin size={16} className="text-primary" />
                             <span>{exp.location}</span>
                         </div>
                        )}
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>
                
                {/* Empty space for the other side of the timeline on desktop */}
                <div className="hidden md:block w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
