// export default function About() {
//   return (
//     <section id="about" className="py-20 max-w-5xl mx-auto px-6">
//       <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
//       <p className="text-gray-400 leading-relaxed text-center">
//         I am a Computer Science student specializing in Full Stack Development
//         and Cloud Computing. I enjoy building scalable web applications and
//         exploring AI-powered solutions. I have experience in React, MERN stack,
//         and cloud-based systems.
//       </p>
//     </section>
//   );
// }

export default function About() {
  return (
    <section
      id="about"
      className="py-20 max-w-5xl mx-auto px-6 transition-colors duration-500"
    >
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
        About Me
      </h2>

      {/* Description */}
      <p className="text-center text-gray-700 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
        I am a Computer Science student specializing in{" "}
        <span className="font-semibold">Full Stack Development</span> and{" "}
        <span className="font-semibold">Cloud Computing</span>. I enjoy building
        scalable web applications and exploring AI-powered solutions. I have
        experience in <span className="font-semibold">React</span>,{" "}
        <span className="font-semibold">MERN stack</span>, and cloud-based
        systems.
      </p>
    </section>
  );
}
