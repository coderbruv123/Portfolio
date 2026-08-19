import { motion } from "framer-motion";

const Reveal = ({ children, delay = 0, x = 0, y = 24, className = "" }: {
    children: React.ReactNode;
    delay?: number;
    x?: number;
    y?: number;
    className?: string;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, x, y }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;