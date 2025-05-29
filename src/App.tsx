import Hero from "./sections/Hero";
import About from "./sections/About";
import './App.css'
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import { motion } from "framer-motion"; 
import Projects from "./sections/Projects";

function App() {
    return (
      <div className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory">
        <motion.section
          id="#hero"
          className="h-screen snap-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
        </motion.section>
        <motion.section
          id="#about"

          className="h-screen snap-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <About />
        </motion.section>
        <motion.section
          id="Skills"
          className="h-screen snap-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Skills />
        </motion.section>
        <motion.section
          id="Projects"
          className="h-screen snap-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Projects/>
        </motion.section>
        <motion.section
          id="Contact"
          className="h-[400px] snap-start"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Contact />
        </motion.section>
      </div>
    );
}

export default App;
