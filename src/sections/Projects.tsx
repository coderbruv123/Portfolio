import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaArrowLeft, FaArrowRight, FaCode, FaLink } from "react-icons/fa";
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

const Projects = () => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);

    const prevProject = () => {
        setDirection(-1);
        setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    const nextProject = () => {
        setDirection(1);
        setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };

    const project = projects[current];

    return (
        <section
            id="projects"
            className="min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-transparent"
        >
            <SectionHeader
                title="Featured Projects"
                tagline="A selection of full-stack work — clean UIs backed by .NET APIs."
            />

            <Reveal y={40} className="w-full max-w-3xl">
                <motion.div
                    layout
                    className="bg-slate-900/60 backdrop-blur border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                >
                    <div className="w-full h-70 bg-black/40 flex items-center justify-center overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: direction * 60 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: direction * -60 }}
                                transition={{ duration: 0.4 }}
                                className="w-full h-full"
                            >
                                {project.mediaType === "image" ? (
                                    <img
                                        src={project.mediaSrc}
                                        alt={project.title}
                                        className="object-cover w-full h-full"
                                    />
                                ) : (
                                    <video
                                        src={project.mediaSrc}
                                        controls
                                        className="object-cover w-full h-full"
                                    />
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="p-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="bg-blue-500/10 text-blue-300 border border-blue-400/20 text-xs px-3 py-1 rounded-full font-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {project.links && project.links.map((link, idx) => (
                                        <a
                                            key={idx}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/15 text-white rounded-lg hover:bg-blue-600 hover:border-blue-500 transition text-sm font-medium"
                                        >
                                            {idx === 0 ? <FaGithub /> : <FaLink />} {link.label}
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex justify-between items-center px-8 py-4 border-t border-white/10 bg-white/5">
                        <button
                            onClick={prevProject}
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition"
                        >
                            <FaArrowLeft /> Previous
                        </button>
                        <div className="flex gap-2">
                            {projects.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                                    className={`w-2.5 h-2.5 rounded-full transition ${i === current ? "bg-blue-400 scale-125" : "bg-white/20 hover:bg-white/40"}`}
                                    aria-label={`Go to project ${i + 1}`}
                                />
                            ))}
                        </div>
                        <span className="text-slate-400 text-sm">{current + 1} / {projects.length}</span>
                        <button
                            onClick={nextProject}
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition"
                        >
                            Next <FaArrowRight />
                        </button>
                    </div>
                </motion.div>
            </Reveal>

            <Reveal delay={0.2} className="mt-10">
                <a
                    href={import.meta.env.VITE_GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-400 transition font-medium"
                >
                    <FaCode /> See more on GitHub
                </a>
            </Reveal>
        </section>
    );
};

export default Projects;