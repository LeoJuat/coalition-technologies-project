import React from "react";
import m1 from "../assets/mountains1.webp";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img className={styles.img} src={m1} alt="hero-section-mounatain" />
        <div className={styles.text}>LOS ANGELES MOUNTAINS</div>
      </div>
      <p className={styles.text2}>Copyright 2023. All rights reserved</p>
    </div>
  );
};

export default Footer;
