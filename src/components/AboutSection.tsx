'use client';

import { useState, useEffect } from 'react';
import CountUp from './CountUp';
import RotatingText from './RotatingText';

interface StatItem {
  number: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation on component mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const technicalSkills = ['.NET Framework', 'React.js', 'TypeScript', 'JavaScript', 'C#', 'SQL', 'GraphQL', 'Next.js', 'HTML', 'MongoDB', 'Microsoft Azure', 'APIs', 'Kubernetes', 'Power BI'];
  
  const coreCompetencies = ['Communication', 'Teamwork', 'Team Building', 'Direct Sales', 'Time Management', 'Adaptability', 'Mentorship-Driven Learning', 'Startup Experience'];

  const stats: StatItem[] = [
    {
      number: 3,
      label: "Years Experience",
      suffix: "+"
    },
    {
      number: 4,
      label: "Projects Ongoing",
      suffix: "+"
    },
    {
      number: 6,
      label: "Technologies Mastered"
    },
    {
      number: 2,
      label: "Leadership Roles"
    }
  ];

  const currentFocusTexts = [
    "Building scalable applications with .NET Framework and React.js",
    "Leveraging agile methodologies and collaborative development practices",
    "Code reviews and product testing cycles to ensure high-quality solutions",
    "Fostering strong partnerships and delivering innovative customer-focused solutions",
    "Completing Information Technology degree with excellence"
  ];

  return (
    <>
      <section id="about" className="min-h-screen bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-left mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-left mb-8 rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-left leading-relaxed">
              <strong className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent font-semibold shine" style={{"--gradient-colors": "linear-gradient(to right, rgb(96 165 250), rgb(129 140 248))"} as React.CSSProperties}>Driven Information Technology student</strong> with a passion for <strong className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold shine" style={{"--gradient-colors": "linear-gradient(to right, rgb(196 181 253), rgb(244 114 182))"} as React.CSSProperties}>problem-solving</strong> and a proven track record
              in <strong className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent font-semibold shine" style={{"--gradient-colors": "linear-gradient(to right, rgb(129 140 248), rgb(168 85 247))"} as React.CSSProperties}>customer-focused roles</strong>. Eager to leverage <strong className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent font-semibold shine" style={{"--gradient-colors": "linear-gradient(to right, rgb(167 139 250), rgb(244 114 182))"} as React.CSSProperties}>technical expertise and communication skills</strong> while
              fostering strong partnerships and delivering <strong className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent font-semibold shine" style={{"--gradient-colors": "linear-gradient(to right, rgb(244 114 182), rgb(196 181 253))"} as React.CSSProperties}>innovative solutions</strong>.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Bio */}
            <div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                My Journey
              </h3>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Currently serving as a <strong className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent font-semibold shine" style={{"--gradient-colors": "linear-gradient(to right, rgb(96 165 250), rgb(129 140 248))"} as React.CSSProperties}>Software Engineering Intern at Jatango</strong>,
                  where I contribute to building scalable applications and data-driven solutions. Known for
                  exceptional collaboration, a strong work ethic, and a proactive approach to exceeding expectations.
                </p>
                
                <p className="text-lg leading-relaxed">
                  As an <strong className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold shine" style={{"--gradient-colors": "linear-gradient(to right, rgb(196 181 253), rgb(244 114 182))"} as React.CSSProperties}>Apple Computing Certified Sales Advisor at Best Buy</strong>,
                  I&apos;ve developed outstanding customer service skills and experience collaborating with diverse teams.
                  This role has strengthened my ability to translate complex technical concepts into user-friendly
                  solutions while building strong customer relationships.
                </p>

                <p className="text-lg leading-relaxed">
                  Pursuing a <strong className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent font-semibold shine" style={{"--gradient-colors": "linear-gradient(to right, rgb(167 139 250), rgb(244 114 182))"} as React.CSSProperties}>BA in Information Technology at Strayer University </strong>
                  with previous foundation in <strong className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-semibold shine" style={{"--gradient-colors": "linear-gradient(to right, rgb(129 140 248), rgb(168 85 247))"} as React.CSSProperties}>Computer and Data Science from Cleveland State University</strong>.
                  I&apos;m committed to utilizing agile methodologies, fostering innovation, and contributing to team and organizational success
                  through technical expertise and effective communication.
                </p>
              </div>

              {/* Skills */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  Technical Skills
                </h4>
                <div className="flex flex-wrap gap-3">
                  {technicalSkills.map((skill, index) => (
                    <span 
                      key={skill}
                      className={`px-4 py-2 bg-gray-800 rounded-full text-sm font-medium border ${
                        index % 4 === 0 ? 'border-blue-500/50' :
                        index % 4 === 1 ? 'border-indigo-500/50' :
                        index % 4 === 2 ? 'border-purple-500/50' :
                        'border-pink-500/50'
                      } ${
                        isVisible 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-4'
                      }`}
                      style={{
                        transitionDelay: `${index * 100}ms`,
                        animation: isVisible ? `float ${3 + (index % 3)}s ease-in-out ${index * 200}ms infinite` : 'none'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="mt-6">
                <h4 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Core Competencies
                </h4>
                <div className="flex flex-wrap gap-3">
                  {coreCompetencies.map((skill, index) => (
                    <span 
                      key={skill}
                      className={`px-4 py-2 rounded-full text-sm font-medium border ${
                        index % 3 === 0 ? 'bg-gradient-to-r from-purple-800/50 to-violet-800/50 border-purple-500/50' :
                        index % 3 === 1 ? 'bg-gradient-to-r from-violet-800/50 to-pink-800/50 border-violet-500/50' :
                        'bg-gradient-to-r from-pink-800/50 to-purple-800/50 border-pink-500/50'
                      } ${
                        isVisible 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-4'
                      }`}
                      style={{
                        transitionDelay: `${index * 100}ms`,
                        animation: isVisible ? `float ${3.5 + (index % 3)}s ease-in-out ${index * 200}ms infinite` : 'none'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Stats */}
            <div>
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                By the Numbers
              </h3>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`text-center p-6 bg-gray-800 rounded-lg border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg ${
                      index % 4 === 0 ? 'border-blue-500/30 hover:border-blue-400 hover:shadow-blue-400/20' :
                      index % 4 === 1 ? 'border-indigo-500/30 hover:border-indigo-400 hover:shadow-indigo-400/20' :
                      index % 4 === 2 ? 'border-purple-500/30 hover:border-purple-400 hover:shadow-purple-400/20' :
                      'border-pink-500/30 hover:border-pink-400 hover:shadow-pink-400/20'
                    }`}
                  >
                    <div className={`text-4xl font-bold mb-2 ${
                      index % 4 === 0 ? 'text-blue-400' :
                      index % 4 === 1 ? 'text-indigo-400' :
                      index % 4 === 2 ? 'text-purple-400' :
                      'text-pink-400'
                    }`}>
                      <CountUp
                        end={stat.number}
                        duration={2.5}
                        suffix={stat.suffix}
                        prefix={stat.prefix}
                      />
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Current Focus - Now with Rotating Text */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30 rounded-lg border border-gradient-to-r border-blue-500/30 backdrop-blur-sm">
                <h4 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
                  Current Focus
                </h4>
                <div className="flex items-center min-h-[60px]">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-pink-400 mr-4 flex-shrink-0 animate-pulse"></span>
                  <div className="text-gray-300 text-lg leading-relaxed">
                    <RotatingText
                      texts={currentFocusTexts}
                      mainClassName="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent font-medium"
                      rotationInterval={2000}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes shine {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .shine {
          background: linear-gradient(
            90deg,
            transparent 30%,
            rgba(255, 255, 255, 0.5) 50%,
            transparent 70%
          ), var(--gradient-colors);
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          animation: shine 3s ease-in-out infinite;
          animation-delay: var(--shine-delay, 0s);
        }

        .shine:nth-of-type(1) { --shine-delay: 0s; }
        .shine:nth-of-type(2) { --shine-delay: 0.2s; }
        .shine:nth-of-type(3) { --shine-delay: 0.4s; }
        .shine:nth-of-type(4) { --shine-delay: 0.6s; }
        .shine:nth-of-type(5) { --shine-delay: 0.8s; }
        .shine:nth-of-type(6) { --shine-delay: 1s; }
        .shine:nth-of-type(7) { --shine-delay: 1.2s; }
      `}</style>
    </>
  );
}