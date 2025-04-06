import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AbstractSubmissionStatus.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const AbstractSubmissionStatus = () => {
  const [abstract, setAbstract] = useState(null);
  const [status, setStatus] = useState("Pending");
  const [isFinalized, setIsFinalized] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [finalizing, setFinalizing] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [updatedAbstract, setUpdatedAbstract] = useState({});
  const [newFile, setNewFile] = useState(null);
  const [showFinalizePopup, setShowFinalizePopup] = useState(false);
  const [deadlinePassed, setDeadlinePassed] = useState(false);

  const token = sessionStorage.getItem("token");
  const uid = sessionStorage.getItem("uid");

  // Set Deadline - TODAY 3:00 PM
  useEffect(() => {
    const now = new Date();
    const todayDeadline = new Date();
    todayDeadline.setHours(15, 0, 0, 0); // 3:00 PM

    if (now > todayDeadline) {
      setDeadlinePassed(true);
    }
  }, []);

  useEffect(() => {
    if (!uid || !token) {
      window.location.href = "/login-signup";
      return;
    }

    const fetchAbstract = async () => {
      try {
        const response = await axios.get(`https://stisv.onrender.com/get-abstract/${uid}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = response.data.abstract;
        let parsedAuthors = [];
        try {
          parsedAuthors = Array.isArray(data.otherAuthors)
            ? data.otherAuthors
            : JSON.parse(data.otherAuthors || "[]");
        } catch (e) {
          parsedAuthors = [];
        }

        setAbstract(data);
        setUpdatedAbstract({ ...data, otherAuthors: parsedAuthors });
        setStatus(data?.status || "Pending");
        setIsFinalized(data?.isFinalized || false);
      } catch (err) {
        setError("Failed to fetch abstract");
      } finally {
        setLoading(false);
      }
    };

    fetchAbstract();
  }, [uid, token]);

  const handleUpdate = async () => {
    setUpdating(true);
    try {
      const formData = new FormData();
      formData.append("uid", uid);

      let hasUpdates = false;
      const fields = [
        "title", "scope", "presentingType",
        "firstAuthorName", "firstAuthorAffiliation",
        "otherAuthors", "presentingAuthorName",
        "presentingAuthorAffiliation", "mainBody"
      ];

      fields.forEach(field => {
        if (JSON.stringify(updatedAbstract[field]) !== JSON.stringify(abstract[field])) {
          formData.append(field, JSON.stringify(updatedAbstract[field]));
          hasUpdates = true;
        }
      });

      if (newFile) {
        formData.append("abstractFile", newFile);
        hasUpdates = true;
      }

      if (!hasUpdates) {
        setError("No changes detected. Please modify your abstract before attempting to save.");
        setUpdating(false);
        return;
      }

      const response = await axios.put("https://stisv.onrender.com/update-abstract", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setAbstract(response.data.abstract);
      setUpdatedAbstract(response.data.abstract);
      setEditMode(false);
      setNewFile(null);
      setError(null);
    } catch (err) {
      setError("Error updating abstract.");
    } finally {
      setUpdating(false);
    }
  };

  const confirmFinalize = async () => {
    setFinalizing(true);
    try {
      await axios.post("https://stisv.onrender.com/finalize-abstract", { uid }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setIsFinalized(true);
      setEditMode(false);
      setShowFinalizePopup(false);
    } catch (err) {
      setError("Error finalizing submission.");
    } finally {
      setFinalizing(false);
    }
  };

  const handleFileChange = (e) => {
    if (!isFinalized) setNewFile(e.target.files[0]);
  };

  const handlePayment = () => {
    window.location.href = "https://www.onlinesbi.sbi/sbicollect/";
  };

  const goHome = () => {
    window.location.href = "/";
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(abstract.abstractCode);
    alert("Abstract Code copied to clipboard!");
  };

  return (
    <>
      <Navbar />
      <div className="abstract-status-container">
        <h2>Abstract Submission Status</h2>

        {showFinalizePopup && (
          <div className="popup-overlay">
            <div className="popup">
              <h3>Are you sure you want to submit?</h3>
              
              <div className="popup-buttons">
                <button className="confirm-button" onClick={confirmFinalize} disabled={finalizing}>
                  {finalizing ? "Submitting..." : "Yes, Submit"}
                </button>
                <button className="cancel-button" onClick={() => setShowFinalizePopup(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {abstract && (
          <>
            <div className="abstract-row abstract-code-row">
              <strong>Abstract Code:</strong>
              <div className="abstract-code-box">
                <span className="abstract-code">{abstract.abstractCode}</span>
                <FontAwesomeIcon icon={faCopy} className="copy-icon" title="Copy to clipboard" onClick={copyToClipboard} />
              </div>
            </div>

            <div className="abstract-row">
              <strong>Status:</strong>
              <span className={
                status === "Approved" ? "status-accepted" :
                  status === "Rejected" ? "status-rejected" : "status-pending"
              }>
                {status}
              </span>
            </div>

            {deadlinePassed && !isFinalized && (
              <p style={{ color: "red", fontWeight: "bold" }}>
                The deadline to submit or edit your abstract has passed. The last saved version will be considered.
              </p>
            )}

            {!deadlinePassed && !isFinalized && (
              <div className="main-action-row">
                {!editMode && (
                  <button className="edit-button" onClick={() => setEditMode(true)}>
                    Edit / Resubmit Abstract
                  </button>
                )}
                <button className="finalize-button" onClick={() => setShowFinalizePopup(true)}>
                  Submit Abstract
                </button>
                <button className="back-button" onClick={goHome}>Back to Home</button>
              </div>
            )}

            {isFinalized && (
              <div className="main-action-row">
                {status === "Approved" && (
                  <button className="pay-button" onClick={handlePayment}>Pay Now</button>
                )}
                <button className="back-button" onClick={goHome}>Back to Home</button>
              </div>
            )}
          </>
        )}
      </div>
      <br /><br />
      <Footer />
    </>
  );
};

export default AbstractSubmissionStatus;
