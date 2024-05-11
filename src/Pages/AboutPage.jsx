import React, { useState } from "react";
import AboutUs from "../components/AboutUs";
import LoginForm from "../components/LoginForm";
import SignUp from "../components/SignUp";

function About() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const handleSignInClick = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleSignUpClick = () => {
    setShowSignupForm(!showSignupForm);
  };
  return (
    <>
      {showLoginForm && <LoginForm onClose={handleSignInClick} />}
      {showSignupForm && <SignUp onClose={handleSignUpClick} />}
      <AboutUs />
    </>
  );
}

export default About;
