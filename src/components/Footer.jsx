// export default function Footer() {
//   return (
//     <footer className="py-6 border-t border-white/10 text-center text-gray-400">
//       <p>© {new Date().getFullYear()} Sena. Built with React & Tailwind CSS.</p>
//     </footer>
//   );
// }
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-6 border-t border-gray-200 dark:border-white/10 text-center text-gray-700 dark:text-gray-400 transition-colors duration-500"
    >
      <p>
        © {new Date().getFullYear()} Sena. Built with{" "}
        <span className="font-semibold">React</span> &{" "}
        <span className="font-semibold">Tailwind CSS</span>.
      </p>
    </motion.footer>
  );
}
