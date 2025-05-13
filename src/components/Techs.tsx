import { useState } from "react";
import { SiSharp, SiJavascript, SiDart, SiTypescript } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const techList = [
    { name: "JavaScript", text: "I primarily used Js through react in my frontend", icon: <SiJavascript size={32} className="text-yellow-400" /> },
    { name: "TypeScript", text: "I've recently started using Ts on react on my frontend though as not as proficient with it yet", icon: <SiTypescript size={32} className="text-blue-400" /> },
    { name: "C#", text: "I use C# as backend using ASP.NET core", icon: <SiSharp size={32} className="text-cyan-400" /> },
    { name: "Dart", text: "I've worked with this using flutter for development.", icon: <SiDart size={32} className="text-blue-300" /> },
];

const Techs = () => {
    const [active, setActive] = useState(techList[0].name);

    const activeTech = techList.find((t) => t.name === active);

    return (
        <div className="flex flex-col items-center text-white p-8 rounded-2xl shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800 w-full max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 tracking-wide">Technologies</h2>
            <ul className="flex gap-6 mb-6">
                {techList.map((tech) => (
                    <motion.li
                        key={tech.name}
                        whileHover={{ scale: 1.12, boxShadow: "0px 4px 24px rgba(0,0,0,0.25)" }}
                        whileTap={{ scale: 0.97 }}
                        className={`flex flex-col items-center gap-2 p-3 rounded-xl cursor-pointer transition-all duration-200
                            ${active === tech.name ? "bg-gray-700 shadow-lg ring-2 ring-blue-400" : "bg-gray-800 hover:bg-gray-700"}
                        `}
                        onClick={() => setActive(tech.name)}
                    >
                        {tech.icon}
                        <span className={`text-base font-semibold ${active === tech.name ? "text-blue-300" : "text-gray-400"}`}>
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
                        className="text-lg text-gray-200 px-4"
                    >
                        {activeTech?.text}
                    </motion.p>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Techs;