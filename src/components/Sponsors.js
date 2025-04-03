import React, { useState } from 'react';
import './Sponsors.css';
import Navbar from './Navbar';
import Footer from './Footer';

const SponsorsSection = () => {
  const [imageError, setImageError] = useState(false);

  const sponsorInfo = {
    name: 'RESCONS Solutions Pvt. Limited',
    location: 'Bengaluru, India - 560012',
    website: 'https://www.rescons.in',
    imageUrl: 'https://raw.githubusercontent.com/kmranimesh/Web-dev-toolkit/main/rescons_logo%20.jpg',
  };

  return (
  <>
    <Navbar />
    <div className="sponsors-wrapper">
      <div className="sponsors-header">
        <h1>Our Esteemed Sponsors</h1>
        <p>We proudly partner with industry leaders driving innovation and excellence.</p>
      </div>

      <div className="sponsor-card">
        {!imageError ? (
          <div className="sponsor-logo">
            <img
              src={sponsorInfo.imageUrl}
              alt="Sponsor Logo"
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className="fallback-image">
            <p>{sponsorInfo.name}</p>
          </div>
        )}

        <div className="sponsor-details">
          <h3>{sponsorInfo.name}</h3>
          <p className="sponsor-location">{sponsorInfo.location}</p>
          <a
            href={sponsorInfo.website}
            target="_blank"
            rel="noopener noreferrer"
            className="visit-button"
          >
            Visit Website →
          </a>
        </div>
      </div>
    </div>
    <br />
    <br />
    <Footer />
  </>
  );
};

export default SponsorsSection;
