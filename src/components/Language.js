import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Language.css';

const Language = () => {
   return (
    <>
      <Navbar />
      <div className="language-page">
  <h1>Official Language</h1>
  <div className="underline" />
  <div className="language-content">
    <ul>
      <li>
        <p>
          The <span>official language</span> of the STIS-V 2025 conference is <span>English</span>. All conference proceedings, presentations, posters, and communications will be conducted in English.
        </p>
      </li>
      <li>
        <p>
          Participants are expected to submit abstracts and manuscripts in English. This ensures that all attendees, regardless of their native language, can understand, engage, and contribute effectively.
        </p>
      </li>
      <li>
        <p>
          If English is not your first language, we encourage you to have your submissions reviewed by a professional editor or native speaker prior to submission. This enhances the clarity and impact of your work.
        </p>
      </li>
      <li>
        <p>
          Thank you for your understanding and cooperation in upholding the international standards of communication at this global event.
        </p>
      </li>
    </ul>
  </div>
</div>
    <br />
    <br />
    <Footer />
    </>
  );
};

export default Language;
