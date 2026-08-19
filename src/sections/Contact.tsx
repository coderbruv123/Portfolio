import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Footer from "./Footer";

const Contact = () => {
    return (
        <section
            id="contact"
            className="min-h-screen flex flex-col justify-center items-center bg-slate-950 px-6 py-20"
        >
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Contact Me
            </h2>
            <p className="text-gray-400 mb-12 text-center max-w-lg">
                I would love to hear from you! Whether it's about a project, collaboration, or just saying hi — feel free to reach out.
            </p>

            <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full max-w-4xl">
                <a
                    href="mailto:giriprashant516@gmail.com"
                    className="group w-full md:w-64 bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col items-center justify-center p-8 shadow-xl hover:border-blue-400/40 hover:shadow-blue-500/10 transition"
                >
                    <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                        <MdEmail size={28} className="text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                    <p className="text-sm text-gray-400 text-center select-all">giriprashant516@gmail.com</p>
                </a>

                <a
                    href="tel:9818057756"
                    className="group w-full md:w-64 bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col items-center justify-center p-8 shadow-xl hover:border-purple-400/40 hover:shadow-purple-500/10 transition"
                >
                    <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                        <MdPhone size={28} className="text-purple-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                    <p className="text-sm text-gray-400 text-center select-all">9818057756</p>
                </a>

                <div className="w-full md:w-64 bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col items-center justify-center p-8 shadow-xl">
                    <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                        <MdLocationOn size={28} className="text-green-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">Location</h3>
                    <p className="text-sm text-gray-400 text-center">Nepal</p>
                    <div className="flex gap-4 mt-3">
                        <a
                            href={import.meta.env.VITE_GITHUB_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-blue-300 transition"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href={import.meta.env.VITE_LINKEDIN_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-blue-400 transition"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    );
};

export default Contact;