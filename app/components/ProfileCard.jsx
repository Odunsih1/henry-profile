"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import HexagonalAvatar from "./HexagonalAvater";
import { Github, Link, Linkedin, Twitter, X } from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="starfield"></div>

      <div className="profile-card-inner glass-card">
        <div className="profile-card-pattern crypto-pattern"></div>
        <div className="profile-card-content">
          <div className="profile-card-header">
            <div className="profile-card-avatar">
              <HexagonalAvatar
                src="https://pbs.twimg.com/profile_images/1511791970032799746/WdLCpyuj_400x400.jpg"
                alt="Henry Profile"
                size="lg"
              />
            </div>
            <h1 className="profile-card-name ">Henry Odunsi </h1>
            <p className="profile-card-username crypto-code">@N'ry tech</p>
            <div className="profile-card-tagline">
              <p>
                Frontend developer • Next.js • Tailwind CSS • Responsive UI •
                Digital Nomad
              </p>
            </div>
          </div>
          <div className="profile-card-bio">
            <div className="profile-card-bio-pattern crypto-pattern"></div>
            <div className="profile-card-bio-content">
              <h2 className="profile-card-bio-title">
                <span className="profile-card-bio-pulse"></span>
                Bio
              </h2>
              <p className="profile-card-bio-text">
                Tech enthusiast | EEE | Digital | tech4Dev
              </p>
            </div>
          </div>
          <div className="profile-card-social">
            <a className="social-link" href="https://x.com/HENRYODUNSI5">
              {" "}
              <Twitter
                style={{ width: "1.5rem", height: "1.5rem" }}
                className="social-icon"
              />
            </a>
            <a
              className="social-link text-blue-500"
              href="https://www.linkedin.com/in/henry-odunsi-837080258/"
            >
              {" "}
              <Linkedin
                style={{ width: "1.5rem", height: "1.5rem" }}
                className="social-icon"
              />
            </a>
            <a className="social-link" href="https://github.com/Odunsih1">
              {" "}
              <Github
                style={{ width: "1.5rem", height: "1.5rem" }}
                className="social-icon"
              />
            </a>
            <a
              className="social-link text-purple-400"
              href="https://henry-odunsi.onrender.com/"
            >
              {" "}
              <Link
                style={{ width: "1.5rem", height: "1.5rem" }}
                className="social-icon"
              />
            </a>
          </div>
          <div className="profile-card-footer">
            <div className="profile-card-crypto-hint crypto-code">
              <span></span>
              <span className="crypto-orange">
                <a
                  className="typing-ellipsis text-sm text-crypto-blue hover:text-crypto-purple font-semibold transition-colors duration-300 bg-white/5 border border-white/10 rounded-lg p-3 w-full text-center text-glow"
                  href="mailto:henryodunsi05@gmail.com"
                >
                  Building
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
