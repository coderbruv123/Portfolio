import Techs from "../components/Techs";
import Lottie from "lottie-react";
import animationData from "../animation/Animation - 1747669202207.json";

const Skills = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center w-full overflow-x-hidden">
            <h2 className="text-4xl text-white mb-8 text-center">Skills</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl px-4">
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <div className="w-full max-w-[400px] h-auto flex items-center justify-center">
                        <Techs />
                    </div>
                </div>
                {/* Show Lottie only on md and up */}
                <div className="hidden md:flex w-full md:w-1/2 items-center justify-center">
                    <div className="w-full max-w-[400px] h-auto flex items-center justify-center">
                        <Lottie style={{ width: "100%", maxWidth: 400, height: "auto" }} animationData={animationData} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;