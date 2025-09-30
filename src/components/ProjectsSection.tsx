'use client';

import { useState, useEffect, useRef } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  category: string;
  status: string;
}

export default function ProjectsSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: "Front End Refactor",
      description: "Modernized web repo by rebuilding the architecture with custom APIs, cloud database integration, and streamlined data processing for enhanced scalability and maintainability.",
      technologies: ["React.js", "Node.js", "MongoDB Atlas", "TaxJar API", "RESTful APIs", "JSON Processing"],
      highlights: [
        "Refactored legacy Infinity codebase for improved organization",
        "Built custom Taxonomy API with multi-level categorization",
        "Implemented MongoDB cloud database for dynamic JSON processing",
        "Integrated TaxJar API with fallback mechanisms and error handling"
      ],
      category: "Full-Stack Architecture",
      status: "Completed"
    },
    {
      title: "Stock Analysis Tool",
      description: "Developed a comprehensive Python-based stock analysis tool that simplifies technical analysis for traders using RSI indicators and real-time data visualization.",
      technologies: ["Python", "Tkinter", "Matplotlib", "BeautifulSoup", "TradingView TA", "Pandas"],
      highlights: [
        "Built intuitive GUI with Tkinter for beginner-friendly stock analysis",
        "Integrated real-time RSI calculations for S&P 500 companies",
        "Created automated Fortune 500 web scraper using BeautifulSoup",
        "Developed interactive visualizations with color-gradient RSI graphs"
      ],
      category: "Financial Analytics",
      status: "Completed"
    },
    {
      title: "Modern Portfolio Website",
      description: "Built this interactive portfolio website using cutting-edge React technologies and animated components to showcase technical skills.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Bits", "Framer Motion"],
      highlights: [
        "Implemented custom animated components from React Bits library",
        "Created responsive design with modern UI/UX principles",
        "Built with performance optimization and SEO best practices",
        "Features smooth scroll animations and interactive 3D elements"
      ],
      category: "Frontend Development",
      status: "Live"
    },
    {
      title: "Agile Team Collaboration Tools (In Progress)",
      description: "Contributed to internal tools development for improving team collaboration and project management using modern web technologies.",
      technologies: ["React.js", "Node.js", "MongoDB", "APIs", "Kubernetes"],
      highlights: [
        "Developed real-time collaboration features for team workflows",
        "Integrated with existing project management system APIs",
        "Implemented automated workflow notifications and alerts",
        "Ensured scalability with Kubernetes deployment architecture"
      ],
      category: "Team Tools",
      status: "Active Development"
    },
  ];

  // Set client-side flag after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const getCardTransform = (index: number) => {
    // Return default transform during SSR or before client hydration
    if (!isClient) {
      return 'scale(1)';
    }

    if (hoveredCard !== null && hoveredCard !== index) {
      return 'scale(0.95)';
    }
    
    const cardElement = document.getElementById(`card-${index}`);
    if (!cardElement) return 'scale(1)';
    
    const rect = cardElement.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return 'scale(1)';
    
    const globalMouseX = mousePosition.x + containerRect.left;
    const globalMouseY = mousePosition.y + containerRect.top;
    
    const deltaX = (globalMouseX - cardCenterX) / 1500;
    const deltaY = (globalMouseY - cardCenterY) / 1500;
    
    const rotateX = deltaY * -8;
    const rotateY = deltaX * 8;
    const scale = hoveredCard === index ? 1.03 : 1;
    
    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
      case "In Production":
      case "Deployed":
        return "bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-400 border-emerald-500/50 hover:border-emerald-400/70 hover:shadow-emerald-400/20";
      case "Active Development":
        return "bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/50 hover:border-blue-400/70 hover:shadow-blue-400/20";
      case "Completed":
        return "bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-400 border-purple-500/50 hover:border-purple-400/70 hover:shadow-purple-400/20";
      default:
        return "bg-gradient-to-r from-gray-500/20 to-gray-600/20 text-gray-400 border-gray-500/50 hover:border-gray-400/70 hover:shadow-gray-400/20";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Full-Stack Architecture":
        return "bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:shadow-purple-500/25";
      case "Data Analytics":
        return "bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600 hover:from-indigo-500 hover:via-violet-500 hover:to-pink-500 hover:shadow-violet-500/25";
      case "Financial Analytics":
        return "bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 hover:shadow-purple-500/25";
      case "Frontend Development":
        return "bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 hover:shadow-pink-500/25";
      case "Team Tools":
        return "bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 hover:shadow-violet-500/25";
      case "Customer Experience":
        return "bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 hover:shadow-pink-500/25";
      default:
        return "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 hover:shadow-gray-500/25";
    }
  };

  return (
    <section ref={containerRef} id="projects" className="min-h-screen bg-black text-white relative py-20">
      {/* Animated Background Elements - keeping original */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-indigo-500/3 to-violet-500/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header - keeping original */}
      <div className="relative z-10 pt-20 pb-6 text-center px-4">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
          <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent font-medium">
            A showcase of my technical projects and contributions, demonstrating expertise 
            in full-stack development, data analytics, and innovative problem-solving.
          </span>
        </p>
      </div>

      {/* 3D Projects Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              id={`card-${index}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group"
              style={{
                transform: getCardTransform(index),
                transition: 'transform 0.15s ease-out',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-800 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 ${
                hoveredCard === index ? 'bg-gray-900/70' : ''
              }`}>
                
                {/* Project Header - keeping original layout */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <h3
                      className={`text-2xl md:text-3xl font-bold mb-2 bg-clip-text text-transparent ${
                        index % 5 === 0
                          ? 'bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500'
                          : index % 5 === 1
                          ? 'bg-gradient-to-r from-indigo-400 via-violet-500 to-pink-500'
                          : index % 5 === 2
                          ? 'bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500'
                          : index % 5 === 3
                          ? 'bg-gradient-to-r from-violet-400 to-pink-500'
                          : 'bg-gradient-to-r from-pink-400 to-blue-500'
                      }`}
                    >
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg ${getCategoryColor(project.category)}`}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Description - keeping original */}
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies - keeping original colors */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 bg-gray-800 rounded-lg text-sm font-medium border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                          techIndex % 5 === 0
                            ? 'border-blue-500/50 hover:border-blue-400 hover:shadow-blue-400/20'
                            : techIndex % 5 === 1
                            ? 'border-indigo-500/50 hover:border-indigo-400 hover:shadow-indigo-400/20'
                            : techIndex % 5 === 2
                            ? 'border-purple-500/50 hover:border-purple-400 hover:shadow-purple-400/20'
                            : techIndex % 5 === 3
                            ? 'border-violet-500/50 hover:border-violet-400 hover:shadow-violet-400/20'
                            : 'border-pink-500/50 hover:border-pink-400 hover:shadow-pink-400/20'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Highlights - keeping original */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 group">
                        <span
                          className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 transition-all duration-300 group-hover:scale-150 group-hover:shadow-md ${
                            idx % 5 === 0
                              ? 'bg-blue-400 group-hover:shadow-blue-400/50'
                              : idx % 5 === 1
                              ? 'bg-indigo-400 group-hover:shadow-indigo-400/50'
                              : idx % 5 === 2
                              ? 'bg-purple-400 group-hover:shadow-purple-400/50'
                              : idx % 5 === 3
                              ? 'bg-violet-400 group-hover:shadow-violet-400/50'
                              : 'bg-pink-400 group-hover:shadow-pink-400/50'
                          }`}
                        ></span>
                        <span className="group-hover:text-white transition-colors duration-300">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}