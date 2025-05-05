import React from "react";

const HexagonalAvatar = ({ src, alt, size = "md", className }) => {
  return (
    <div className={`hexagonal-avatar size-${size} ${className || ""}`}>
      <div className="hexagon-glow"></div>
      <div className="hexagon-frame">
        <div className="hexagon-image">
          <img src={src} alt={alt} />
        </div>
      </div>
      <div className="blockchain-pattern">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,0 95,25 95,75 50,100 5,75 5,25" />
          <line x1="50" y1="0" x2="50" y2="100" />
          <line x1="5" y1="25" x2="95" y2="75" />
          <line x1="5" y1="75" x2="95" y2="25" />
          <circle cx="50" cy="50" r="15" />
        </svg>
      </div>
    </div>
  );
};

export default HexagonalAvatar;
