import React from "react";
import "../App.css";

const PersonalDetails = ({ onNext, onSkip }) => {
  const handleContinue = () => {
    onNext();
  };

  const handleSkip = () => {
    onSkip();
  };

  return (
    <div className="signup-form-container">
      <div className="row">
        <div className="mb-3 text-center">
          <div className="text-center mb-3 header-primary-text-24">
            Tell us a bit yourself
          </div>
        </div>
        <div className="mb-2">
          <label>What will you be using Stellar for?:</label>
          <select>
            <option value="val1">Business</option>
            <option value="val2">Personal</option>
            <option value="val3">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label>What kind of company is it?:</label>
          <select>
            <option value="val1">Select a company type</option>
            <option value="val2">Product</option>
            <option value="val3">Services</option>
          </select>
        </div>
        <div className="mb-3">
          <label>What is your role there?:</label>
          <select>
            <option value="val1">Select your role</option>
            <option value="val2">Analyst</option>
            <option value="val3">Developer</option>
            <option value="val3">Testing</option>
          </select>
        </div>
        <div className="mb-3">
          <label>How big is the company?: </label>
          <select>
            <option value="val1">1-10</option>
            <option value="val2">10-20</option>
            <option value="val3">20-30</option>
          </select>
        </div>
        <button type="button" className="w-100" onClick={handleContinue}>
          Continue
        </button>
        <button
          className="btn btn-link text-secondary"
          type="button"
          onClick={handleSkip}
        >
          Skip
        </button>
      </div>
    </div>
  );
};

export default PersonalDetails;
