import { SiDotnet, SiAngular, SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiSharp, SiMysql } from "react-icons/si";

const items = [
    { label: "ASP.NET Core", icon: <SiDotnet /> },
    { label: "Angular", icon: <SiAngular /> },
    { label: "React", icon: <SiReact /> },
    { label: "TypeScript", icon: <SiTypescript /> },
    { label: "JavaScript", icon: <SiJavascript /> },
    { label: "C#", icon: <SiSharp /> },
    { label: "Tailwind", icon: <SiTailwindcss /> },
    { label: "SQL / EF Core", icon: <SiMysql /> },
];

const TechMarquee = () => {
    const row = items.concat(items);
    return (
        <div className="relative border-y border-white/10 bg-white/[0.02] py-4 overflow-hidden">
            <div className="flex w-max animate-marquee gap-10 px-5">
                {row.map((item, i) => (
                    <span
                        key={i}
                        className="flex items-center gap-2 text-gray-400 text-sm font-medium whitespace-nowrap"
                    >
                        <span className="text-blue-400">{item.icon}</span>
                        {item.label}
                    </span>
                ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />
        </div>
    );
};

export default TechMarquee;