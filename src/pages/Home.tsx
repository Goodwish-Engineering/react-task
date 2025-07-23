import React from "react";
import Mockup from "../components/HeroMockup";
import HeroSection from "../components/HeroSection";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen max-w-6xl mx-auto flex flex-col">
      <HeroSection />

      <Mockup />
    </div>
  );
};

export default LandingPage;
