import { useState } from "react";
import { SiSharp, SiJavascript, SiTypescript, SiDotnet, SiAngular, SiReact, SiTailwindcss, SiMysql } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const techList = [
    {
        name: "C# / .NET",
        text: "Backend development with ASP.NET Core — Web APIs, middleware, dependency injection, and clean layering.",
        icon: <SiSharp size={36} className="text-cyan" />,
    },
    {
        name: "ASP.NET Core",
        text: "Building robust REST APIs, JWT authentication, Entity Framework Core, and microservice-ready services.",
        icon: <SiDotnet size={36} className="text-purple" />,
    },
    {
        name: "Angular",
        text: "Building dynamic SPAs with services, HTTP interceptors, reactive forms, routing, and standalone components.",
        icon: <SiAngular size={36} className="text-red" />,
    },
    {
        name: "JavaScript",
        text: "Core web language used across my frontend projects with modern ES2020+ features.",
        icon: <SiJavascript size={36} className="text-yellow" />,
    },
    {
        name: "TypeScript",
        text: "Type-safe development across Angular and React, enabling maintainable, self-documenting code.",
        icon: <SiTypescript size={36} className="text-blue" />,
    },
    {
        name: "React",
        text: "Building interactive UIs with hooks, context, and state management in my side projects.",
        icon: <SiReact size={36} className="text-blue" />,
    },
    {
        name: "Tailwind CSS",
        text: "Rapid, consistent styling with utility-first CSS and responsive design systems.",
        icon: <SiTailwindcss size={36} className="text-teal" />,
    },
    {
        name: "SQL / EF Core",
        text: "Modeling and querying relational data with Entity Framework Core and SQL Server / PostgreSQL.",
        icon: <SiMysql size={36} className="text-blue" />,
    },
];

const Techs = () => {
    const [active, setActive] = useState(techList[0].name);
    const activeTech = techList.find((t) => t.name === active);

    return (
        <div className="flex flex-col items-center text-ink p-8 rounded-3xl shadow-2xl bg-panel backdrop-blur-md border border-line w-full max-w-2xl">
            <h3 className="text-2xl font-bold mb-8 tracking-wide bg-gradient-to-r from-blue to-purple bg-clip-text text-transparent">
                Technologies I Work With
            </h3>
            <ul className="flex gap-3 mb-8 flex-wrap justify-center">
                {techList.map((tech) => (
                    <motion.li
                        key={tech.name}
                        whileHover={{ scale: 1.1, y: -4, rotate: [0, -3, 3, 0] }}
                        whileTap={{ scale: 0.96 }}
                        className={`flex flex-col items-center gap-2 p-4 rounded-2xl cursor-pointer transition-all duration-200
                            ${active === tech.name
                                ? "bg-blue/10 ring-2 ring-blue/50 shadow-lg shadow-blue-500/10"
                                : "bg-veil hover:bg-veil-2 border border-line-2"}
                        `}
                        onClick={() => setActive(tech.name)}
                    >
                        {tech.icon}
                        <span className={`text-sm font-semibold transition-colors duration-200 ${active === tech.name ? "text-blue" : "text-ink-3"}`}>
                            {tech.name}
                        </span>
                    </motion.li>
                ))}
            </ul>
            <div className="mt-2 min-h-[56px] flex items-center justify-center w-full bg-veil rounded-2xl border border-line p-4">
                <AnimatePresence mode="wait">
                    <motion.p
                        key={activeTech?.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="text-base text-ink-2 px-4 text-center"
                    >
                        {activeTech?.text}
                    </motion.p>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Techs;
