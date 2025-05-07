import { SiSharp, SiJavascript, SiDart, SiPhp, SiTypescript } from "react-icons/si";

const Techs = () => {
    return (
        <div className="bg-gray-900 flex flex-col items-center text-white p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold">Technologies I've Worked with</h1>
            <div className="flex gap-4 mt-4">
                <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold">Frontend</h2>
                    <ul className="mt-2 flex gap-6">
                        <li className="flex flex-col items-center gap-2">
                            <SiJavascript size={80} /> JavaScript
                        </li>
                        <li className="flex flex-col items-center gap-2">
                            <SiTypescript size={80} /> TypeScript
                        </li>
                        <li className="flex items-center flex-col gap-2">
                            <SiDart size={80} /> Dart
                        </li>
                    </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold">Backend</h2>
                    <ul className="mt-2 flex gap-6">
                        <li className="flex flex-col items-center gap-2">
                            <SiSharp size={80} /> C#
                        </li>
                        <li className="flex flex-col items-center gap-2">
                            <SiPhp size={80} /> PHP
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Techs;