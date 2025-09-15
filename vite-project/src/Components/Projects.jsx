import React, { useState } from "react";
import LogoInvoice from "../assets/Logo_invoice.png";
import Gitlogo from "../assets/git_logo.png";
import weather from "../assets/Weather_logo.png";
const categories = ["All", "Web Apps", "Mobile", "APIs"];

const projects = [
  {
    title: "Invoice Generator For small Startups and Bussiness Using React",
    description:
      "A sleek and customizable invoice generator built with React, tailored for small startups and businesses to streamline billing. It supports dynamic item entries, tax calculations, and PDF-ready exports for professional invoicing.",
    tags: ["React",  "MongoDB", "Node js"],
    badge: "Featured",
    category: "Web Apps",
    image: LogoInvoice,
    links: [
      { label: "Code", href: "https://github.com/vidhyasagar135/Invoice_gen", target: "_blank" },
      { label: "Live Demo", href: "#" },
    ],
  },
  {
    title: "Discover & Save Top GitHub Profiles",
    description:
      "Explore a curated collection of standout GitHub profiles showcasing innovative projects, clean code, and community impact. Perfect for finding inspiration, collaborators, or role models in the developer world.",
    tags: ["React js", "Mongo", "Node js"],
    badge: "Popular",
    category: "Web Apps",
    image: Gitlogo,
    links: [
      { label: "Code", href: "#" },
      { label: "Live Demo", href: "#" },
    ],
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather application with location-based forecasts, interactive maps, weather alerts, and detailed analytics. Integrates multiple weather APIs for accuracy.",
    tags: ["Html", "CSS", "Java Script"],
    badge: "New",
    category: "Web Apps",
    image: weather,
    links: [
      { label: "Code", href: "https://github.com/vidhyasagar135/API_WEATHER" , target: "_blank" },
      { label: "Live Demo", href: "#" },
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
