 import {motion} from "framer-motion";
 const contactIcon = ()=>{
    return(
        <motion.div
         className="bg-orange-500 h-15 w-15 rounded-full flex border-solid border-blue-300  items-center justify-center"
         initial={{borderWidth: 1}}
         whileHover={{ scale: 1.2 ,borderWidth:8 ,boxShadow: "0px 0px 8px rgba(8, 8, 8, 0.5)"}}
         transition={{ duration: 1 }}>
            contact
        </motion.div>
    )
}
export default contactIcon;
