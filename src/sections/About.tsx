// import Techs from "../components/Techs"

import { motion } from "framer-motion";

const About = ()=>{
    return(
        <motion.div className="" initial={{opacity:0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}>
            <div className="text-1xl flex flex-col items-center  font-bold ">
              
                <p>
        Hi! I'm [Your Name] currently pursuing [My Education level] in [My College] in [My Course], a passionate  developer with experience in building responsive and
        user-friendly applications using React, JavaScript, and modern web technologies like DotNet acting as backend.
        I enjoy turning complex problems into simple, beautiful, and intuitive designs. When I'm not
        coding, you can find me exploring new tech, reading, or enjoying the outdoors.
      </p>
        </div>
        </motion.div>
    )
}
export default About;