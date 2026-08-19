import { motion } from "framer-motion";
import { FaBriefcase, FaDotCircle } from "react-icons/fa";
import { SiDotnet, SiAngular } from "react-icons/si";
import { MdLocationOn, MdDateRange } from "react-icons/md";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";

const experiences = [
    {
        role: ".NET Developer / Angular Full Stack Intern",
        company: "Internship",
        location: "Nepal",
        period: "2025",
        icon: <FaBriefcase className="text-blue-400" />,
        points: [
            "Built and maintained full stack web applications using ASP.NET Core (Web API) on the backend and Angular on the frontend.",
            "Designed RESTful APIs with Entity Framework Core, including model creation, migrations, and CRUD workflows.",
            "Implemented JWT-based authentication and authorization to secure API endpoints and protect user data.",
            "Integrated Angular services, HTTP interceptors, and reactive forms to consume APIs and build responsive UIs.",
        ],
    },
];

const Experience = () => {
    return (
        <section
            id="experience"
            className="min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-transparent"
        >
            <SectionHeader
                title="Experience"
                tagline="A selection of the work I've done so far."
            />

            <div className="w-full max-w-3xl space-y-8">
                {experiences.map((exp, idx) => (
                    <Reveal key={idx} y={40}>
                        <motion.article
                            whileHover={{ scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 250, damping: 20 }}
                            className="relative bg-slate-900/60 backdrop-blur border border-white/10 rounded-2xl p-8 shadow-xl"
                        >
                            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                                <div className="flex items-center gap-4">
                                    <motion.div
                                        animate={{ rotate: [0, -8, 0, 8, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, delay: idx }}
                                        className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center"
                                    >
                                        {exp.icon}
                                    </motion.div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                                        <p className="text-blue-300 font-medium text-sm">{exp.company}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-1 text-sm text-gray-400">
                                    <span className="flex items-center gap-1.5">
                                        <MdDateRange className="text-purple-400" /> {exp.period}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <MdLocationOn className="text-blue-400" /> {exp.location}
                                    </span>
                                </div>
                            </div>

                            <ul className="space-y-3">
                                {exp.points.map((point, i) => (
                                    <Reveal key={i} y={12} delay={i * 0.08}>
                                        <li className="flex gap-3 text-gray-300 leading-relaxed">
                                            <FaDotCircle className="mt-1.5 text-blue-400 flex-shrink-0" size={10} />
                                            <span>{point}</span>
                                        </li>
                                    </Reveal>
                                ))}
                            </ul>

                            <div className="mt-6 flex flex-wrap gap-3 pt-6 border-t border-white/10">
                                <span className="flex items-center gap-2 text-sm bg-[#512bd4]/20 text-purple-300 border border-purple-400/20 rounded-lg px-3 py-1.5">
                                    <SiDotnet size={16} /> ASP.NET Core
                                </span>
                                <span className="flex items-center gap-2 text-sm bg-[#dd0031]/20 text-red-300 border border-red-400/20 rounded-lg px-3 py-1.5">
                                    <SiAngular size={16} /> Angular
                                </span>
                                <span className="flex items-center gap-2 text-sm bg-white/5 text-slate-300 border border-white/15 rounded-lg px-3 py-1.5">
                                    Entity Framework Core
                                </span>
                                <span className="flex items-center gap-2 text-sm bg-white/5 text-slate-300 border border-white/15 rounded-lg px-3 py-1.5">
                                    JWT Auth
                                </span>
                            </div>
                        </motion.article>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

export default Experience;