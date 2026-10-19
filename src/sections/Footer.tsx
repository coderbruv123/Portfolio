import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full pt-12 mt-20">
            <div className="border-t border-line pt-8 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-ink-4 text-sm">
                    &copy; {new Date().getFullYear()} Prashant Giri. All rights reserved.
                </p>
                <p className="text-ink-4 text-sm flex items-center gap-1.5">
                    Built with <FaHeart className="text-red" size={12} /> using .NET, Angular & React
                </p>
                <div className="flex items-center gap-4">
                    <a
                        href={import.meta.env.VITE_GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ink-4 hover:text-blue transition flex items-center gap-1.5 text-sm"
                    >
                        <FaGithub size={16} /> GitHub
                    </a>
                    <a
                        href={import.meta.env.VITE_LINKEDIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ink-4 hover:text-blue transition flex items-center gap-1.5 text-sm"
                    >
                        <FaLinkedin size={16} /> LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
