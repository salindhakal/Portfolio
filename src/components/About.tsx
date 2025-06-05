
import React from 'react';
import { Download, User, Code, Palette } from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
}

const About = ({ isDarkMode }: AboutProps) => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "Full-Stack Development",
      description: "MERN stack expertise with modern frameworks"
    },
    {
      icon: <User size={24} />,
      title: "Machine Learning",
      description: "AI/ML projects with data analysis and model training"
    },
    {
      icon: <Palette size={24} />,
      title: "UI/UX Design",
      description: "Creative design with Figma and Adobe Creative Suite"
    }
  ];

  return (
    <section id="about" className={`py-20 transition-all duration-500 ${
      isDarkMode ? 'bg-gradient-to-b from-green-900/20 to-gray-800' : 'bg-gradient-to-b from-green-100 to-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className={`text-lg leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm a passionate <span className="font-semibold text-green-500">Computer Engineering student</span> and 
              aspiring <span className="font-semibold text-emerald-500">Machine Learning Engineer</span> based in 
              Kathmandu, Nepal. With experience in the MERN stack, UI/UX design, and machine learning projects, 
              I bring a unique blend of technical expertise and creative vision to every project.
            </p>
            
            <p className={`text-lg leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm adept at delivering clean and scalable solutions with a focus on user-centric design. 
              My goal is to combine creativity and code to bridge the gap between functionality and aesthetics, 
              creating digital experiences that are both beautiful and performant.
            </p>

            <div className="pt-6">
              <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Download size={20} className="mr-2" />
                Download CV
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isDarkMode
                    ? 'bg-gray-700 hover:bg-gray-600'
                    : 'bg-gray-50 hover:bg-gray-100'
                } shadow-lg hover:shadow-xl`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-white">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {highlight.title}
                    </h3>
                    <p className={`${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
