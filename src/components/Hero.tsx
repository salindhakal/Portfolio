import React from "react";
import { Github, Linkedin, Mail, Youtube } from "lucide-react";

interface HeroProps {
  isDarkMode: boolean;
}

const Hero = ({ isDarkMode }: HeroProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative ${
        isDarkMode
          ? "bg-gradient-to-br from-emerald-900 via-green-900/40 to-emerald-800/50"
          : "bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 transform transition-all duration-1000 hover:scale-105 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">
              Salin
            </span>
            .
          </h1>

          <p
            className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 hover:translate-y-[-2px] ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I build responsive, user-friendly web applications with a passion
            for
            <span className="font-semibold text-emerald-500 hover:text-green-500 transition-colors duration-300">
              {" "}
              machine learning
            </span>
            , clean design, and performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 transform transition-all duration-1000 delay-500">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 "
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`px-8 py-4 font-semibold rounded-lg border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                isDarkMode
                  ? "border-emerald-600 text-emerald-300 hover:bg-emerald-900/30 hover:border-emerald-500 hover:shadow-emerald-500/25"
                  : "border-emerald-400 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-500 hover:shadow-emerald-500/25"
              }`}
            >
              Get in Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-12 transform transition-all duration-1000 delay-700">
            <a
              href="https://github.com/salindhakal"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 ${
                isDarkMode
                  ? "text-emerald-400 hover:text-white hover:bg-emerald-800/50 hover:shadow-lg hover:shadow-emerald-500/25"
                  : "text-emerald-600 hover:text-emerald-900 hover:bg-emerald-100 hover:shadow-lg hover:shadow-emerald-500/25"
              }`}
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/salin-dhakal-38912b2ba/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 ${
                isDarkMode
                  ? "text-emerald-400 hover:text-white hover:bg-emerald-800/50 hover:shadow-lg hover:shadow-emerald-500/25"
                  : "text-emerald-600 hover:text-emerald-900 hover:bg-emerald-100 hover:shadow-lg hover:shadow-emerald-500/25"
              }`}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.youtube.com/@salindhakal7"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 ${
                isDarkMode
                  ? "text-emerald-400 hover:text-white hover:bg-emerald-800/50 hover:shadow-lg hover:shadow-emerald-500/25"
                  : "text-emerald-600 hover:text-emerald-900 hover:bg-emerald-100 hover:shadow-lg hover:shadow-emerald-500/25"
              }`}
            >
              <Youtube size={24} />
            </a>
            <a
              href="mailto:contact@salindhakal.com.np"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 ${
                isDarkMode
                  ? "text-emerald-400 hover:text-white hover:bg-emerald-800/50 hover:shadow-lg hover:shadow-emerald-500/25"
                  : "text-emerald-600 hover:text-emerald-900 hover:bg-emerald-100 hover:shadow-lg hover:shadow-emerald-500/25"
              }`}
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
