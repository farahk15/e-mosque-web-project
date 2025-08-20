import React from 'react';
import './EhdaaMarquee.css'; // Import the CSS file for styling

const EhdaaMarquee = ({ direction, speed, children }) => {
  const marqueeStyle = {
    animation: `marquee ${speed}s linear infinite ${
      direction === 'left' ? 'normal' : 'reverse'
    }`,
  };

  return (
    <div className="EhdaaMarquee-container">
      <div className="marquee" style={marqueeStyle}>
        {children}
      </div>
    </div>
  );
};

export default EhdaaMarquee;
