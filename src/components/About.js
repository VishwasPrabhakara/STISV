import React from 'react';
import './About.css';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <>
      <Navbar />
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero-static">
        <div className="about-hero-overlay">
          <h1 className="about-title">About STIS-V 2025</h1>
          <p className="about-subtitle">Global Leadership in Sustainable Steelmaking</p>
        </div>
      </section>

      {/* Animated Counters */}
      <section className="about-counters">
        <div className="counter-grid">
          <div className="counter-box">
            <h2>500+</h2>
            <p>Delegates</p>
          </div>
          <div className="counter-box">
            <h2>15+</h2>
            <p>Countries</p>
          </div>
          <div className="counter-box">
            <h2>5</h2>
            <p>International Editions</p>
          </div>
          <div className="counter-box">
            <h2>IISc</h2>
            <p>Host Institution</p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="about-timeline">
        <h2 className="section-heading">Our Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>2009 – ATIS (IISc)</h3>
              <p>Initiated theoretical focus in ironmaking and steelmaking.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>2013 – STIS II (NML / Tata Steel)</h3>
              <p>Broadened into applied technologies and industrial partnerships.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>2017 – STIS III (IIT Kanpur)</h3>
              <p>Focus on sustainability and automation in steelmaking.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>2022 – STIS IV (IIT Bombay)</h3>
              <p>Global scale expansion with hybrid participation.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot highlight" />
            <div className="timeline-content">
              <h3>2025 – STIS V (IISc Bangalore)</h3>
              <p>The future of process metallurgy begins here.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Image Section */}
      <section className="about-parallax">
        <div className="parallax-text">
          <h2>Hosted by the Indian Institute of Science</h2>
          <p>India’s premier research institution, fostering global excellence.</p>
        </div>
      </section>

      {/* Quote Card Section */}
      <section className="about-quote">
        <div className="quote-card">
          <blockquote>
            "STIS is more than a conference – it’s a vision for the future of metallurgy."
          </blockquote>
          <cite>– Prof. A. Ghosh, Founder, STIS Series</cite>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="about-cta">
        <h2>Join the Global Movement</h2>
        <p>Shape the next chapter in sustainable steelmaking at STIS-V 2025.</p>
        <div className="cta-buttons">
          <a href="/register" className="btn btn-primary">Register Now</a>
          <a href="/Abstract-Template.docx" className="btn btn-secondary">Download Abstract Template</a>
        </div>
      </section>
    </div>
    <br />
      <br />
    <Footer />
    </>
  );
};

export default About;