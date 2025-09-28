import { motion } from "framer-motion";

export default function Portfolio() {
 
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans relative overflow-hidden">
      <section className="relative flex flex-col items-center justify-center h-screen text-center px-6 overflow-hidden">
        <div
        className="absolute inset-0 z-10 opacity-50"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            rgba(255,255,255,0.1),
            rgba(255,255,255,0.1) 1px,
            transparent 1px,
            transparent 30px
          )`,
          backgroundSize: '200% 200%',
        }}
      ></div>



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
        <button
          onClick={() => scrollToSection("resume")}
          className="z-10 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-semibold text-white shadow-lg"
        >
          View Resume
        </button>

        <button
          onClick={() => scrollToSection("contact")}
          className="z-10 px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition font-semibold text-gray-200 shadow-lg"
        >
          Contact Me
        </button>
        </motion.div>
      </section>

      {/* Resume Section */}
<section id="resume" className="px-8 py-20 bg-gray-900 rounded-t-3xl shadow-xl scroll-mt-20">
  <h2 className="text-3xl font-bold text-white mb-16 text-center">Resume</h2>

  {/* Experience */}
  <div className="max-w-3xl mx-auto mb-16">
    <h3 className="text-2xl font-semibold text-indigo-400 mb-10">Experience</h3>
    <ul className="relative border-l border-gray-700 pl-6 space-y-12">
      {/* Associate Role */}
      <li className="flex flex-col relative">
        <span className="absolute -left-3 mt-2 w-5 h-5 rounded-full bg-indigo-500 border-2 border-gray-900"></span>
        <div className="ml-4">
          <p className="font-semibold text-white text-lg mb-1">Associate Software Engineer – Duck Creek Technologies</p>
          <p className="text-gray-400 text-sm mb-2">June 2025 – Present</p>
          <ul className="list-disc pl-5 text-gray-400 space-y-1">
            <li>Developed an automated pipeline for infrastructure provisioning, testing, and reporting, catching 100s of bugs before production.</li>
            <li>Implemented a system to store disk images of legacy deployment environments, reducing setup time from weeks to hours.</li>
            <li>Automated Kafka DR process into a single trigger pipeline, minimizing downtime and preventing data loss.</li>
          </ul>
        </div>
      </li>

      {/* Junior Role */}
      <li className="flex flex-col relative">
        <span className="absolute -left-3 mt-2 w-5 h-5 rounded-full bg-indigo-400 border-2 border-gray-900"></span>
        <div className="ml-4">
          <p className="font-semibold text-white text-lg mb-1">Junior Associate Software Engineer – Duck Creek Technologies</p>
          <p className="text-gray-400 text-sm mb-2">June 2024 – June 2025</p>
          <ul className="list-disc pl-5 text-gray-400 space-y-1">
            <li>Broke apart a monolithic pipeline into parallel jobs, reducing deployment time by 50%.</li>
            <li>Created internal libraries that standardized dev tool interactions, speeding up development.</li>
            <li>Won multiple internal coding competitions, including an AI hackathon across the engineering org.</li>
          </ul>
        </div>
      </li>

      {/* Internship */}
      <li className="flex flex-col relative">
        <span className="absolute -left-3 mt-2 w-5 h-5 rounded-full bg-indigo-400 border-2 border-gray-900"></span>
        <div className="ml-4">
          <p className="font-semibold text-white text-lg mb-1">Frontend Developer Intern – Globus Labs, University of Chicago</p>
          <p className="text-gray-400 text-sm mb-2">May 2023 – May 2024</p>
          <ul className="list-disc pl-5 text-gray-400 space-y-1">
            <li>Used React, Vue, TypeScript, and Tailwind CSS to build responsive and functional websites.</li>
            <li>Contributed in an Agile workflow with stand-ups, sprint planning, and retrospectives.</li>
          </ul>
        </div>
      </li>

      {/* Teaching Role */}
      <li className="flex flex-col relative">
        <span className="absolute -left-3 mt-2 w-5 h-5 rounded-full bg-indigo-400 border-2 border-gray-900"></span>
        <div className="ml-4">
          <p className="font-semibold text-white text-lg mb-1">Computer Science Supplemental Instructor – UNC Asheville Writing Center</p>
          <p className="text-gray-400 text-sm mb-2">Jan 2023 – May 2023</p>
          <ul className="list-disc pl-5 text-gray-400 space-y-1">
            <li>Led study sessions supporting students in Computer Science courses.</li>
          </ul>
        </div>
      </li>

      {/* Leadership Role */}
      <li className="flex flex-col relative">
        <span className="absolute -left-3 mt-2 w-5 h-5 rounded-full bg-indigo-400 border-2 border-gray-900"></span>
        <div className="ml-4">
          <p className="font-semibold text-white text-lg mb-1">Peer Advising Leader – UNC Asheville Student Leadership</p>
          <p className="text-gray-400 text-sm mb-2">Aug 2022 – Dec 2022</p>
        </div>
      </li>
    </ul>
  </div>

  {/* Education */}
  <div className="max-w-3xl mx-auto mb-16">
    <h3 className="text-2xl font-semibold text-indigo-400 mb-6">Education</h3>
    <p className="text-white font-semibold">University of North Carolina at Asheville</p>
    <p className="text-gray-400 text-sm mb-2">Bachelor of Science in Computer Science, 2020–2024</p>
    <p className="text-gray-400 text-sm">GPA: 3.94</p>
  </div>

  {/* Skills */}
  <div className="max-w-3xl mx-auto">
    <h3 className="text-2xl font-semibold text-indigo-400 mb-6">Technical Skills</h3>
    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-300">
      <li className="bg-gray-800 p-2 rounded-lg text-center">C#</li>
      <li className="bg-gray-800 p-2 rounded-lg text-center">Bash</li>
      <li className="bg-gray-800 p-2 rounded-lg text-center">Powershell</li>
      <li className="bg-gray-800 p-2 rounded-lg text-center">Terraform</li>
      <li className="bg-gray-800 p-2 rounded-lg text-center">Azure (AZ-900)</li>
      <li className="bg-gray-800 p-2 rounded-lg text-center">JavaScript</li>
      <li className="bg-gray-800 p-2 rounded-lg text-center">TypeScript</li>
      <li className="bg-gray-800 p-2 rounded-lg text-center">React</li>
      <li className="bg-gray-800 p-2 rounded-lg text-center">Vue.js</li>
      <li className="bg-gray-800 p-2 rounded-lg text-center">Tailwind CSS</li>
      <li className="bg-gray-800 p-2 rounded-lg text-center">Java</li>
      <li className="bg-gray-800 p-2 rounded-lg text-center">Spring</li>
      <li className="bg-gray-800 p-2 rounded-lg text-center">Python</li>
      <li className="bg-gray-800 p-2 rounded-lg text-center">SQL</li>
      <li className="bg-gray-800 p-2 rounded-lg text-center">Docker</li>
    </ul>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="relative px-8 py-20 bg-gray-950 scroll-mt-20 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              135deg,
              rgba(255,255,255,0.1),
              rgba(255,255,255,0.1) 1px,
              transparent 1px,
              transparent 30px
            )`,
            backgroundSize: '200% 200%',
          }}
        ></div>
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Get in Touch</h2>

        <div className="max-w-xl mx-auto grid gap-8 sm:grid-cols-2 text-center">
          <div className="relative bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <p className="text-indigo-400 text-sm font-medium">Email</p>
            <p className="mt-2 text-lg font-semibold text-white">chasejenkins303@gmail.com</p>
          </div>
          <div className="relative bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <p className="text-indigo-400 text-sm font-medium">LinkedIn</p>
            <a href="www.linkedin.com/in/chase-jenkins-90018a26a" className="mt-2 text-lg font-semibold text-white">linkedin.com/in/chase-jenkins-90018a26a/</a>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-gray-500 text-sm bg-gray-900">
        © {new Date().getFullYear()} Chase Jenkins. All rights reserved.
      </footer>
    </div>
  );
}
