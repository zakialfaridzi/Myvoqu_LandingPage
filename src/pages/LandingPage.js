import React from "react";
import AnimationRevealPage from "ExternalLibs/AnimationRevealPage.js";
import Features from "components/Features/Features.js";
import Testimonial from "components/Pendiri/Pendiri.js";
import ContactUsForm from "components/ContactUs/ContactUs.js";
import Footer from "components/Footer/Footer.js";
import GetStarted from "components/GetStarted/GetStarted";
import Header from "components/Header/Header";
import ShowcaseTubes from "components/Features/ShowcaseTubes";
import Platforms from "components/Features/Platforms";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "../styles/card.css";
import Pricing from "components/Harga/Harga";

export default () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.9, 1.2]);
  const rotateX = useTransform(scrollYProgress, [0, 0.1], [8, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.1], [0, 80]);

  return (
    <div>
      <Header />
      <div className="midd" style={{ marginTop: "80px" }}>
        <motion.div
          className="card"
          style={{ translateY, scale, perspective: 100, rotateX }}
        >
          <ShowcaseTubes />
        </motion.div>
      </div>
      <Features />
      <AnimationRevealPage>
        <Testimonial />
      </AnimationRevealPage>
      <Platforms />
      <Pricing />
      <GetStarted />
      <ContactUsForm />
      <Footer />
    </div>
  );
};
