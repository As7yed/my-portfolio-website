// SocialSpotlightModal.tsx
import React from 'react';
import SpotlightCard from './SpotlightCard';
import './Spotlight.css'; // Import the CSS file

// Import QR Code SVGs (GitHub removed)
import LinkedInQR from '../assets/qrcodes/LinkedIn.svg';
import InstagramQR from '../assets/qrcodes/Instagram.svg';

interface SocialSpotlightModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const SocialSpotlightModal: React.FC<SocialSpotlightModalProps> = ({
  isOpen,
  onClose,
  children
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(8px)'
      }}
      onClick={onClose}
    >
      <div 
        className="relative max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

interface SocialCardProps {
  platform: 'linkedin' | 'instagram'; // GitHub removed from type
  username: string;
  url: string;
}

const SocialSpotlightCard: React.FC<SocialCardProps> = ({ platform, username, url }) => {
  const platformData = {
    linkedin: {
      name: 'LinkedIn',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'rgba(10, 102, 194, 0.3)',
      gradient: 'from-blue-600 to-blue-800',
      textColor: 'text-blue-200',
      qrCode: LinkedInQR
    },
    instagram: {
      name: 'Instagram',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: 'rgba(225, 48, 108, 0.3)',
      gradient: 'from-pink-500 via-purple-500 to-yellow-500',
      textColor: 'text-pink-200',
      qrCode: InstagramQR
    }
  };

  const data = platformData[platform];

  return (
    <SpotlightCard 
      className="social-spotlight-card" 
      spotlightColor={data.color}
    >
      <div className={`min-h-[300px] bg-gradient-to-br ${data.gradient} bg-opacity-20 rounded-xl p-6 text-center`}>
        {/* Platform Icon and Name */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className={data.textColor}>
            {data.icon}
          </div>
          <h2 className={`text-2xl font-bold ${data.textColor}`}>
            {data.name}
          </h2>
        </div>

        {/* Username */}
        <div className="mb-6">
          <p className={`text-xl font-semibold ${data.textColor}`}>
            @{username}
          </p>
        </div>

        {/* QR Code */}
        <div className="mb-6 flex justify-center">
          <div className="w-32 h-32 bg-white rounded-lg p-2 flex items-center justify-center shadow-lg">
            <img 
              src={data.qrCode.src || data.qrCode.default || data.qrCode}
              className="w-full h-full object-contain" 
              alt={`${data.name} QR Code for @${username}`}
            />
          </div>
        </div>

        {/* Visit Profile Button */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block px-6 py-3 ${data.textColor} bg-transparent bg-opacity-20 backdrop-blur-sm rounded-lg font-semibold hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105`}
        >
          Visit Profile
        </a>

        {/* Direct Link */}
        <div className="mt-4">
          <p className={`${data.textColor} text-xs break-all`}>
            {url}
          </p>
        </div>
      </div>
    </SpotlightCard>
  );
};

export { SocialSpotlightModal, SocialSpotlightCard };