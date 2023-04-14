import React from "react";
import m1 from "../assets/mountains1.webp";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.text1}>LOS ANGELES</div>
        <br />
        <div className={styles.text2}>MOUNTAINS</div>
      </div>
      <img className={styles.img} src={m1} alt="hero-section-mounatain" />
    </div>
  );
};

export default Hero;
