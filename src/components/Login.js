import React, { useState } from "react";
import "../App.css";

const Login = ({ onNext }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    console.log("Login data:", formData);
    onNext();
  };

  return (
    <div className="signup-form-container">
      <div className="row">
        <div className="col-md-12">
          <div className="text-center mb-3 header-primary-text-24">Welcome back</div>
          <button type="button" className="login-with-google-btn w-100">
            Sign in with Google
          </button>
          <h6 className="divider">or</h6>
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
      <div className="row">
        <div className="col-md-12">
          <button
            type="submit"
            className="btn-primary w-100"
            onClick={handleLogin}
          >
            Log In
          </button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <a href="/" className="text-secondary">
            Don't have an account?
          </a>
          <a href="/" className="text-secondary text-right">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
