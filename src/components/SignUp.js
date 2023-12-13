import React, { useState } from "react";
import "../App.css";

const SignUp = ({ onNext }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGetStarted = () => {
    console.log("Signup data:", formData);
    onNext();
  };

  return (
    <div className="signup-form-container">
      <div className="text-center mb-3 header-primary-text-24">Get started for free</div>
      <button type="button" className="login-with-google-btn w-100">
        Sign in with Google
      </button>
      <h6 className="divider">or</h6>
      <form>
        <div>
          <div className="row">
            <div className="col-md-6">
              <label>First name</label>
              <input
                type="text"
                placeholder="First name"
                className="signup-form-input w-100"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-6">
              <label>Last name</label>
              <input
                type="text"
                placeholder="Last name"
                className="signup-form-input w-100"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <label>Email</label>
            </div>
            <div className="col-md-12">
              <input
                type="email"
                placeholder="Email address"
                className="signup-form-input w-100"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <label>Password</label>
            </div>
            <div className="col-md-12">
              <input
                type="password"
                placeholder="Password"
                className="signup-form-input w-100"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn-primary w-100"
          onClick={handleGetStarted}
        >
          Get started
        </button>
        <p className="text-center mt-3 mb-3 text-dark btn-link fs-16">
          Do you have an account?
        </p>
        <p className="terms text-secondary">
          Sing up for a Stellar account means you agree to the{" "}
          <a href="/">Privacy Policy</a> and <a href="/">Terms of Service</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
