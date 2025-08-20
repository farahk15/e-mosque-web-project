import React  from 'react';
import './Marquee.css'; // Import the CSS file for styling

const Marquee = ({ direction, speed, children }) => {

  const marqueeStyle = {
    animation: `marquee ${speed}s linear infinite ${
      direction === 'left' ? 'normal' : 'reverse'
    }`,
  };

  return (
    <div className="marquee-container">
      <div className="marquee" style={marqueeStyle}>
        {children}
      </div>
    </div>
  );
};

export default Marquee;
