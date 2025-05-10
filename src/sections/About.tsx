import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div
            className="flex flex-col justify-center items-center min-h-[40vh] py-8 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
             <h2 className="text-3xl font-extrabold mb-4 text-white tracking-tight">About Me</h2>
            <div className="bg-gray-900/90 rounded-xl shadow-lg max-w-7xl w-full p-2 flex flex-col items-center">
               
                <div className="w-50 h-50 rounded-full overflow-hidden mb-4">
                    <img
                        src="https://media.licdn.com/dms/image/v2/D4D03AQGDv_Cw0mYvvw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723900495512?e=2147483647&v=beta&t=hlrQXcVrdnh-FgelrjRaEmjr3si8fq_x0BSbqJHhEZI"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    /></div>
                <p className=" flex text-gray-200 leading-relaxed justify-center">
                    Hi! I'm [Your Name], currently pursuing [My Education level] in [My College] in [My Course], a passionate developer with experience in building responsive and
                    user-friendly applications using React, JavaScript, and modern web technologies like DotNet acting as backend.
                    I enjoy turning complex problems into simple, beautiful, and intuitive designs. When I'm not
                    coding, you can find me exploring new tech, reading, or enjoying the outdoors.
                </p>
            </div>
        </motion.div>
    );
};

export default About;