import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#18122B] py-16 px-6 md:px-0 flex items-center justify-center"
    >
      <motion.div
        className="w-full max-w-2xl bg-[#23145a]/60 rounded-2xl shadow-lg p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-extrabold mb-4 text-purple-400 tracking-wide">
          Contact Me
        </h2>
        <div className="w-20 h-1 bg-purple-500 rounded-full mb-8 shadow-[0_0_16px_6px_rgba(168,85,247,0.4)]"></div>

        <form
          className="flex flex-col gap-5"
          action="https://formspree.io/f/{your_form_id}"  // Update your Formspree ID
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg bg-[#18122B] text-white border border-purple-700 focus:border-purple-400 outline-none transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg bg-[#18122B] text-white border border-purple-700 focus:border-purple-400 outline-none transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="p-3 rounded-lg bg-[#18122B] text-white border border-purple-700 focus:border-purple-400 outline-none transition"
          ></textarea>
          <motion.button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white rounded-lg px-8 py-3 font-semibold shadow transition"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </form>

        {/* Alternative Contact */}
        <div className="mt-8">
          <p className="text-gray-300 mb-4 text-center">Or reach out directly:</p>
          <div className="flex gap-6 justify-center">
            <motion.a
              href="mailto:sameer9129826069@gmail.com"
              className="p-3 bg-[#18122B] rounded-full border-2 border-purple-500 hover:bg-purple-700 transition"
              aria-label="Email"
              title="Email"
              whileHover={{ scale: 1.1 }}
            >
              <Mail color="white" size={28} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sameer-pandey-bb605322a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#18122B] rounded-full border-2 border-purple-500 hover:bg-purple-700 transition"
              aria-label="LinkedIn"
              title="LinkedIn"
              whileHover={{ scale: 1.1 }}
            >
              <Linkedin color="white" size={28} />
            </motion.a>
            <motion.a
              href="https://github.com/insanedevilsam"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#18122B] rounded-full border-2 border-purple-500 hover:bg-purple-700 transition"
              aria-label="GitHub"
              title="GitHub"
              whileHover={{ scale: 1.1 }}
            >
              <Github color="white" size={28} />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;