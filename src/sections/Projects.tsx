import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaGithub, FaLink } from "react-icons/fa";
import cinemaImg from '../../public/cinema.png';
import todolist from '../../public/todolist.mp4';
import ecom from '../../public/ecommerce.mp4';
import blog from '../../public/BlogWeb.mp4';
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";

const projects = [
    {
        title: "Ecommerce Web",
        description: "An ongoing e-commerce platform with product listings, cart flow, and a .NET API backend.",
        mediaType: "video",
        mediaSrc: ecom,
        skills: ["React", "TypeScript", "ASP.NET Core"],
        links: [
            { label: "View Code", url: "https://github.com/coderbruv123/MyProjects" },
        ]
    },
    {
        title: "Cinema API",
        description: "A cinema ticket API built with ASP.NET Core and Entity Framework Core, exposing clean REST endpoints.",
        mediaType: "image",
        mediaSrc: cinemaImg,
        skills: [".NET Core", "Entity Framework", "REST API"],
        links: [
            { label: "View Code", url: "https://github.com/coderbruv123/CinemaApi" }
        ]
    },
    {
        title: "Simple Todo List",
        description: "A full-stack todo app with secure JWT authentication — React frontend paired with a .NET Web API.",
        mediaType: "video",
        mediaSrc: todolist,
        skills: ["React", "TypeScript", "ASP.NET Core", "JWT"],
        links: [
            { label: "React Code", url: "https://github.com/coderbruv123/TodoList" },
            { label: ".NET Code", url: "https://github.com/coderbruv123/TodoApi" },
        ]
    },
    {
        title: "Personal Blog Web",
        description: "A full-stack blog website with article publishing, rich content, and an ASP.NET Core backend.",
        mediaType: "video",
        mediaSrc: blog,
        skills: ["React", "JavaScript", "ASP.NET Core"],
        links: [
            { label: "View Code", url: "https://github.com/coderbruv123/PersonalBlogWeb" }
        ]
    }
];

// 3D tilt handler for cards
const useTilt = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = ref.current;
        if (!card) return;

        let glare: HTMLElement;
        let rafId: number;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const w = rect.width;
            const h = rect.height;
            const cx = rect.left + w / 2;
            const cy = rect.top + h / 2;
            const dx = (e.clientX - cx) / w;
            const dy = (e.clientY - cy) / h;

            if (rafId) cancelAnimationFrame(rafId);
            glare.style.opacity = '1';

            rafId = requestAnimationFrame(() => {
                card.style.transform = `rotateY(${dx * 8}deg) rotateX(${-dy * 6}deg) scale(1.02)`;
                glare.style.background = `radial-gradient(200px circle at ${50 + dx * 20}% ${50 + dy * 15}%, rgb(255 255 255 / 0.15), transparent 60%)`;
            });
        };

        const handleMouseEnter = () => {
            card.style.transition = 'transform 0.3s ease';
            glare.style.opacity = '1';
        };

        const handleMouseLeave = () => {
            card.style.transition = 'transform 0.7s cubic-bezier(.16,1,.3,1), box-shadow 0.4s ease';
            card.style.transform = '';
            glare.style.opacity = '0';
        };

        glare = document.createElement('div');
        glare.style.cssText = `
            position: absolute; inset: 0; border-radius: 24px;
            pointer-events: none; opacity: 0; transition: opacity 0.3s ease;
            background: radial-gradient(200px circle at 50% 50%, rgb(255 255 255 / 0.16), transparent 60%);
        `;
        card.appendChild(glare);

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseenter', handleMouseEnter);
            card.removeEventListener('mouseleave', handleMouseLeave);
            if (rafId) cancelAnimationFrame(rafId);
            glare.remove();
        };
    }, []);

    return ref;
};

const Projects = () => {
    const trackRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    // Track if horizontal scroll should be active
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const track = trackRef.current;
        const section = sectionRef.current;
        if (!track || !section) return;

        let currentH = 0;
        let rafId: number;

        const updateActiveState = () => {
            const rect = section.getBoundingClientRect();
            // Only active when section is within top 20% to 80% of viewport (proper intersection)
            const inView = rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2;
            setIsActive(inView);
        };

        const handleWheel = (e: WheelEvent) => {
            if (!isActive) return;

            const m = track.scrollWidth - track.clientWidth;
            if (m <= 0) return;

            if (e.deltaY > 0) {
                if (currentH < m - 50) {
                    e.preventDefault();
                    currentH = Math.min(m, currentH + e.deltaY * 0.6);
                    track.scrollLeft = currentH;
                }
            } else if (e.deltaY < 0) {
                if (currentH > 50) {
                    e.preventDefault();
                    currentH = Math.max(0, currentH + e.deltaY * 0.6);
                    track.scrollLeft = currentH;
                }
            }
        };

        // Use passive: false for wheel
        const wheelHandler = (e: WheelEvent) => handleWheel(e);
        window.addEventListener('wheel', wheelHandler, { passive: false });

        // Track scroll to update active state
        window.addEventListener('scroll', updateActiveState, { passive: true });
        updateActiveState(); // Initial check

        return () => {
            window.removeEventListener('wheel', wheelHandler);
            window.removeEventListener('scroll', updateActiveState);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [isActive]);

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="min-h-screen flex flex-col items-center justify-center py-24 px-6 bg-transparent"
        >
            <SectionHeader
                title="Featured Projects"
                tagline="A selection of full-stack work — clean UIs backed by .NET APIs."
            />

            <Reveal y={40} className="w-full max-w-6xl mt-12">
                <div className="relative w-full">
                    <div className="h-[30vh] w-full" />

                    <div
                        className="sticky top-[50vh] -translate-y-[50%] h-[80vh] w-full flex items-center justify-center z-10"
                    >
                        <div
                            ref={trackRef}
                            className="flex gap-6 overflow-x-auto scroll-snap-x snap-mandatory w-[94vw] h-full no-scrollbar"
                            style={{ scrollbarWidth: 'none' as React.CSSProperties['scrollbarWidth'] }}
                        >
                            {projects.map((project, idx) => {
                                const cardRef = useTilt();
                                return (
                                    <motion.div
                                        key={idx}
                                        ref={cardRef}
                                        whileHover={{ y: -8 }}
                                        className="flex-none shrink-0 snap-center w-[44vw] md:w-[46vw] min-w-[44vw] max-w-[520px] bg-slate-900/80 backdrop-blur border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl group transition-all"
                                    >
                                        <div className="relative w-full h-80 bg-black/50 flex items-center justify-center overflow-hidden cursor-pointer group-hover:bg-black/70 transition-colors duration-300">
                                            {project.mediaType === "image" ? (
                                                <img
                                                    src={project.mediaSrc}
                                                    alt={project.title}
                                                    className="object-cover w-full h-full"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <video
                                                    src={project.mediaSrc}
                                                    controls
                                                    className="object-cover w-full h-full"
                                                />
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                                <span className="text-sm font-medium text-white bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                                                    Hover for 3D effect
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-10 md:p-12">
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.skills.map((skill, i) => (
                                                    <span
                                                        key={i}
                                                        className="bg-blue-500/10 text-blue-300 border border-blue-400/20 text-xs font-medium px-3 py-1.5 rounded-full"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">{project.title}</h3>
                                            <p className="text-gray-300 text-base leading-relaxed mb-8">{project.description}</p>
                                            <div className="flex flex-wrap gap-3">
                                                {project.links.map((link, idx) => (
                                                    <a
                                                        key={idx}
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2.5 px-6 py-3 bg-white/5 border border-white/15 text-white rounded-xl font-medium hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all duration-300"
                                                    >
                                                        {idx === 0 ? <FaGithub size={17} /> : <FaLink size={17} />} {link.label}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="h-[30vh] w-full" />
                </div>
            </Reveal>

            <Reveal delay={0.2} className="mt-16">
                <a
                    href={import.meta.env.VITE_GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-blue-300 hover:text-blue-400 transition font-medium"
                >
                    <FaCode /> See more on GitHub
                </a>
            </Reveal>
        </section>
    );
};

export default Projects;