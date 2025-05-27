import { motion } from "framer-motion";

const profileImg =
    "https://media.licdn.com/dms/image/v2/D4D03AQGDv_Cw0mYvvw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723900495512?e=2147483647&v=beta&t=hlrQXcVrdnh-FgelrjRaEmjr3si8fq_x0BSbqJHhEZI";

const aboutCards = [
     {
        text: `I love collaborating with teams to create impactful digital experiences. My journey in tech has taught me the importance of clean code, accessibility, and continuous learning. I thrive in environments where innovation and creativity are encouraged.`,
    },
    {
        text: `Hi! I'm [Your Name], currently pursuing [My Education level] in [My College] in [My Course], a passionate developer with experience in building responsive and user-friendly applications using React, JavaScript, and modern web technologies like DotNet acting as backend. I enjoy turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, you can find me exploring new tech, reading, or enjoying the outdoors.`,
    },
   
    {
        text: `Outside of coding, I enjoy hiking, photography, and exploring new cuisines. I believe a balanced life fuels creativity and productivity, helping me bring fresh perspectives to my work.`,
    },
];

const About = () => {
    return (
        <div className="w-full overflow-x-auto flex flex-col  items-center justify-center">
            <h1 className="text-4xl flex items-center justify-center text-white">About Me</h1>
            <div className="flex gap-8 min-w-[900px] justify-center  md:min-w-0 md:flex-row">
                {aboutCards.map((card, idx) => (
                    <motion.div
                        key={idx}
                        className="relative flex flex-col justify-center items-center min-h-[40vh] w-[300px] flex-shrink-0 py-8 px-4 rounded-xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: idx * 0.2 }}
                    >
                        <div
                            className="absolute inset-0 z-0 bg-center bg-cover opacity-30 rounded-xl"
                            style={{
                                backgroundImage: `url(${profileImg})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                filter: "blur(2px)",
                            }}
                        />
                        <div className="relative z-10">
                            <p className="flex text-gray-200 leading-relaxed justify-center">
                                {card.text}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default About;