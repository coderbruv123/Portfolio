import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
    const spotlightRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | null>(null);
    const cursorPosRef = useRef({ x: 50, y: 30 });

    useEffect(() => {
        const spotlight = spotlightRef.current;
        if (!spotlight) return;

        const updateSpotlight = () => {
            spotlight.style.setProperty('--mx', `${cursorPosRef.current.x}%`);
            spotlight.style.setProperty('--my', `${cursorPosRef.current.y}%`);
        };

        const handleMouseMove = (e: MouseEvent) => {
            cursorPosRef.current.x = (e.clientX / window.innerWidth) * 100;
            cursorPosRef.current.y = (e.clientY / window.innerHeight) * 100;

            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(() => {
                updateSpotlight();
                rafRef.current = null;
            });
        };

        // Touch fallback
        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                const touch = e.touches[0];
                cursorPosRef.current.x = (touch.clientX / window.innerWidth) * 100;
                cursorPosRef.current.y = (touch.clientY / window.innerHeight) * 100;
                if (rafRef.current) cancelAnimationFrame(rafRef.current);
                rafRef.current = requestAnimationFrame(() => {
                    updateSpotlight();
                    rafRef.current = null;
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-surface">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface to-surface-2" />

            {/* Cursor spotlight - CSS var interpolation */}
            <div
                ref={spotlightRef}
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(420px circle at var(--mx, 50%) var(--my, 30%), rgb(96 165 250 / .16), rgb(167 139 250 / .08) 40%, transparent 65%)',
                }}
            />

            {/* Floating orbs */}
            <motion.div
                className="absolute -top-40 -left-40 w-[32rem] h-[32rem] rounded-full opacity-30 light:opacity-[0.16]"
                style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)", filter: "blur(60px)" }}
                animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-1/3 -right-48 w-[36rem] h-[36rem] rounded-full opacity-30 light:opacity-[0.16]"
                style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)", filter: "blur(60px)" }}
                animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
                transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-0 left-1/3 w-[28rem] h-[28rem] rounded-full opacity-25 light:opacity-[0.14]"
                style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)", filter: "blur(60px)" }}
                animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.06] light:opacity-[0.14]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.5) 1px, transparent 1px)",
                    backgroundSize: "56px 56px",
                    maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
                }}
            />

            {/* Grain */}
            <div
                className="absolute inset-0 opacity-[0.04] light:opacity-[0.035]"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                }}
            />
        </div>
    );
};

export default AnimatedBackground;