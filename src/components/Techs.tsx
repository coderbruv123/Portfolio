import { useState } from "react";
import { SiSharp, SiJavascript, SiTypescript, SiDotnet, SiAngular, SiReact, SiTailwindcss, SiMysql } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const techList = [
    {
        name: "C# / .NET",
        text: "Backend development with ASP.NET Core — Web APIs, middleware, dependency injection, and clean layering.",
        icon: <SiSharp size={36} className="text-cyan-400" />,
    },
    {
        name: "ASP.NET Core",
        text: "Building robust REST APIs, JWT authentication, Entity Framework Core, and microservice-ready services.",
        icon: <SiDotnet size={36} className="text-purple-400" />,
    },
    {
        name: "Angular",
        text: "Building dynamic SPAs with services, HTTP interceptors, reactive forms, routing, and standalone components.",
        icon: <SiAngular size={36} className="text-red-400" />,
    },
    {
        name: "JavaScript",
        text: "Core web language used across my frontend projects with modern ES2020+ features.",
        icon: <SiJavascript size={36} className="text-yellow-400" />,
    },
    {
        name: "TypeScript",
        text: "Type-safe development across Angular and React, enabling maintainable, self-documenting code.",
        icon: <SiTypescript size={36} className="text-blue-400" />,
    },
    {
        name: "React",
        text: "Building interactive UIs with hooks, context, and state management in my side projects.",
        icon: <SiReact size={36} className="text-blue-300" />,
    },
    {
        name: "Tailwind CSS",
        text: "Rapid, consistent styling with utility-first CSS and responsive design systems.",
        icon: <SiTailwindcss size={36} className="text-teal-400" />,
    },
    {
        name: "SQL / EF Core",
        text: "Modeling and querying relational data with Entity Framework Core and SQL Server / PostgreSQL.",
        icon: <SiMysql size={36} className="text-blue-300" />,
    },
];

const Techs = () => {
    const [active, setActive] = useState(techList[0].name);
    const activeTech = techList.find((t) => t.name === active);

    return (
        <div className="flex flex-col items-center text-white p-8 rounded-3xl shadow-2xl bg-slate-900/60 backdrop-blur-md border border-white/10 w-full max-w-2xl">
            <h3 className="text-2xl font-bold mb-8 tracking-wide bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technologies I Work With
            </h3>
            <ul className="flex gap-3 mb-8 flex-wrap justify-center">
                {techList.map((tech) => (
                    <motion.li
                        key={tech.name}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        className={`flex flex-col items-center gap-2 p-4 rounded-2xl cursor-pointer transition-all duration-200
                            ${active === tech.name
                                ? "bg-blue-500/10 ring-2 ring-blue-400/50 shadow-lg shadow-blue-500/10"
                                : "bg-white/5 hover:bg-white/10 border border-white/5"}
                        `}
                        onClick={() => setActive(tech.name)}
                    >
                        {tech.icon}
                        <span className={`text-sm font-semibold transition-colors duration-200 ${active === tech.name ? "text-blue-300" : "text-gray-400"}`}>
                            {tech.name}
                        </span>
                    </motion.li>
                ))}
            </ul>
            <div className="mt-2 min-h-[56px] flex items-center justify-center w-full bg-white/5 rounded-2xl border border-white/10 p-4">
                <AnimatePresence mode="wait">
                    <motion.p
                        key={activeTech?.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="text-base text-gray-200 px-4 text-center"
                    >
                        {activeTech?.text}
                    </motion.p>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Techs;