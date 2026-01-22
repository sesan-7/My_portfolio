import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { fadeUp } from "../animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_qiinw29",
        "template_20kz9na",
        form.current,
        "HJBnGirLYpZ8I8d3s"
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        {/* Section Title */}
        <h2 className="section-title text-gray-900 dark:text-gray-100">
          Get In Touch
        </h2>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="glass-card p-8 grid gap-6 transition-colors duration-500"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="bg-white dark:bg-white/5 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-white/20 p-4 rounded-xl outline-none focus:border-primary transition-colors duration-300"
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="bg-white dark:bg-white/5 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-white/20 p-4 rounded-xl outline-none focus:border-primary transition-colors duration-300"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="bg-white dark:bg-white/5 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-white/20 p-4 rounded-xl outline-none focus:border-primary transition-colors duration-300"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {/* Status Messages */}
          {status === "success" && (
            <p className="text-green-500 text-center mt-2">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-center mt-2">
              Something went wrong. Try again.
            </p>
          )}
        </form>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8 text-2xl text-gray-700 dark:text-gray-400 transition-colors duration-500">
          <a
            href="https://github.com/sesan-7"
            target="_blank"
            className="hover:text-primary transition-colors duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/r-senabadhy-sesan-352205214/"
            target="_blank"
            className="hover:text-primary transition-colors duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:youremail@gmail.com"
            className="hover:text-primary transition-colors duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

// emailjs.sendForm(
//   import.meta.env.VITE_EMAILJS_SERVICE_ID,
//   import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//   form.current,
//   import.meta.env.VITE_EMAILJS_PUBLIC_KEY
// );
