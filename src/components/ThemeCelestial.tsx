import { useMemo } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

/**
 * The sky behind the portfolio: a twinkling starfield in dark mode, soft
 * drifting clouds in light mode, and a moon (night) / sun (day) that glides
 * between the right and left edges when the theme flips. The View Transitions
 * API interpolates the body's position, scale and glow across palettes via
 * view-transition-name (see ::view-transition-group(theme-astro) in
 * index.css) — right→left as day breaks, left→right as night falls.
 */
const ThemeCelestial = () => {
    const [theme] = useTheme();
    const isLight = theme === "light";

    // Stable starfield — generated once so re-renders don't reshuffle the sky.
    const stars = useMemo(
        () =>
            Array.from({ length: 48 }, () => ({
                left: Math.random() * 100,
                top: Math.random() * 55,
                delay: Math.random() * 3,
                bright: Math.random() < 0.3,
            })),
        []
    );

    return (
        <div aria-hidden="true" className="pointer-events-none fixed -z-10 inset-0 overflow-hidden">
            {/* Night — twinkling stars */}
            <div className={`sky-fade absolute inset-0 ${isLight ? "opacity-0" : "opacity-100"}`}>
                {stars.map((s, i) => (
                    <span
                        key={i}
                        className="absolute rounded-full bg-white animate-twinkle"
                        style={{
                            left: `${s.left}%`,
                            top: `${s.top}%`,
                            width: s.bright ? 2 : 1,
                            height: s.bright ? 2 : 1,
                            animationDelay: `${s.delay}s`,
                        }}
                    />
                ))}
            </div>

            {/* Day — soft drifting clouds */}
            <div className={`sky-fade absolute inset-0 ${isLight ? "opacity-100" : "opacity-0"}`}>
                <span className="cloud cloud-a top-[17%] left-[7%]" />
                <span className="cloud cloud-b top-[28%] right-[8%]" />
            </div>

            {/* The body itself — moon (dark, right) / sun (light, left) */}
            <div
                className="absolute top-[13%] left-[80%] light:top-[9%] light:left-[14%] w-24 h-24 grid place-items-center rounded-full bg-[radial-gradient(circle,#3b82f633,transparent_70%)] light:bg-[radial-gradient(circle,#facc154d,transparent_70%)]"
                style={{ viewTransitionName: "theme-astro" }}
            >
                {isLight ? (
                    <FaSun size={34} className="text-amber-400/90" />
                ) : (
                    <FaMoon size={26} className="text-blue-200/70" />
                )}
            </div>
        </div>
    );
};

export default ThemeCelestial;
