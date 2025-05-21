import Techs from "../components/Techs";
import Lottie from "lottie-react";
import animationData from "../animation/Animation - 1747669202207.json";
import OrbitIcons from "../components/Orbitcon";
const Skills = ()=>{
    return(
        <div className="skills ">

            <h2>Skills</h2>
            <div className="flex">

          <Techs/>

              <div className="w-1/2">
            <Lottie size={20} animationData={animationData} ></Lottie>
          </div>
        
            </div>
           
        </div>
    )
}

export default Skills;