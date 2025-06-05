import React from 'react';
import { ExternalLink, Github, Zap, Users, Target } from 'lucide-react';

interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects = ({ isDarkMode }: ProjectsProps) => {
  const projects = [
    {
      title: "Football Player Rating Prediction System",
      description: "Machine learning project featuring data scraping, model training, and ensemble prediction algorithms to accurately predict football player ratings based on performance metrics.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
      technologies: ["Python", "Machine Learning", "Data Science", "Ensemble Methods"],
      icon: <Target size={24} />,
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Job PeeK - Job Listing Platform",
      description: "React-based CRUD job listing platform with advanced filtering, routing, and user-friendly interface. Features real-time job search and application management.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop",
      technologies: ["React.js", "Node.js", "REST API", "MongoDB"],
      icon: <Zap size={24} />,
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "CodeYatra Hackathon",
      description: "Served as organizer and documentation lead for a national hackathon, coordinating events, managing documentation, and facilitating collaboration among participants.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=500&fit=crop",
      technologies: ["Event Management", "Documentation", "Leadership", "Coordination"],
      icon: <Users size={24} />,
      githubUrl: "#",
      demoUrl: "#"
    }
  ];

  return (
    <section id="projects" className={`py-20 ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto rounded-full"></div>
          <p className={`mt-6 text-lg max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Here are some of my recent projects that showcase my skills in web development, 
            machine learning, and project management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                isDarkMode
                  ? 'bg-gray-700 shadow-lg'
                  : 'bg-gray-50 shadow-md'
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-white">
                  {project.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`text-sm mb-4 leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        isDarkMode
                          ? 'bg-gray-600 text-gray-300'
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isDarkMode
                        ? 'text-gray-300 hover:text-white hover:bg-gray-600'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demoUrl}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-medium rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
