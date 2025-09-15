import React, { useState } from "react";

const categories = ["All", "Web Apps", "Mobile", "APIs"];

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, payment processing, inventory management, and admin dashboard. Built with modern technologies for scalability.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    badge: "Featured",
    category: "Web Apps",
    image: "https://via.placeholder.com/600x300?text=E-commerce+Platform+Screenshot",
    links: [
      { label: "Code", href: "#" },
      { label: "Live Demo", href: "#" },
    ],
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and comprehensive project tracking.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    badge: "Popular",
    category: "Web Apps",
    image: "https://via.placeholder.com/600x300?text=Task+Management+App+Screenshot",
    links: [
      { label: "Code", href: "#" },
      { label: "Live Demo", href: "#" },
    ],
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather application with location-based forecasts, interactive maps, weather alerts, and detailed analytics. Integrates multiple weather APIs for accuracy.",
    tags: ["React", "D3.js", "OpenWeather API", "Tailwind"],
    badge: "New",
    category: "Web Apps",
    image: "https://via.placeholder.com/600x300?text=Weather+Dashboard+Screenshot",
    links: [
      { label: "Code", href: "#" },
      { label: "Live Demo", href: "#" },
    ],
  },
  {
    title: "Social Media API",
    description:
      "A robust RESTful API for a social media platform with user authentication, post management, real-time messaging, and comprehensive admin controls.",
    tags: ["Express.js", "MongoDB", "JWT", "Redis"],
    badge: "Backend",
    category: "APIs",
    image: "https://via.placeholder.com/600x300?text=Social+Media+API+Screenshot",
    links: [
      { label: "Code", href: "#" },
      { label: "Documentation", href: "#" },
    ],
  },
];

export default function FeaturedProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-3">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 mb-10">
          A selection of my recent work showcasing different technologies and
          problem-solving approaches.
        </p>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  {project.badge && (
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                      {project.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-100 rounded-md text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-gray-700 hover:underline"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
