import React from "react";
import "../App.css";

const PricingDetails = () => {
  return (
    <div>
      <div className="row">
        <p className="mb-2 text-center text-primary-color">PRICING MADE EASY</p>
        <h1 className="text-center mb-3 header-primary-text-24">
          Simple, transparent pricing
        </h1>
        <p className="mb-4 text-center">No contracts, no surprise fees.</p>
        <div>
          <div className="d-flex card-container">
            <div className="card card-no-border">
              <div className="card-header-title"></div>
              <div className="card-body-content">
                <h5>Beginner</h5>
                <div className="pricing-subtext">
                  Perfect plan for storters.
                </div>
                <div className="pricing-text mt-2">Free</div>
                <div className="pricing-subtext">Lifetime</div>
                <button
                  type="button"
                  className="w-100 mb-3 mt-3 btn btn-outline-secondary rounded-0"
                >
                  Continue
                </button>
                <div>&#10003; Unlimited projects</div>
                <div>&#10003; Share with 5 team members</div>
                <div>&#10003; Sync across devices</div>
              </div>
            </div>
            <div className="card card-border">
              <div className="card-header-title card-header-title-name text-center">
                RECOMMENDED
              </div>
              <div className="card-body-content">
                <h5>Pro</h5>
                <div className="pricing-subtext">
                  For users who want to do more.
                </div>
                <div className="pricing-text mt-2">$99</div>
                <div className="pricing-subtext">/year</div>
                <button
                  type="button"
                  className="w-100 mb-3 mt-3 btn btn-dark rounded-0"
                >
                  Try for free
                </button>
                <div>&#10003; Everything in pro plan</div>
                <div>&#10003; Share with 5 team members</div>
                <div>&#10003; 30 day version history</div>
              </div>
            </div>
            <div className="card card-no-border">
              <div className="card-header-title"></div>
              <div className="card-body-content">
                <h5>Expert</h5>
                <div className="pricing-subtext">Run stellar on your terms</div>
                <div className="pricing-text mt-2">$249</div>
                <div className="pricing-subtext">/year</div>
                <button type="button" className="w-100 mb-3 mt-3 rounded-0">
                  Upgrade
                </button>
                <div>&#10003; Everything in pro plan</div>
                <div>&#10003; Advanced security</div>
                <div>&#10003; Custom contract</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingDetails;
