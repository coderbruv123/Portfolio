import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Nav from "./components/Nav";
import AnimatedBackground from "./components/AnimatedBackground";
import ScrollProgress from "./components/ScrollProgress";
import { useSectionScroll } from "./hooks/useSectionScroll";
import './App.css'

function App() {
    useSectionScroll();

    return (
        <div className="bg-slate-950 text-gray-100">
            <AnimatedBackground />
            <ScrollProgress />
            <Nav />
            <main>
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}

export default App;