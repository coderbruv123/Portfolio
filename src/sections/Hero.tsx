import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown, FaCode, FaDatabase } from "react-icons/fa";
import profileImg from '../../public/img.png';

function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden bg-slate-950"
        >
            {/* Ambient glows */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-128 h-128 bg-purple-600/20 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center pt-28 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-blue-400 font-medium mb-4 flex items-center gap-2"
                    >
                        <span className="h-px w-8 bg-blue-400 inline-block" />
                        Hello, I'm
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.7 }}
                        className="text-5xl md:text-6xl font-extrabold text-white leading-tight"
                    >
                        Prashant Giri
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        className="mt-2 text-xl md:text-2xl text-slate-300"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            Full Stack Developer
                        </span>
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.65, duration: 0.7 }}
                        className="mt-6 text-gray-400 leading-relaxed max-w-lg"
                    >
                        Building clean, scalable web applications with{" "}
                        <span className="text-blue-300 font-medium">.NET Core</span> and{" "}
                        <span className="text-purple-300 font-medium">Angular</span> on the full stack,
                        from robust APIs to polished, responsive frontends.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.7 }}
                        className="mt-8 flex flex-wrap gap-4"
                    >
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg px-6 py-3 transition shadow-lg shadow-blue-600/30"
                        >
                            <FaCode /> View Projects
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-white/5 border border-white/15 hover:bg-white/10 text-white font-medium rounded-lg px-6 py-3 transition"
                        >
                            <FaArrowDown /> Get In Touch
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="mt-8 flex items-center gap-4"
                    >
                        <a
                            href={import.meta.env.VITE_GITHUB_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-blue-300 transition"
                            aria-label="GitHub"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href={import.meta.env.VITE_LINKEDIN_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-blue-400 transition"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={24} />
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="hidden lg:flex justify-center relative"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 to-purple-600/40 rounded-full blur-2xl scale-110" />
                        <img
                            src={profileImg}
                            alt="Prashant Giri"
                            className="relative w-80 h-80 rounded-full object-cover border-4 border-white/10 shadow-2xl"
                        />
                        <div className="absolute -bottom-4 -left-6 bg-slate-900/90 backdrop-blur rounded-xl border border-white/10 px-4 py-3 shadow-xl">
                            <p className="text-xs text-slate-400 flex items-center gap-2">
                                <FaCode className="text-blue-400" /> Angular + .NET Stack
                            </p>
                        </div>
                        <div className="absolute -top-4 -right-6 bg-slate-900/90 backdrop-blur rounded-xl border border-white/10 px-4 py-3 shadow-xl">
                            <p className="text-xs text-slate-400 flex items-center gap-2">
                                <FaDatabase className="text-purple-400" /> REST APIs & EF Core
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;