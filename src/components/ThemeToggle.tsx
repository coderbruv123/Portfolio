import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle = ({ className = "" }: { className?: string }) => {
    const [theme, toggle] = useTheme();
    const isLight = theme === "light";

    return (
        <motion.button
            type="button"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggle}
            aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
            title={isLight ? "Dark mode" : "Light mode"}
            className={`relative w-9 h-9 grid place-items-center rounded-lg border border-line bg-veil text-ink-3 hover:text-blue hover:border-blue/40 transition-colors ${className}`}
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={theme}
                    initial={{ opacity: 0, rotate: -70, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 70, scale: 0.5 }}
                    transition={{ duration: 0.22 }}
                    className="grid place-items-center"
                >
                    {isLight ? <FaMoon size={14} /> : <FaSun size={15} />}
                </motion.span>
            </AnimatePresence>
        </motion.button>
    );
};

export default ThemeToggle;
