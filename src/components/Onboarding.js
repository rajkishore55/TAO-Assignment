import React, { useState } from "react";
import Header from "./Header";
import SignUp from "./SignUp";
import Login from "./Login";
import PersonalDetails from "./PersonalDetails";
import PricingDetails from "./PricingDetails";
import "../App.css";
import ChoosePlan from "./ChoosePlan";

const Onboarding = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleSkip = () => {
    setStep(step + 1);
  };

  return (
    <div>
      <Header />
      {step === 1 && <SignUp onNext={handleNext} />}
      {step === 2 && <Login onNext={handleNext} />}
      {step === 3 && (
        <PersonalDetails onNext={handleNext} onSkip={handleSkip} />
      )}
      {step === 4 && <ChoosePlan onNext={handleNext} />}
      {step === 5 && <PricingDetails />}
    </div>
  );
};

export default Onboarding;
