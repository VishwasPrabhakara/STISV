import React from "react";
import "./ConferenceRegistration.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ConferenceRegistration = () => {
  return (
    <>
      <Navbar />
      <div className="registration-container">
        <header className="registration-header">
          <h1>STIS 2022 - Registration</h1>
          <p>4<sup>th</sup> International Conference on</p>
          <h2>Science and Technology of Ironmaking and Steelmaking (STIS-2022)</h2>
          <p className="conference-date">13-16 December, 2022</p>
          <div className="highlight-banner">
            <marquee>Early Bird Registration Fee (Before 31st Oct, 2022): <strong>INR 14,160/-</strong></marquee>
          </div>
        </header>

        <section className="info-section">
          <div className="registration-box">
            <h3>💳 Payment Details</h3>
            <p>Payment is accepted only through Bank/Electronic/Wire Transfer.</p>
            <ul>
              <li><strong>Account Holder:</strong> The Registrar, IIT Bombay</li>
              <li><strong>Address:</strong> Indian Institute of Technology Bombay, Powai, Mumbai - 400076</li>
              <li><strong>Bank:</strong> State Bank of India</li>
              <li><strong>Account Number:</strong> 00000010725729128</li>
              <li><strong>Account Type:</strong> Current</li>
              <li><strong>SWIFT:</strong> SBININBB519 (For International)</li>
              <li><strong>IFSC Code:</strong> SBIN0001109 (For NEFT - Domestic)</li>
              <li><strong>Branch:</strong> SBI, IIT Powai Branch, Near Hostel-1, Powai, Mumbai</li>
            </ul>
          </div>

          <div className="registration-box">
            <h3>📝 Registration Fee</h3>
            <ul>
              <li>Regular Registration: INR 15,000 + 2,700 (Taxes) = ₹17,700/-</li>
              <li><strong>Early Bird (Before 31st Oct): INR 12,000 + 2,160 = ₹14,160/-</strong></li>
              <li>Student Registration: INR 5,000 + 900 = ₹5,900/-</li>
              <li><em>Includes registration kit, welcome dinner, lunches, and conference dinner.</em></li>
            </ul>
          </div>

          <div className="registration-box">
            <h3>📋 Confirmation of Registration</h3>
            <p>After making the payment, please enter transaction details accurately via the registration form.</p>
            <p>You will receive an email confirmation once the payment is verified. Collect the original receipt at the conference venue.</p>
          </div>

          <div className="registration-box">
            <h3>🔁 Refund Policy</h3>
            <p>Cancellations before 11th November, 2022: <strong>INR 2,950/-</strong> will be deducted and the rest refunded.</p>
            <p>No refunds for requests after 11th November, 2022.</p>
          </div>
        </section>

        <footer className="registration-footer">
          <h4>Contact</h4>
          <p>Prof. Viswanathan N Nurni (Convener)</p>
          <p>Prof. Somnath Basu, Prof. Manish M. Pande, Prof. Deepoo Kumar (Co-Conveners)</p>
          <p>Department of Metallurgical Engineering & Materials Science, IIT Bombay</p>
          <p>Powai, Mumbai, India - 400076</p>
          <p>Email: <a href="mailto:stis.mte@iisc.ac.in">stis.mte@iisc.ac.in</a></p>
        </footer>
      </div>
      <Footer />
    </>
  );
};

export default ConferenceRegistration;
