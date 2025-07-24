import React, { useState } from 'react';
import { Skeleton } from 'antd';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc = '/api/placeholder/60/60',
  loading = 'lazy',
  onLoad,
  onError
}) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [, setImageError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleLoad = () => {
    setImageLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setImageLoading(false);
    setImageError(true);
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    }
    onError?.();
  };

  return (
    <div className={`relative ${className}`}>
      {imageLoading && (
        <Skeleton.Image 
          active 
          className="absolute inset-0 w-full h-full" 
        />
      )}
      <img
        src={currentSrc}
        alt={alt}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        className={`${className} ${imageLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      />
    </div>
  );
};

export default ResponsiveImage;
