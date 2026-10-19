import { motion } from "framer-motion";
import { FaGraduationCap, FaUserTie, FaMountain } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";

const aboutCards = [
    {
        icon: <FaGraduationCap className="text-blue" />,
        title: "Education",
        label: "Bachelor in Computer Application",
        detail: "Reliance College · Nepal",
        text: `I'm currently pursuing a Bachelor in Computer Application (BCA) at Reliance College, building a strong foundation in computer science fundamentals and software development.`,
        color: "blue",
    },
    {
        icon: <FaUserTie className="text-purple" />,
        title: "Full Stack Development",
        label: "React · Angular · ASP.NET Core",
        detail: "Responsive UIs with robust APIs",
        text: `A passionate developer experienced in building responsive, user-friendly applications with React and Angular on the frontend, backed by robust ASP.NET Core APIs. I enjoy turning complex problems into simple, beautiful, and intuitive solutions.`,
        color: "purple",
    },
    {
        icon: <FaMountain className="text-green" />,
        title: "Beyond Code",
        label: "Hiking · Traveling · Friends",
        detail: "Balance fuels creativity",
        text: `Outside of coding, I enjoy hiking, traveling, and spending time with friends. I believe a balanced life fuels creativity and productivity, bringing fresh perspectives to my work.`,
        color: "green",
    },
];

const colorConfig = {
    blue: { icon: "text-blue", border: "border-blue/20", text: "text-blue", accent: "border-blue" },
    purple: { icon: "text-purple", border: "border-purple/20", text: "text-purple", accent: "border-purple" },
    green: { icon: "text-green", border: "border-green/20", text: "text-green", accent: "border-green" },
} as const;

const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex flex-col items-center justify-center bg-transparent py-24 px-6"
        >
            <SectionHeader title="About Me" />

            <Reveal y={40}>
                <div className="w-full max-w-3xl space-y-8">
                    {aboutCards.map((card, idx) => {
                        const c = colorConfig[card.color as keyof typeof colorConfig];
                        return (
                            <motion.div
                                key={idx}
                                whileHover={{ x: -8 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="relative pl-4 border-l-2 border-transparent group-hover:border-blue transition-colors"
                            >
                                <div className="flex items-start gap-5 mb-8 last:mb-0">
                                    <div className={`w-12 h-12 rounded-2xl ${c.border} flex items-center justify-center text-xl group-hover:scale-110 transition-transform shrink-0 mt-0.5`}>
                                        {card.icon}
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-mono font-bold text-ink-4 uppercase tracking-widest mb-1">
                                            {card.label}
                                        </p>
                                        <h4 className="text-lg font-bold text-ink mb-2">{card.title}</h4>
                                        <p className="text-ink-2 text-sm leading-relaxed">
                                            {card.text}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Reveal>
        </section>
    );
};

export default About;
