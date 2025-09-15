import React from "react";

const experiences = [
  {
    title: "Summer Internship Programme at NIT Warangal",
    company: "TechCorp Solutions",
    date: "May 2024 - July 2024",
    description:
      "Explored machine learning datasets and algorithms, and successfully completed an image colorization project using AI/ML through collaborative teamwork.",
    tags: ["Machine Learning"],
  },
 
];

const education = [
    {
    title: "Intermediate (10+2)",
    company: "SR Junior Collage WARANGAL",
    date: "2020 - 2022",
    CGPA:"Percentage : 95.2",
    tags: ["M.P.C"],
  },
  {
    title: "Bachelor of Computer Science",
    company: "SR UNIVERSITY WARANGAL",
    date: "2022 - 2026",
    CGPA:"CGPA : 9.13",
    tags: ["Data Structures", "Algorithms", "Software Engineering"],
  },

  
 
];

export default function ExperienceEducation() {
  return (
    <div className="px-6 py-16 bg-white">
      <h2 className="text-center text-2xl font-semibold">
        Experience & Education
      </h2>
      <p className="text-center text-gray-600 mt-2 mb-12">
        My professional journey and educational background that shaped my
        expertise in software development.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Professional Experience */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xl">💼</span>
            <h3 className="text-lg font-semibold">Professional Experience</h3>
          </div>

          <div className="relative border-l-2 border-gray-200 ml-4">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-10 ml-6">
                <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold">{exp.title}</h4>
                    <span className="text-sm bg-gray-200 rounded-full px-2 py-0.5">
                      {exp.date}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-700 mt-2">{exp.CGPA}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-200 px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xl">🎓</span>
            <h3 className="text-lg font-semibold">Education & Certifications</h3>
          </div>

          <div className="relative border-l-2 border-gray-200 ml-4">
            {education.map((edu, index) => (
              <div key={index} className="mb-10 ml-6">
                <div className="absolute -left-3 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold">{edu.title}</h4>
                    <span className="text-sm bg-gray-200 rounded-full px-2 py-0.5">
                      {edu.date}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{edu.company}</p>
                  <p className="text-sm text-gray-700 mt-2">{edu.CGPA}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {edu.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-200 px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
