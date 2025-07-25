import React, { useState, useEffect } from 'react';
import { Tooltip } from 'antd';
import { ArrowUpOutlined, CheckCircleOutlined } from '@ant-design/icons';

interface FloatingActionButtonProps {
  onCheckAllotment: () => void;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onCheckAllotment }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        if (!isVisible) {
          setIsVisible(true);
          // Add a small delay before showing animation
          setTimeout(() => setHasAnimated(true), 100);
        }
      } else {
        setIsVisible(false);
        setHasAnimated(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  const handleCheckAllotment = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onCheckAllotment();
  };

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    scrollToTop();
  };

  return (
    <div className={`fixed bottom-8 right-8 z-50 flex flex-col gap-4 floating-button-container ${hasAnimated ? 'slide-in-right' : 'opacity-0'}`}>
      {/* Check Allotment Button */}
      <Tooltip title="Check IPO Allotment" placement="left">
        <div className="relative group floating-button-bounce">
          <button
            onClick={handleCheckAllotment}
            className="floating-action-button w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 floating-button-glow text-white"
            type="button"
            aria-label="Check IPO Allotment"
          >
            <CheckCircleOutlined className="text-xl" />
          </button>
          {/* Animated pulse ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-30 pulse-ring pointer-events-none"></div>
          {/* Secondary pulse ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 pulse-ring pointer-events-none" style={{ animationDelay: '1s' }}></div>
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-lg group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"></div>
          {/* Shimmer effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer pointer-events-none"></div>
        </div>
      </Tooltip>

      {/* Scroll to Top Button */}
      <Tooltip title="Back to Top" placement="left">
        <div className="relative group" style={{ animationDelay: '0.2s' }}>
          <button
            onClick={handleScrollToTop}
            className="floating-action-button w-14 h-14 bg-white/95 backdrop-blur-sm !border !border-black transform hover:scale-110 transition-all duration-300 hover:bg-blue-50/80 text-gray-700 hover:text-blue-600"
            type="button"
            aria-label="Scroll to Top"
          >
            <ArrowUpOutlined className="text-lg font-bold" />
          </button>
        </div>
      </Tooltip>
    </div>
  );
};

export default FloatingActionButton;
