import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const LandingPage1 = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-sm bg-gray-100 text-gray-700 py-1.5 px-3 rounded-full ring-1 ring-black/5">
              <span className="text-base">{"</>"}</span> Full Stack Developer
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
              Building Digital <br className="hidden md:block" /> Experiences
            </h1>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {" "}
              <span className="text-2xl font-bold text-gray-900">
                I'm Vidhya Sagar Valapadasu
              </span>
              , a passionate full-stack developer and DSA enthusiast with 150+ problems solved across online platforms. Proficient in Python and Java, I enjoy building innovative web applications and digital solutions.
              <span className="inline-flex items-center ml-3 gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              </span>
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/Resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 rounded-md border border-gray-300 text-gray-800 hover:bg-gray-100 transition shadow-sm"
              >
                Download Resume <span className="ml-2">⬇</span>
              </a>
            </div>

            <div className="mt-6 flex items-center gap-5 text-xl text-gray-600">
              <a
                href="https://github.com/vidhyasagar135"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/vidhya-sagar-valapadasu-60aa56301/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:vvidhyasagar135@gmail.com"
                aria-label="Email"
                className="hover:text-gray-900"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="relative rounded-3xl bg-gray-200 overflow-hidden shadow-xl ring-1 ring-black/5 md:h-[480px] h-[360px]">
              <img
                src="/profile-illustration.png"
                alt="Profile Illustration"
                className="absolute inset-0 w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur rounded-xl shadow-lg ring-1 ring-black/5 px-4 py-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-gray-700">Open to Work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage1;
