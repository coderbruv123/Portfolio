import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Nav from "./components/Nav";
import AnimatedBackground from "./components/AnimatedBackground";
import ThemeCelestial from "./components/ThemeCelestial";
import ScrollProgress from "./components/ScrollProgress";
import './App.css'

function App() {
    return (
        <div className="text-ink">
            <AnimatedBackground />
            <ThemeCelestial />
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
