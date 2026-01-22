// const skills = [
//   "React",
//   "JavaScript",
//   "Tailwind CSS",
//   "Node.js",
//   "MongoDB",
//   "AWS",
//   "Git",
// ];

// export default function Skills() {
//   return (
//     <section id="skills" className="py-20 bg-gray-800">
//       <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto px-6">
//         {skills.map((skill) => (
//           <div
//             key={skill}
//             className="bg-gray-900 p-4 rounded-lg text-center hover:scale-105 transition"
//           >
//             {skill}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "AWS",
  "Git",
  "UI/UX",
  "Figma",
  "Python",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">
        Skills
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto px-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-gray-100 p-4 rounded-lg text-center font-medium shadow-sm hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
