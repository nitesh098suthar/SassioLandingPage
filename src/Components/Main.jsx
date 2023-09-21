import React from "react";
import Header from "./Layout/Header";
import Hero from "./Hero/Hero";
import HowItWorks from "./HowItWorks/HowItWorks";
import Plan from "./Plan/Plan";
import ApiIntegration from "./ApiIntegration/ApiIntegration";
import EverythingYouNeed from "./EverythingYouNeed/EverythingYouNeed";
import Features from "./Features/Features";
import Review from "./ReviewAndFeedback/Review";
import Pricing from "./Pricing/Pricing";
import AskQuestion from "./HaveAQuestion/AskQuestion";
import Footer from "./Layout/Footer";

const Main = () => {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <HowItWorks />
      <Plan />
      <ApiIntegration />
      <EverythingYouNeed />
      {/* todo  */}
      <Features />
      <Review />
      <Pricing />
      <AskQuestion />
      <Footer />
    </>
  );
};

export default Main;
