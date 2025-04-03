import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AbstractSubmission.css';
import Navbar from './Navbar';
import Footer from './Footer';


const AbstractSubmission = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [hasSubmittedAbstract, setHasSubmittedAbstract] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const uid = sessionStorage.getItem('uid');

    if (token && uid) {
      setIsAuthenticated(true);
      axios
        .get(`https://stisv.onrender.com/get-abstract/${uid}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          const hasAbstract = res?.data?.abstract?.abstractCode;
          setHasSubmittedAbstract(Boolean(hasAbstract));
        })
        .catch((err) => {
          console.error("Error fetching abstract status:", err);
          setHasSubmittedAbstract(false);
        });
    }
  }, []);

  const handleRedirect = () => {
    navigate('/contact');
  };
  const handleSubmitRedirect = () => {
    if (isAuthenticated) {
      navigate('/submit-abstract');
    } else {
      setErrorMessage('Please log in before submitting an abstract.');
      setTimeout(() => navigate('/login-signup'), 2000);
    }
  };

  const handleViewStatus = () => {
    navigate('/abstract-submission-status');
  };

  return (
    <>
      <Navbar />
      <div className='abstract-submission'>
      <div className="marquee-banner" onClick={handleSubmitRedirect}>
          <div className="marquee-text">
            Abstract Submission Open! — Submit before April 30, 2025 — Click here to submit your abstract now!
          </div>
        </div>
      <div className="abstract-submission-wrapper">

        {/* === Header === */}
        <header className="abstract-header">
          <h1>Abstract Submission</h1>
          <p className="abstract-description">
            Submit your abstract aligned with the conference themes.
          </p>
        </header>

        



        {/* === Abstract Action Buttons === */}
        <section className="abstract-actions">
          <h2 className="section-subtitle">Submit or Check Your Abstract</h2>
          {hasSubmittedAbstract ? (
            <>
              <div className="button-group">
                <button className="btn btn-primary" onClick={handleViewStatus}>
                  View Submission Status
                </button>
              </div>
              <p className="success-message">You have already submitted an abstract.</p>  
            </>
          ) : (
            <div className="button-group">
              <button className="btn btn-primary" onClick={handleSubmitRedirect}>
                Submit Abstract Now
              </button>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
          )}
        </section>

        <div className="submission-info-sections">
  {/* === Author Instructions === */}
  <section className="abstract-instructions">
    <h2 className="section-subtitle">Instructions to Authors</h2>
    <ul>
      <li>🔹 Abstracts must be within <strong>250 words</strong>.</li>
      <li>🔹 Provide full contact details and affiliations.</li>
      <li>🔹 All abstracts will undergo peer review.</li>
      <li>🔹 Use only the official template provided.</li>
    </ul>
    <a
      href="/Abstract-Template.docx"
      className="template-download"
      download
    >
      Download Abstract Template
    </a>
  </section>

  {/* === Contact Section === */}
  <section className="abstract-contact">
    <h2 className="section-subtitle">Need Help?</h2>
    <p>
      For submission-related queries, contact us at: <br />
      <a href="mailto:stis.mte@iisc.ac.in" className="email-link">
        stis.mte@iisc.ac.in  <br /> or <br />
      </a>
  
      <button className="btn btn-primary" onClick={handleRedirect}>
                Contact Us
      </button>
    </p>
  </section>
</div>
      </div>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default AbstractSubmission;
