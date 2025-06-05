import React from 'react';

interface SkillsProps {
  isDarkMode: boolean;
}

const Skills = ({ isDarkMode }: SkillsProps) => {
  const technicalSkills = [
    'JavaScript', 'React.js', 'Python', 'Node.js', 'Flutter',
    'Tailwind CSS', 'REST APIs', 'SQL', 'Git', 'GitHub',
    'Postman', 'Figma', 'Adobe Photoshop', 'Adobe Premiere Pro'
  ];

  const softSkills = [
    'Agile Methodology',
    'Test-Driven Development',
    'Model Evaluation & Tuning',
    'Problem Solving',
    'Team Collaboration',
    'Project Management'
  ];

  return (
    <section id="skills" className={`py-20 transition-all duration-500 ${
      isDarkMode ? 'bg-gradient-to-b from-gray-800 to-green-900/20' : 'bg-gradient-to-b from-white to-green-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    isDarkMode
                      ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                      : 'bg-white hover:bg-gray-50 text-gray-700 shadow-md'
                  }`}
                >
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills & Methodologies */}
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Soft Skills & Methodologies
            </h3>
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    isDarkMode
                      ? 'bg-gray-800 hover:bg-gray-700'
                      : 'bg-white hover:bg-gray-50 shadow-md'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
                    <span className={`font-medium ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className={`mt-16 p-8 rounded-xl ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        } shadow-xl`}>
          <div className="text-center">
            <h3 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Always Learning
            </h3>
            <p className={`text-lg ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm constantly exploring new technologies and methodologies to stay current with 
              industry trends and deliver cutting-edge solutions. My passion for continuous 
              learning drives me to tackle complex challenges and create innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
