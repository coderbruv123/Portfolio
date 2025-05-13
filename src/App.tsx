import Hero from "./sections/Hero";
import About from "./sections/About";
import './App.css'
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

function App() {
    return (
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <section id="hero" className="h-screen snap-start">
       <Hero />
      </section>
      <section id="hero" className="h-screen snap-start ">
                <About/>
      </section>
      <section id="Skills" className="h-screen snap-start">
                <Skills/>
      </section>
      <section id="Contact" className="h-screen snap-start">
                        <Contact/>
      </section>
   
           
            
      </div>
    );
}

export default App;
