// OrbitIcons.jsx
import React from "react";

const techIcons = [
  { src: "/icons/js.svg", alt: "JavaScript" },
  { src: "/icons/css.svg", alt: "CSS" },
  { src: "/icons/tailwind.svg", alt: "Tailwind" },
  { src: "/icons/react.svg", alt: "React" },
  { src: "/icons/nextjs.svg", alt: "Next.js" },
  { src: "/icons/redux.svg", alt: "Redux" },
  { src: "/icons/git.svg", alt: "Git" },
  { src: "/icons/github.svg", alt: "GitHub" },
  { src: "/icons/linux.svg", alt: "Linux" },
  { src: "/icons/vscode.svg", alt: "VSCode" },
  { src: "/icons/ts.svg", alt: "TypeScript" },
  { src: "/icons/firebase.svg", alt: "Firebase" },
];

const OrbitIcons = () => {
  const radius = 150; // radius of orbit
  const centerX = 200;
  const centerY = 200;

  return (
    <div className="relative w-[400px] h-[400px] mx-auto my-10">
      {/* Central circle */}
      <div className="absolute top-[50%] left-[50%] w-[100px] h-[100px] bg-gradient-to-br from-teal-500 to-gray-700 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg" />

      {/* Orbiting icons */}
      {techIcons.map((icon, index) => {
        const angle = (index / techIcons.length) * 2 * Math.PI;
        const x = centerX + radius * Math.cos(angle) - 20;
        const y = centerY + radius * Math.sin(angle) - 20;

        return (
          <img
            key={index}
            src={icon.src}
            alt={icon.alt}
            title={icon.alt}
            className="absolute w-10 h-10 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
            style={{ left: `${x}px`, top: `${y}px` }}
          />
        );
      })}
    </div>
  );
};

export default OrbitIcons;
