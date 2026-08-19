import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { smoothScrollTo } from "../utils/smoothScroll";

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
    const [active, setActive] = useState("");

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 24);

            const sections = links.map((l) => l.href.slice(1));
            const offset = window.scrollY + window.innerHeight / 3;
            let current = "";

            for (const id of sections) {
                const el = document.getElementById(id);
                if (el && el.offsetTop <= offset) {
                    current = id;
                }
            }
            setActive(current);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
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
                <a
                    href="#hero"
                    onClick={(e) => {
                        e.preventDefault();
                        smoothScrollTo("#hero", 0, 900);
                    }}
                    className="text-lg font-bold text-white tracking-tight"
                >
                    Prashant<span className="text-blue-400">.Giri</span>
                </a>

                <ul className="hidden md:flex items-center gap-2">
                    {links.map((link) => {
                        const isActive = active === link.href.slice(1);
                        return (
                            <li key={link.href} className="relative">
                                <a
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        smoothScrollTo(link.href);
                                        setOpen(false);
                                    }}
                                    className={`relative px-3 py-2 text-sm rounded-lg transition ${
                                        isActive
                                            ? "text-white"
                                            : "text-slate-300 hover:text-blue-300"
                                    }`}
                                >
                                    {link.label}
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-white/10 border border-white/10 rounded-lg -z-10"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </a>
                            </li>
                        );
                    })}
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
                        onClick={(e) => {
                            e.preventDefault();
                            smoothScrollTo("#contact");
                            setOpen(false);
                        }}
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
                                    onClick={(e) => {
                                        e.preventDefault();
                                        smoothScrollTo(link.href);
                                        setOpen(false);
                                    }}
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