import { motion } from "framer-motion";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Footer from "./Footer";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";

const Contact = () => {
    return (
        <section
            id="contact"
            className="min-h-screen flex flex-col justify-center bg-transparent px-6 pt-20"
        >
            <div className="flex flex-col items-center justify-center flex-1">
                <SectionHeader
                    title="Contact Me"
                    tagline="Whether it's about a project, collaboration, or just saying hi — feel free to reach out."
                />

                <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full max-w-4xl">
                    <Reveal delay={0.1} className="w-full md:w-64">
                        <motion.a
                            whileHover={{ y: -6 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            href="mailto:giriprashant516@gmail.com"
                            className="group w-full bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col items-center justify-center p-8 shadow-xl hover:border-blue-400/40 hover:shadow-blue-500/10 transition"
                        >
                            <motion.div
                                whileHover={{ rotate: [0, -12, 12, 0] }}
                                transition={{ duration: 0.5 }}
                                className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition"
                            >
                                <MdEmail size={28} className="text-blue-400" />
                            </motion.div>
                            <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                            <p className="text-sm text-gray-400 text-center select-all">giriprashant516@gmail.com</p>
                        </motion.a>
                    </Reveal>

                    <Reveal delay={0.2} className="w-full md:w-64">
                        <motion.a
                            whileHover={{ y: -6 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            href="tel:9818057756"
                            className="group w-full bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col items-center justify-center p-8 shadow-xl hover:border-purple-400/40 hover:shadow-purple-500/10 transition"
                        >
                            <motion.div
                                whileHover={{ rotate: [0, -12, 12, 0] }}
                                transition={{ duration: 0.5 }}
                                className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition"
                            >
                                <MdPhone size={28} className="text-purple-400" />
                            </motion.div>
                            <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                            <p className="text-sm text-gray-400 text-center select-all">9818057756</p>
                        </motion.a>
                    </Reveal>

                    <Reveal delay={0.3} className="w-full md:w-64">
                        <div className="w-full bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col items-center justify-center p-8 shadow-xl">
                            <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                                <MdLocationOn size={28} className="text-green-400" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">Location</h3>
                            <p className="text-sm text-gray-400 text-center">Nepal</p>
                            <div className="flex gap-4 mt-3">
                                <motion.a
                                    whileHover={{ scale: 1.2 }}
                                    href={import.meta.env.VITE_GITHUB_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-blue-300 transition"
                                    aria-label="GitHub"
                                >
                                    <FaGithub />
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.2 }}
                                    href={import.meta.env.VITE_LINKEDIN_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-blue-400 transition"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin />
                                </motion.a>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>

            <Footer />
        </section>
    );
};

export default Contact;