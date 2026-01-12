
import React from 'react';
import './TechPopup.css';

const TechPopup = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="tech-popup-container">
      <div className="tech-popup-content">
        <div className="tech-popup-inner">
            <div className="tech-popup-text">
            <span className="tech-glitch" data-text="COMING SOON">COMING SOON</span>
            </div>
            <div className="tech-scanline"></div>
        </div>
      </div>
    </div>
  );
};

export default TechPopup;
