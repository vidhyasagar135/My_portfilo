import React from "react";

const techStack = [
  { name: "Python", icon: "devicon-python-plain" },
  { name: "Core Java", icon: "devicon-java-plain" },
  { name: "MongoDB", icon: "devicon-mongodb-plain" },
  { name: "SQL", icon: "devicon-mysql-plain" },
  { name: "C", icon: "devicon-c-plain" },
  { name: "HTML", icon: "devicon-html5-plain" },
  { name: "CSS", icon: "devicon-css3-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "React", icon: "devicon-react-original" },
  { name: "Git", icon: "devicon-git-plain" },
];

export default function Technologies() {
  return (
    <div className="p-10 bg-white rounded-xl shadow">
      <h2 className="text-center text-xl font-semibold mb-8">
        Technologies I Work With
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-10 gap-x-5 gap-y-10 place-items-center">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center w-20 h-20 rounded-xl bg-gray-100 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 justify-center"
          >
            <i className={`${tech.icon} text-2xl text-gray-700`}></i>
            <span className="text-xs mt-1 text-gray-700 font-medium text-center">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
