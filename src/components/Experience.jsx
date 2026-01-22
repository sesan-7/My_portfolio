// const experience = [
//   {
//     role: "Associate Consultant Intern",
//     company: "Oracle Financial Software",
//     period: "2025",
//     desc: "Worked on cloud product implementation and client configuration.",
//   },
//   {
//     role: "Full Stack Intern",
//     company: "Zer01",
//     period: "2024",
//     desc: "Built MERN applications and REST APIs.",
//   },
// ];

// export default function Experience() {
//   return (
//     <section className="py-24 max-w-5xl mx-auto px-6">
//       <h2 className="section-title">Experience</h2>

//       <div className="border-l border-white/20 pl-6 space-y-10">
//         {experience.map((exp) => (
//           <div key={exp.role}>
//             <h3 className="text-xl font-semibold">{exp.role}</h3>
//             <p className="text-primary">{exp.company}</p>
//             <p className="text-gray-400 text-sm">{exp.period}</p>
//             <p className="text-gray-300 mt-2">{exp.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

const experience = [
  {
    role: " CyberSecurity Analyst",
    company: "Nissan Digital India LLP",
    period: "2025",
    desc: "Worked on security projects.",
  },
  {
    role: "Full Stack Intern",
    company: "Zer01",
    period: "2024",
    desc: "Built MERN applications and REST APIs.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 max-w-5xl mx-auto px-6 transition-colors duration-500"
    >
      {/* Section Title */}
      <h2 className="section-title text-gray-900 dark:text-gray-100">
        Experience
      </h2>

      {/* Timeline */}
      <div className="border-l border-gray-300 dark:border-white/20 pl-6 space-y-10">
        {experience.map((exp) => (
          <div key={exp.role} className="relative">
            {/* Dot on timeline */}
            <span className="absolute -left-8 top-2 w-4 h-4 bg-primary rounded-full border-2 border-white/30 dark:border-gray-900 transition-colors duration-500"></span>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {exp.role}
            </h3>
            <p className="text-primary">{exp.company}</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {exp.period}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
