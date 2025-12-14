// src/ImageLoader.jsx
import React, { useState } from 'react';

const ImageLoader = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`image-wrapper ${className}`} style={{ position: 'relative', overflow: 'hidden' }}>
      {/* 1. Le fond de chargement (placeholder) */}
      <div 
        className="placeholder"
        style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: '#E0D8D5', /* Couleur beige grisé */
            opacity: isLoaded ? 0 : 1,
            transition: 'opacity 0.5s ease-out',
            zIndex: 1
        }}
      />
      
      {/* 2. L'image réelle */}
      <img
        src={src}
        alt={alt}
        className={className} // On garde tes classes CSS (learn-img, etc.)
        onLoad={() => setIsLoaded(true)}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.7s ease-in-out',
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </div>
  );
};

export default ImageLoader;