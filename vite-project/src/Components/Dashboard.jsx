
import React from "react";

const Dashboard = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
   
      <div className="text-xl font-semibold text-gray-1000">
        VIDHYA SAGAR VALAPADASU
      </div>


      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li>
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
        </li>
        <li>
          <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
        </li>
        <li>
          <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
        </li>
        <li>
          <a href="#blog" className="hover:text-blue-600 transition-colors">Blog</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Dashboard;
