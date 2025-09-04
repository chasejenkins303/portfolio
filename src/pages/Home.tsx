import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans relative overflow-hidden">
      {/* Subtle Side Animation */}
      <motion.div
        className="absolute top-0 right-0 h-full w-1/3 -z-10 opacity-20"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: "linear-gradient(180deg, #4f46e5, #0a0a0a, #6366f1)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6 relative">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white"
        >
          Chase Jenkins
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg md:text-2xl max-w-2xl text-gray-300"
        >
          Software engineer with a passion for creating innovative, reliable, and useful software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex gap-6"
        >
          <a
            href="#resume"
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-semibold text-white shadow-lg"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition font-semibold text-gray-200 shadow-lg"
          >
            Contact Me
          </a>
        </motion.div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="px-8 py-20 bg-gray-900 rounded-t-3xl shadow-xl scroll-mt-20">
        <h2 className="text-3xl font-bold text-white mb-16 text-center">Resume</h2>

        {/* Experience Dominant */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold text-indigo-400 mb-10">Experience</h3>
          <ul className="relative border-l border-gray-700 pl-6 space-y-12">
            {/* Associate Role */}
            <li className="flex flex-col relative">
              <span className="absolute -left-3 mt-2 w-5 h-5 rounded-full bg-indigo-500 border-2 border-gray-900"></span>
              <div className="ml-4">
                <p className="font-semibold text-white text-lg mb-1">Associate Software Engineer</p>
                <p className="text-gray-400 text-sm mb-2">Promoted role</p>
                <p className="text-gray-400 text-sm">Led development of scalable and reliable features, mentoring juniors.</p>
              </div>
            </li>

            {/* Junior Role */}
            <li className="flex flex-col relative">
              <span className="absolute -left-3 mt-2 w-5 h-5 rounded-full bg-indigo-400 border-2 border-gray-900"></span>
              <div className="ml-4">
                <p className="font-semibold text-white text-lg mb-1">Junior Software Engineer – Current Company</p>
                <p className="text-gray-400 text-sm mb-2">Joined as junior engineer, contributed to production features, laid foundation for promotion.</p>
              </div>
            </li>

            {/* Intern Role */}
            <li className="flex flex-col relative">
              <span className="absolute -left-3 mt-2 w-5 h-5 rounded-full bg-indigo-400 border-2 border-gray-900"></span>
              <div className="ml-4">
                <p className="font-semibold text-white text-lg mb-1">Software Engineer Intern – Past Company</p>
                <p className="text-gray-400 text-sm mb-2">Worked on full-stack features, bug fixing, and performance improvements.</p>
              </div>
            </li>

            {/* IT Assistant Role */}
            <li className="flex flex-col relative">
              <span className="absolute -left-3 mt-2 w-5 h-5 rounded-full bg-indigo-400 border-2 border-gray-900"></span>
              <div className="ml-4">
                <p className="font-semibold text-white text-lg mb-1">IT Assistant – University</p>
                <p className="text-gray-400 text-sm mb-2">Supported student systems, handled troubleshooting, and assisted in software rollouts.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Skills Below */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-indigo-400 mb-6">Skills</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-300">
            <li className="bg-gray-800 p-2 rounded-lg text-center">React</li>
            <li className="bg-gray-800 p-2 rounded-lg text-center">TypeScript</li>
            <li className="bg-gray-800 p-2 rounded-lg text-center">Node.js</li>
            <li className="bg-gray-800 p-2 rounded-lg text-center">Tailwind CSS</li>
            <li className="bg-gray-800 p-2 rounded-lg text-center">PostgreSQL</li>
            <li className="bg-gray-800 p-2 rounded-lg text-center">Docker</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-20 bg-gray-950 scroll-mt-20">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Get in Touch</h2>

        <div className="max-w-xl mx-auto grid gap-8 sm:grid-cols-2 text-center">
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <p className="text-indigo-400 text-sm font-medium">Email</p>
            <p className="mt-2 text-lg font-semibold text-white">chasejenkins@example.com</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <p className="text-indigo-400 text-sm font-medium">Phone</p>
            <p className="mt-2 text-lg font-semibold text-white">(123) 456-7890</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm bg-gray-900">
        © {new Date().getFullYear()} Chase Jenkins. All rights reserved.
      </footer>
    </div>
  );
}
