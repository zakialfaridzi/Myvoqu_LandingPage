import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "styles/card.css";
import Window from "images/tubes.png";

export default function ShowcaseTubes() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.9, 1.2]);
  const rotateX = useTransform(scrollYProgress, [0, 0.1], [8, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.1], [0, 80]);

  return (
    <div className="Tubes">
      <p className="intr">Introducing</p>
      <h1 className="title">
        MyVoQu <br /> My Voice of Alquran
      </h1>
      <motion.div
        className="card"
        style={{ translateY, scale, perspective: 100, rotateX }}
      >
        <img src={Window} className="card-image" alt="figma window" />
      </motion.div>
    </div>
  );
}
