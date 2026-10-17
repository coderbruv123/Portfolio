import { motion } from "framer-motion";
import { FaBriefcase, FaDotCircle } from "react-icons/fa";
import { SiDotnet, SiAngular } from "react-icons/si";
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
            className="min-h-screen flex flex-col items-center justify-center py-24 px-6 bg-transparent"
        >
            <SectionHeader title="Experience" tagline="A selection of the work I've done so far." />

            <Reveal y={40}>
                <div className="relative w-full max-w-3xl">
                    {/* Vertical timeline connector line */}
                    <div className="absolute left-[2.5rem] top-12 bottom-12 w-0.5 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />

                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ x: -8 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="relative pl-16 pt-10 pb-10"
                        >
                            {/* Timeline node */}
                            <div className="absolute left-[2.2rem] top-4 w-3.5 h-3.5 rounded-full bg-blue-500 border-2 border-slate-950 shadow-[0_0_0_6px_rgba(59,130,246,0.3)]" />

                            <div className="bg-slate-900/60 backdrop-blur border border-white/10 rounded-3xl p-10 shadow-xl">
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                    <div className="flex items-center gap-3">
                                        <motion.div
                                            animate={{ rotate: [0, -6, 0, 6, 0] }}
                                            transition={{ duration: 4, repeat: Infinity, delay: idx }}
                                            className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center"
                                        >
                                            {exp.icon}
                                        </motion.div>
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{exp.role}</h3>
                                            <p className="text-blue-400 font-medium text-base">{exp.company}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-2 text-sm text-gray-400">
                                        <span className="flex items-center gap-2">
                                            <span className="w-0.5 h-4 bg-blue-400"></span> {exp.period} · {exp.location}
                                        </span>
                                    </div>
                                </div>

                                <ul className="space-y-4 text-sm text-gray-300 leading-relaxed mb-8">
                                    {exp.points.map((point, i) => (
                                        <Reveal key={i} y={12} delay={i * 0.08}>
                                            <li className="flex gap-4">
                                                <FaDotCircle className="mt-2 text-blue-400 flex-shrink-0" size={11} />
                                                <span>{point}</span>
                                            </li>
                                        </Reveal>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-3">
                                    <span className="flex items-center gap-2 text-sm bg-[#512bd4]/20 text-purple-300 border border-purple-400/20 rounded-xl px-4 py-2">
                                        <SiDotnet size={17} /> ASP.NET Core
                                    </span>
                                    <span className="flex items-center gap-2 text-sm bg-[#dd0031]/20 text-red-300 border border-red-400/20 rounded-xl px-4 py-2">
                                        <SiAngular size={17} /> Angular
                                    </span>
                                    <span className="flex items-center gap-2 text-sm bg-white/5 text-slate-300 border border-white/15 rounded-xl px-4 py-2">
                                        Entity Framework Core
                                    </span>
                                    <span className="flex items-center gap-2 text-sm bg-white/5 text-slate-300 border border-white/15 rounded-xl px-4 py-2">
                                        JWT Auth
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Reveal>
        </section>
    );
};

export default Experience;
