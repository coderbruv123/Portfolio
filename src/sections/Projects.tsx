import React, { useState } from "react";
import cinemaImg from '../../public/cinema.png';
import todolist from '../../public/todolist.mp4';
import ecom from '../../public/ecommerce.mp4';
import blog from '../../public/BlogWeb.mp4';

const projects = [
    {
        title: "Ecommerce Web",
        description: "A Simple onGoing Ecommerce website",
        mediaType: "video",
        mediaSrc: ecom, 
        skills: ["React", "Typescript", "ASP.NET"],
        links: [
            { label: "View Code", url: "https://github.com/coderbruv123/MyProjects" },
        ]
    },
    {
        title: "CinemeaApi",
        description: "A simple Cinema API built with Asp.Net Core and Entity Framework.",
        mediaType: "image",
        mediaSrc: cinemaImg, 
        skills: [".NET Core"],
        links: [
            { label: "View Code", url: "https://github.com/coderbruv123/CinemaApi" }
        ]
    },
    {
        title: "My Simple Todo List ",
        description: "A Simple Todo List with Jwt authentication.",
        mediaType: "video",
        mediaSrc: todolist, 
        skills: ["React", "TypeScript", "ASP.NET"],
        links: [
            { label: "React Code", url: "https://github.com/coderbruv123/TodoList" },
            { label: ".NET Code", url: "https://github.com/coderbruv123/TodoApi" },
        ]
    },
    {
        title: "Personal Blog Web ",
        description: "A personal full stack blog website",
        mediaType: "video",
        mediaSrc: blog, 
        skills: ["React", "JavaScript", "ASP.NET"],
        links: [
            { label: "View Code", url: "https://github.com/coderbruv123/PersonalBlogWeb" }
        ]
    }
];

const Projects = () => {
    const [current, setCurrent] = useState(0);

    const prevProject = () => {
        setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    const nextProject = () => {
        setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };

    const project = projects[current];

    return (
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 py-12 px-4">
            <h2 className="text-4xl text-white mb-8 font-bold text-center">Projects</h2>
            <div className="w-full max-w-xl flex flex-col items-center">
                <div className="bg-white/10 border border-white/20 rounded-2xl shadow-lg p-6 flex flex-col items-center w-full">
                    <div className="w-full h-70 flex items-center justify-center mb-4 overflow-hidden rounded-lg bg-black/30">
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
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4 text-center">{project.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center mt-auto mb-4">
                        {project.skills.map((skill, i) => (
                            <span
                                key={i}
                                className="bg-blue-500/80 text-white text-xs px-3 py-1 rounded-full"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-3 mb-4">
                        {project.links && project.links.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-500 transition text-xs font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="flex justify-between w-full mt-4">
                        <button
                            onClick={prevProject}
                            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
                        >
                            Previous
                        </button>
                        <span className="text-white">{current + 1} / {projects.length}</span>
                        <button
                            onClick={nextProject}
                            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;