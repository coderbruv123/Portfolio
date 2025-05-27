import Techs from "../components/Techs";
import Lottie from "lottie-react";
import animationData from "../animation/Animation - 1747669202207.json";

const Skills = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center w-full">
            <h2 className="text-4xl text-white mb-8 text-center">Skills</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl">
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <div className="w-[400px] h-[400px] flex items-center justify-center">
                        <Techs />
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <Lottie style={{ width: 400, height: 400 }} animationData={animationData} />
                </div>
            </div>
        </div>
    );
}

export default Skills;