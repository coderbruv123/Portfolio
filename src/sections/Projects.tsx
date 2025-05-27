import React from "react";

const projects = [
    {
        title: "Project One",
        description: "A short description of Project One goes here.",
        mediaType: "image",
        mediaSrc: "/project1.png", 
        skills: ["React", "Tailwind", "Node.js"],
    },
    {
        title: "Project Two",
        description: "A short description of Project Two goes here.",
        mediaType: "video",
        mediaSrc: "/project2.mp4", 
        skills: [".NET Core", "SQL", "Azure"],
    },
];

const Projects = () => {
    return (
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 py-12 px-4">
            <h2 className="text-4xl text-white mb-8 font-bold text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
                {projects.map((project, idx) => (
                    <div key={idx} className="bg-white/10 border border-white/20 rounded-2xl shadow-lg p-6 flex flex-col items-center">
                        <div className="w-full h-56 flex items-center justify-center mb-4 overflow-hidden rounded-lg bg-black/30">
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
                        <div className="flex flex-wrap gap-2 justify-center mt-auto">
                            {project.skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="bg-blue-500/80 text-white text-xs px-3 py-1 rounded-full"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;