import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

    return (
        <motion.div
            className="fixed top-0 inset-x-0 z-[60] h-0.5 origin-left"
            style={{
                scaleX,
                background: "linear-gradient(to right, #3b82f6, #8b5cf6, #06b6d4)",
            }}
        />
    );
};

export default ScrollProgress;