import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Hero() {
    return (
        <motion.div
            className="hero relative min-h-screen overflow-hidden"
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            <div className="absolute top-10 left-10 text-4xl font-bold">
                <motion.h1
                    className="text-amber-100"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    Hi there, <br />
                    <span className="text-white">I am Prashant Giri</span>
                </motion.h1>
            </div>

            <div className="absolute bottom-60 left-10 flex flex-col gap-2 w-[30rem]">
                <motion.h3
                    className="text-gray-300 text-xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                >
                    I am a passionate Developer who uses Dotnet core as backend
                    and React as frontend
                </motion.h3>

                <motion.p
                    className="text-gray-400"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                >
                    Explore my projects and skills
                </motion.p>

                <div className="flex gap-4 mt-4">
                    <motion.button
                        className="bg-blue-500 text-white rounded px-4 py-2"
                    >
                        Projects
                    </motion.button>
                    <motion.button
                        className="bg-green-500 text-white rounded px-4 py-2"
                    >
                        Contact Me
                    </motion.button>
                </div>
            </div>

            <div className="absolute top-20 right-10 flex flex-col gap-4">
                <a
                    href={import.meta.env.VITE_GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-gray-400"
                >
                    <FaGithub />
                </a>
                <a
                    href={import.meta.env.VITE_LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-gray-400"
                >
                    <FaLinkedin />
                </a>
            </div>

            <button className="absolute bottom-10 right-10">Contact</button>
        </motion.div>
    );
}

export default Hero;