import React from "react";

const SocialLink = ({ icon: Icon, href, label, platform, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`social-link ${platform} ${className || ""}`}
    >
      <Icon className="social-icon" />
    </a>
  );
};

export default SocialLink;
