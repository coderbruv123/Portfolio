import Hero from "./sections/Hero";
import About from "./sections/About";
import "./App.css";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import { motion } from "framer-motion";
import Projects from "./sections/Projects";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        
        {/* HERO */}
        <motion.section
          id="hero"
          className="h-screen snap-start flex items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-5xl mx-auto w-full px-6 md:px-10">
            <Hero />
          </div>
        </motion.section>

        {/* ABOUT */}
        <motion.section
          id="about"
          className="h-screen snap-start flex items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-5xl mx-auto w-full px-6 md:px-10">
            <About />
          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          id="skills"
          className="h-screen snap-start flex items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-5xl mx-auto w-full px-6 md:px-10">
            <Skills />
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          className="h-screen snap-start flex items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-5xl mx-auto w-full px-6 md:px-10">
            <Projects />
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          className="min-h-[400px] snap-start flex items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-5xl mx-auto w-full px-6 md:px-10">
            <Contact />
          </div>
        </motion.section>

      </div>
    </div>
  );
}

export default App;
