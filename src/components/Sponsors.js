import React, { useState } from 'react';
import './Sponsors.css';
import Navbar from './Navbar';
import Footer from './Footer';

const SponsorsSection = () => {
  const [resconsError, setResconsError] = useState(false);
  const [mediaError, setMediaError] = useState(false);

  const sponsors = [
    {
      name: 'RESCONS Solutions Pvt. Limited',
      location: 'Bengaluru, India - 560012',
      website: 'https://www.rescons.in',
      imageUrl: 'https://raw.githubusercontent.com/kmranimesh/Web-dev-toolkit/main/rescons_logo%20.jpg',
      errorState: resconsError,
      setError: setResconsError,
      type: 'Sponsor',
    },
    {
      name: 'All Conference Alert',
      website: 'https://allconferencealert.net/',
      imageUrl: '/public/All-conference-alert.png', // You can update this with the logo URL when ready
      errorState: mediaError,
      setError: setMediaError,
      type: 'Media Partner',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="sponsors-wrapper">
        <div className="sponsors-header">
          <h1>Our Esteemed Sponsors & Partners</h1>
          <p>We proudly partner with industry leaders and media outlets to promote global innovation and visibility.</p>
        </div>

        <div className="sponsor-grid">
          {sponsors.map((sponsor, index) => (
            <div className="sponsor-card" key={index}>
              {!sponsor.errorState && sponsor.imageUrl ? (
                <div className="sponsor-logo">
                  <img
                    src={sponsor.imageUrl}
                    alt={`${sponsor.name} Logo`}
                    onError={() => sponsor.setError(true)}
                  />
                </div>
              ) : (
                <div className="fallback-image">
                  <p>{sponsor.name}</p>
                </div>
              )}

              <div className="sponsor-details">
                <h3>{sponsor.name}</h3>
                <p className="sponsor-location">{sponsor.location}</p>
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-button"
                >
                  Visit Website →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default SponsorsSection;
