import { useState } from "react";
import { SiSharp, SiJavascript, SiTypescript, SiDotnet } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const techList = [
    {
        name: "JavaScript",
        text: "I primarily use JavaScript through React in my frontend projects.",
        icon: <SiJavascript size={36} className="text-yellow-400 drop-shadow" />,
    },
    {
        name: "TypeScript",
        text: "I've recently started using TypeScript with React. I'm still learning, but I enjoy its type safety.",
        icon: <SiTypescript size={36} className="text-blue-400 drop-shadow" />,
    },
    {
        name: "C#",
        text: "I use C# for backend development with ASP.NET Core.",
        icon: <SiSharp size={36} className="text-cyan-400 drop-shadow" />,
    },
    {
        name: ".NET",
        text: "I build robust APIs and backend services using .NET technologies.",
        icon: <SiDotnet size={36} className="text-purple-400 drop-shadow" />,
    },
];

const Techs = () => {
    const [active, setActive] = useState(techList[0].name);

    const activeTech = techList.find((t) => t.name === active);

    return (
        <div className="flex flex-col items-center text-white p-8 rounded-3xl shadow-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/70 w-full max-w-xl mx-auto backdrop-blur-md border border-gray-700/40">
            <h2 className="text-2xl font-bold mb-8 tracking-wide bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technologies
            </h2>
            <ul className="flex gap-6 mb-8 flex-wrap justify-center">
                {techList.map((tech) => (
                    <motion.li
                        key={tech.name}
                        whileHover={{ scale: 1.13, boxShadow: "0px 6px 32px rgba(0,0,0,0.25)" }}
                        whileTap={{ scale: 0.97 }}
                        className={`flex flex-col items-center gap-2 p-4 rounded-2xl cursor-pointer transition-all duration-200
                            ${active === tech.name
                                ? "bg-white/10 shadow-xl ring-2 ring-blue-400/60 backdrop-blur"
                                : "bg-white/5 hover:bg-white/10"}
                        `}
                        onClick={() => setActive(tech.name)}
                    >
                        {tech.icon}
                        <span className={`text-base font-semibold transition-colors duration-200 ${active === tech.name ? "text-blue-300" : "text-gray-400"}`}>
                            {tech.name}
                        </span>
                    </motion.li>
                ))}
            </ul>
            <div className="mt-2 min-h-[48px] flex items-center justify-center w-full">
                <AnimatePresence mode="wait">
                    <motion.p
                        key={activeTech?.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="text-lg text-gray-200 px-4 text-center"
                    >
                        {activeTech?.text}
                    </motion.p>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Techs;