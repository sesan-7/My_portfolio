import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeUpItem, fadeUpStagger } from "../animation";
import { Github, Linkedin, Mail, Send, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
//c
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_qiinw29",
        "template_fbt7iep",
        form.current,
        "k8TRCgHok5T9nPS1F"
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
        }
      );
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      value: "senabadhy.nrc07@gmail.com",
      link: "mailto:senabadhy.nrc07@gmail.com",
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Location",
      value: "Tamil Nadu, India",
      link: null,
    },
    // Add Phone if desired, keeping commented for now
    // {
    //   icon: <Phone className="w-6 h-6 text-primary" />,
    //   title: "Phone",
    //   value: "+91 xxxxx xxxxx",
    //   link: "tel:+91xxxxxxxxxx"
    // }
  ];

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors duration-500 overflow-hidden"
    >
      <motion.div
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Section Title */}
        <motion.h2
          variants={fadeUpItem}
          className="section-title text-gray-900 dark:text-gray-100"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Left Column: Contact Info */}
          <motion.div variants={fadeUpItem} className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Let's Talk
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              I'm open to freelance work, full-time opportunities, or just a friendly chat about technology. 
              Feel free to connect!
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      {item.title}
                    </h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-primary transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/sesan-7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-white/5 p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/r-senabadhy-sesan-352205214/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-white/5 p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div variants={fadeUpItem}>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="glass-card p-8 grid gap-6 transition-colors duration-500"
            >
              <div className="grid gap-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="John Doe"
                  required
                  className="bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-white/10 p-3 rounded-lg outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="john@example.com"
                  required
                  className="bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-white/10 p-3 rounded-lg outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Project details, inquiries, or just saying hi..."
                  required
                  className="bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-white/10 p-3 rounded-lg outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary flex items-center justify-center gap-2 w-full"
              >
                {status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="text-green-500 text-center mt-2 text-sm font-medium"
                >
                  Message sent successfully!
                </motion.p>
              )}
              {status === "error" && (
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-center mt-2 text-sm font-medium"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
