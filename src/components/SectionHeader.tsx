import { motion } from "framer-motion";
import Reveal from "./Reveal";

const SectionHeader = ({ title, tagline }: { title: string; tagline?: string }) => {
    return (
        <Reveal className="flex flex-col items-center text-center mb-14">
            <motion.h2
                className="text-4xl md:text-5xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {title.split(" ").map((word, i) => (
                    <span key={i} className={i === 0 ? "" : ""}>
                        {word}{" "}
                    </span>
                ))}
            </motion.h2>
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="h-1 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-full mt-3"
            />
            {tagline && (
                <p className="text-gray-400 mt-4 max-w-xl">{tagline}</p>
            )}
        </Reveal>
    );
};

export default SectionHeader;