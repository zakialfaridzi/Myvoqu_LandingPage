import React from "react";
import AnimationRevealPage from "ExternalLibs/AnimationRevealPage.js";
import Fitur from "components/Features/Features.js";
import Pendiri from "components/Pendiri/Dosen.js";
import ContactUsForm from "components/ContactUs/ContactUs.js";
import Footer from "components/Footer/Footer.js";
import GetStarted from "components/GetStarted/GetStarted";
import Platforms from "components/Features/Platforms";
import Pricing from "components/Harga/Harga";
import Header from "components/Header/Header";
import DisplayTimer from "components/CountdownTimer/DisplayTimer";
import Registration from "components/Registration/Registration";

export default () => {
  return (
    <AnimationRevealPage disabled>
      <Header />
      <Fitur />
      <Platforms />
      <Pricing />
      <GetStarted />
      <DisplayTimer />
      {/* <ContactUsForm /> */}
      <Registration />
      <Pendiri />
      <Footer />
    </AnimationRevealPage>
  );
};
