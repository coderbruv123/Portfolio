import Techs from "../components/Techs";

const Skills = () => {
    return (
        <section
            id="skills"
            className="min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-slate-950"
        >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center">Skills</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-12" />

            <Techs />
        </section>
    );
}

export default Skills;