"use client";

import { useState } from 'react';
import CircularText from '../components/CircularText';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import Dock from '../components/Dock';
import ProfileCard from '../components/ProfileCard';
//import SplashCursor from '../components/SplashCursor'
import { SocialSpotlightModal, SocialSpotlightCard } from '../components/SocialSpotlightModal';

import '../components/Dock.css';
import { 
  FolderIcon, 
  EnvelopeIcon,
  DocumentTextIcon,
  UserIcon 
} from '@heroicons/react/24/outline';
import { PhoneIcon } from 'lucide-react';

export default function Home() {
  const [activeSpotlight, setActiveSpotlight] = useState<'linkedin' | 'instagram' | null>(null);

  const openSpotlight = (platform: 'linkedin' | 'instagram') => {
    setActiveSpotlight(platform);
  };

  const closeSpotlight = () => {
    setActiveSpotlight(null);
  };
  const dockItems = [
    { 
      icon: <UserIcon className="w-7 h-7" />, 
      label: 'About', 
      onClick: () => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    { 
      icon: <FolderIcon className="w-7 h-7" />,
      label: 'View My Work', 
      onClick: () => {
        const projectsSection = document.querySelector('#projects');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    { 
      icon: <DocumentTextIcon className="w-7 h-7" />, 
      label: 'Resume', 
      onClick: () => {
        window.open('/Syed_Resume.pdf', '_blank');
      }
    },
    { 
      icon: <EnvelopeIcon className="w-7 h-7" />, 
      label: 'Get In Touch', 
      onClick: () => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  ];

  // Generate deterministic raindrops to avoid hydration issues
  const raindrops = Array.from({ length: 200 }, (_, i) => {
    // Use index-based calculations for consistent server/client rendering
    const normalizedIndex = i / 50; // 0 to 1
    return {
      id: i,
      left: (i * 7.3) % 100, // Distribute across width
      animationDelay: (i * 0.04) % 2, // 0 to 2 seconds delay
      animationDuration: 1 + (i * 0.02) % 1, // 1 to 2 seconds duration
      opacity: 0.3 + (i * 0.014) % 0.7 // 0.3 to 1.0 opacity
    };
  });

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Rain Effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {raindrops.map((drop) => (
          <div
            key={drop.id}
            className="absolute w-0.5 h-12 bg-gradient-to-b from-blue-400 via-purple-500 to-transparent rounded-full"
            style={{
              left: `${drop.left}%`,
              animationDelay: `${drop.animationDelay}s`,
              animationDuration: `${drop.animationDuration}s`,
              opacity: drop.opacity,
              animation: `rainDrop ${drop.animationDuration}s linear infinite`
            }}
          />
        ))}
      </div>

      {/* CSS Animation for raindrops */}
      <style jsx>{`
        @keyframes rainDrop {
          0% {
            transform: translateY(-100vh);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>

{/* <Splash Cursor/> */}
      {/* Hero Section with ProfileCard, RotatingText, and Dock */}
      <section className="h-screen flex flex-col items-center justify-center relative z-10">
        {/* ProfileCard at the top */}
        <div className="mb-8">
          <ProfileCard   
            name="Abdur-Rahman Syed"   
            title="Front End Dev"   
            handle="as7yed"   
            status="Online"   
            contactText="Contact Me"   
            avatarUrl="/images/ProfileCard.png"   
            miniAvatarUrl="/images/ProfileCard.png"
            showUserInfo={true}   
            enableTilt={true}   
            enableMobileTilt={false}   
            onContactClick={() => {
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }} 
          />
        </div>
        
        {/* Dock */}
        <div className="relative h-25 flex justify-center">
          <Dock 
            items={dockItems}
            panelHeight={55}
            baseItemSize={40}
            magnification={40}
            panelWidth="350px"
            itemGap="3.75rem"
            distance={300}
          />
        </div>
      </section>

      {/* About Section with CircularText floating to the right */}
      <div className="relative z-10">
        <AboutSection />
        {/* CircularText floating to the right of About section */}
        <div className="absolute top-60 right-45 transform -translate-y-1/2 hidden lg:block">
          <CircularText 
            text="*Develop*Refactor*Test*Amaze" 
            onHover="speedUp" 
            spinDuration={15} 
            radius={200} // Customize the circle size
            className="opacity-800"
          />
        </div>
      </div>

      <div className="relative z-10">
        <ProjectsSection />
      </div>
      
      {/* Contact Section Template */}
      <section id="contact" className="min-h-screen bg-gray-900 py-20 relative overflow-hidden z-10">
  {/* Animated Background Elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
</div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Get In Touch
      </h2>
      <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
      <p className="text-xl text-gray-300 max-w-1xl mx-center">
        <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent font-medium">
          Let's connect and discuss opportunities, projects, or just have a great conversation!
        </span>
      </p>
    </div>

    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Contact Information
          </h3>
          
          <div className="flex items-center space-x-4 group p-4 rounded-lg bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/10">
            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-blue-600/20 group-hover:from-blue-500/30 group-hover:to-blue-600/30 transition-all duration-300">
              <EnvelopeIcon className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <p className="text-gray-300 text-sm font-medium">Email</p>
              <a href="mailto:as7yed@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                as7yed@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 group p-4 rounded-lg bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/10">
            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-purple-600/20 group-hover:from-purple-500/30 group-hover:to-purple-600/30 transition-all duration-300">
              <PhoneIcon className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <p className="text-gray-300 text-sm font-medium">Phone</p>
              <a href="tel:+12163069883" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
                +1 (216) 306-9883
              </a>
            </div>
          </div>

          {/* Social Media Links - LinkedIn and Instagram only */}
          <div className="pt-8">
            <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-pink-400 to-violet-500 bg-clip-text text-transparent">
              Follow Me
            </h4>
            <div className="flex space-x-6">
              <button
                onClick={() => openSpotlight('linkedin')}
                className="group p-3 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-[#0A66C2]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#0A66C2]/20 hover:scale-150"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-all duration-300" fill="#0A66C2" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
              
              <button
                onClick={() => openSpotlight('instagram')}
                className="group p-3 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-[#E4405F]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#E4405F]/20 hover:scale-150"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-all duration-300" fill="#E4405F" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gradient-to-br border-purple-500/20 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Send a Message
          </h3>
          <form className="space-y-6">
            <div className="group">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:border-blue-500/50"
                placeholder="Your Name"
              />
            </div>
            
            <div className="group">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-indigo-400 transition-colors">
                Phone
              </label>
              <input
                type="phone"
                id="phone"
                className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:border-indigo-500/50"
                placeholder="(123) 456 7890"
              />
            </div>

            <div className="group">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-indigo-400 transition-colors">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:border-indigo-500/50"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="group">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-purple-400 transition-colors">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:border-purple-500/50 resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>
            
            
            <button
  type="submit"
  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.10] hover:shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900 group"
>
  <span className="flex items-center justify-center space-x-2">
    <span>Send Message</span>
    <svg className="w-5 h-5 animate-bounce group-hover:animate-none transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  </span>
</button>           
          </form>
        </div>
      </div>
    </div>
  </div>
      </section>
      
      {/* Social Media Spotlight Modals - LinkedIn and Instagram only */}
      <SocialSpotlightModal isOpen={activeSpotlight === 'linkedin'} onClose={closeSpotlight}>
        <SocialSpotlightCard 
          platform="linkedin" 
          username="abdur-rahman-syed-713b6b253" 
          url="https://www.linkedin.com/in/abdur-rahman-syed-713b6b253"
        />
      </SocialSpotlightModal>

      <SocialSpotlightModal isOpen={activeSpotlight === 'instagram'} onClose={closeSpotlight}>
        <SocialSpotlightCard 
          platform="instagram" 
          username="as7yed" 
          url="https://instagram.com/as7yed"
        />
      </SocialSpotlightModal>
      
    </main>
  );
}