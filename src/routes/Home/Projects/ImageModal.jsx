import React, { useEffect } from 'react';
import './ImageModal.scss';

export default function ImageModal({ 
  isOpen, 
  onClose, 
  images, 
  currentIndex, 
  onImageChange, 
  projectName 
}) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const nextImage = () => {
    onImageChange((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    onImageChange((currentIndex - 1 + images.length) % images.length);
  };

  const currentImage = require(`../../../assets/images/${images[currentIndex]}`);

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          ×
        </button>
        
        <div className="modal-image-container">
          <img
            src={currentImage}
            alt={`${projectName} - Image ${currentIndex + 1}`}
            className="modal-image"
          />
          
          {images.length > 1 && (
            <>
              <button className="modal-carousel-btn prev" onClick={prevImage}>
                &#8249;
              </button>
              <button className="modal-carousel-btn next" onClick={nextImage}>
                &#8250;
              </button>
            </>
          )}
        </div>
        
        {images.length > 1 && (
          <div className="modal-image-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`modal-indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => onImageChange(index)}
              />
            ))}
          </div>
        )}
        
        <div className="modal-image-info">
          <h3>{projectName}</h3>
          <p>Image {currentIndex + 1} of {images.length}</p>
        </div>
      </div>
    </div>
  );
}