import Techs from "../components/Techs";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";

const Skills = () => {
    return (
        <section
            id="skills"
            className="min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-transparent"
        >
            <SectionHeader
                title="Skills"
                tagline="The technologies I work with, from backend to frontend."
            />

            <Reveal y={30}>
                <Techs />
            </Reveal>
        </section>
    );
}

export default Skills;