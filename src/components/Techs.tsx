import { useState } from "react";
import { SiSharp, SiJavascript, SiDart, SiPhp, SiTypescript } from "react-icons/si";


const techList=[
    { name: "JavaScript", icon: <SiJavascript  size={26} className="text-yellow-500 mr-2" /> },
    { name: "TypeScript", icon: <SiTypescript  size={26} className="text-blue-500 mr-2" /> },
    { name: "C#", icon: <SiSharp size={26} className="text-cyan-500 mr-2" /> },
    { name: "Dart", icon: <SiDart  size={26} className="text-blue-400 mr-2" /> },
    { name: "PHP", icon: <SiPhp  size={26} className="text-purple-500 mr-2" /> },
]
const Techs = () => {
    const [active , setActive] = useState(techList[0].name);;
    return (
        <div className="  flex flex-col items-center text-white p-6 rounded-lg shadow-lg">
           
            <ul className="flex gap-4 ">
                {techList.map((tech) => (
                <li key={tech.name} className="flex items-center gap-2 mb-2">
                    <button 
                    onClick={() => setActive(tech.name)}
                    className={`flex gap-4 ${active === tech.name ? "bg-gray-800 text-white" : "text-gray-400"}`}
                    >

                    {tech.icon}
                    <span className="text-lg font-semibold">{tech.name}</span>
                    </button>
                </li>))}
            </ul>
           
        </div>
    );
};

export default Techs;