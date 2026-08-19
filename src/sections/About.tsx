import { motion } from "framer-motion";
import { FaGraduationCap, FaUserTie, FaMountain } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";

const aboutCards = [
    {
        icon: <FaGraduationCap className="text-blue-400" size={32} />,
        title: "Education",
        text: `I'm currently pursuing a Bachelor in Computer Application (BCA) at Reliance College, where I'm building a strong foundation in computer science fundamentals and software development.`,
    },
    {
        icon: <FaUserTie className="text-purple-400" size={32} />,
        title: "Full Stack Development",
        text: `A passionate developer experienced in building responsive, user-friendly applications with React and Angular on the frontend, backed by robust ASP.NET Core APIs. I enjoy turning complex problems into simple, beautiful, and intuitive solutions.`,
    },
    {
        icon: <FaMountain className="text-green-400" size={32} />,
        title: "Beyond Code",
        text: `Outside of coding, I enjoy hiking, traveling, and spending time with friends. I believe a balanced life fuels creativity and productivity, bringing fresh perspectives to my work.`,
    },
];

const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex flex-col items-center justify-center bg-transparent px-6 py-20"
        >
            <SectionHeader title="About Me" />

            <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
                {aboutCards.map((card, idx) => (
                    <Reveal key={idx} delay={idx * 0.15}>
                        <motion.div
                            whileHover={{ y: -6 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="h-full bg-slate-900/60 backdrop-blur border border-white/10 rounded-2xl p-8 hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-500/5"
                        >
                            <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-white/10 flex items-center justify-center mb-5">
                                {card.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-3">{card.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">{card.text}</p>
                        </motion.div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

export default About;