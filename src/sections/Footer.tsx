import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-800 py-6 mt-12">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4">
                <div className="flex items-center gap-3">
                    <MdEmail className="text-blue-400" size={22} />
                    <a
                        href="mailto:giriprashant516@gmail.com"
                        className="text-gray-300 hover:text-blue-400 transition text-sm"
                    >
                        giriprashant516@gmail.com
                    </a>
                </div>
                <p className="text-gray-400 text-sm text-center">
                    &copy; {new Date().getFullYear()} Prashant Giri. All rights reserved.
                </p>
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <a
                        href="https://github.com/giriprashant"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition flex items-center gap-1"
                    >
                        <FaGithub size={18} /> GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/giriprashant"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition flex items-center gap-1"
                    >
                        <FaLinkedin size={18} /> LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;