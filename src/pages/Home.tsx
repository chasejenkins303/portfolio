import { motion } from "framer-motion";
import { FormEvent } from "react";

export default function Portfolio() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
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
          className="mt-6 text-lg md:text-2xl max-w-2xl text-gray-400"
        >
          Software engineer with a passion for creating innovative, reliable, and useful software.
        </motion.p>
      </section>

      {/* Resume Section */}
      <section className="px-8 py-20 bg-gray-900 rounded-t-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Resume</h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Experience */}
          <div>
            <h3 className="text-xl font-semibold text-indigo-400 mb-4">Experience</h3>
            <ul className="space-y-6">
              <li>
                <p className="font-semibold text-white">Associate Software Engineer – Current Company</p>
                <p className="text-gray-400 text-sm">Promoted after excelling in building scalable and reliable features.</p>
              </li>
              <li>
                <p className="font-semibold text-white">Software Engineer Intern – Past Company</p>
                <p className="text-gray-400 text-sm">Worked on full-stack features, bug fixing, and performance improvements.</p>
              </li>
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold text-indigo-400 mb-4">Skills</h3>
            <ul className="grid grid-cols-2 gap-3 text-gray-300">
              <li className="bg-gray-800 p-2 rounded-lg text-center">React</li>
              <li className="bg-gray-800 p-2 rounded-lg text-center">TypeScript</li>
              <li className="bg-gray-800 p-2 rounded-lg text-center">Node.js</li>
              <li className="bg-gray-800 p-2 rounded-lg text-center">Tailwind CSS</li>
              <li className="bg-gray-800 p-2 rounded-lg text-center">PostgreSQL</li>
              <li className="bg-gray-800 p-2 rounded-lg text-center">Docker</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-8 py-20 bg-gray-950">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Get in Touch</h2>

        <form
          className="max-w-xl mx-auto space-y-6"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-xl bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-xl bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            required
            className="w-full p-3 rounded-xl bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-semibold text-white shadow-lg"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm bg-gray-900">
        © {new Date().getFullYear()} Chase Jenkins. All rights reserved.
      </footer>
    </div>
  );
}
