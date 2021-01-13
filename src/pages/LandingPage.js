import React from "react";
import AnimationRevealPage from "ExternalLibs/AnimationRevealPage.js";
import Features from "components/Features/Features.js";
import Testimonial from "components/Pendiri/Pendiri.js";
import ContactUsForm from "components/ContactUs/ContactUs.js";
import Footer from "components/Footer/Footer.js";
import GetStarted from "components/GetStarted/GetStarted";
import Platforms from "components/Features/Platforms";
import Pricing from "components/Harga/Harga";
import Header from "components/Header/Header";

export default () => {
  return (
    <AnimationRevealPage disabled>
      <Header />
      <Features />
      <Testimonial />
      <Platforms />
      <Pricing />
      <GetStarted />
      <ContactUsForm />
      <Footer />
    </AnimationRevealPage>
  );
};
