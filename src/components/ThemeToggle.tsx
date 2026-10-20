import { motion } from "framer-motion";
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
            {/*
              The icon gets its own view-transition-name so the sun/moon
              morphs in place during the theme transition (browsers without
              the API just swap instantly — same as before).
            */}
            <span className="grid place-items-center" style={{ viewTransitionName: "theme-icon" }}>
                {isLight ? <FaMoon size={14} /> : <FaSun size={15} />}
            </span>
        </motion.button>
    );
};

export default ThemeToggle;
