import React from "react";
import "./LandingPage.css";
import { FaPaperPlane, FaBriefcase, FaHandshake, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <div className="landing-container">
      {/* Decorative Icons */}
      <FaPaperPlane className="paper-plane top-right" />
      <FaPaperPlane className="paper-plane bottom-left" />

      {/* Header Logo */}
      {/* <header className="header">
        <div className="logo-tab">
          <span className="logo-purple">LINK</span>
          <span className="logo-blue">ard</span>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="hero">
        <img className="hero-logo"
          src="/iconp.png"
          alt="Linkard Logo"
          
        />
        <h1 className="hero-title">Power Up Your Freelance Career</h1>
        <p className="hero-subtitle">
          Build a stunning portfolio, earn client trust, and collab with other professionals — all in one platform
        </p>
        <p className="hero-small-text">
          Comming Soon we’ve got you covered.
        </p>
        <button className="cta-button">
          Get Started
           <span className="arrow">→</span>
          <Link to="/globe" className="globe-link">
          </Link>
        </button>
        
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <FaBriefcase className="feature-icon pink" />
          <h3>Portfolio Builder</h3>
          <p>Create stunning portfolios that showcase your best work and attract premium clients.</p>
        </div>
        <div className="feature-card">
          <FaHandshake className="feature-icon blue" />
          <h3>Trust Building</h3>
          <p>Build credibility with verified reviews, testimonials, and professional credentials.</p>
        </div>
        <div className="feature-card">
          <FaUsers className="feature-icon green" />
          <h3>Collaboration</h3>
          <p>Connect and collaborate with other professionals to expand your network and opportunities.</p>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="footer">
        <div className="footer-logo">
          <span className="logo-purple">LINK</span>
          <span className="logo-blue">ard</span>
        </div>
        <p>Empowering freelancers to build successful careers</p>
        <div className="footer-links">
          <a href="/">Privacy</a>
          <a href="/">Terms</a>
          <a href="/">Support</a>
        </div>
      </footer> */}
    </div>
  );
};

export default LandingPage;
