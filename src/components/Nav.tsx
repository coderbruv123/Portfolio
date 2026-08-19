import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

const Nav = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-slate-950/90 backdrop-blur-md border-b border-white/10 shadow-lg"
                    : "bg-gradient-to-b from-slate-950/70 to-transparent"
            }`}
        >
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
                <a href="#hero" className="text-lg font-bold text-white tracking-tight">
                    Prashant<span className="text-blue-400">.Giri</span>
                </a>

                <ul className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-sm text-slate-300 hover:text-blue-300 transition py-2"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="hidden md:flex items-center gap-4">
                    <a
                        href={import.meta.env.VITE_GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-blue-300 transition"
                        aria-label="GitHub"
                    >
                        <FaGithub size={18} />
                    </a>
                    <a
                        href={import.meta.env.VITE_LINKEDIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-blue-400 transition"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={18} />
                    </a>
                    <a
                        href="#contact"
                        className="text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white rounded-lg px-4 py-2 transition"
                    >
                        Hire Me
                    </a>
                </div>

                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setOpen((o) => !o)}
                    aria-label="Toggle menu"
                >
                    {open ? "×" : "☰"}
                </button>
            </nav>

            {open && (
                <div className="md:hidden bg-slate-950/95 backdrop-blur-md border-t border-white/10 px-6 py-4">
                    <ul className="flex flex-col gap-4">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="text-slate-300 hover:text-blue-300 transition"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Nav;