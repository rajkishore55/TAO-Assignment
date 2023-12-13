import React from "react";
import logo from "../icon.png"
import "../App.css";

const ChoosePlan = ({ onNext }) => {
  const handleLogin = () => {
    console.log("Login data:");
    onNext();
  };

  return (
    <div className="choose-file-container text-center">
      <img src={logo} alt="logo"/>
      <h2 className="mt-5 mb-3">Choose your plan</h2>
      <span className="choose-file-text">
        Choose from any of our three plans, and you won't be charged until after
        your free month ends.
      </span>
      <button type="button" className="w-100 mt-4" onClick={handleLogin}>
        See the plans
      </button>
    </div>
  );
};

export default ChoosePlan;
