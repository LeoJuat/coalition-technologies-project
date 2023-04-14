import React from "react";
import m1 from "../assets/mountains1.webp";
import styles from "./Bar.module.css";

const Bar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img className={styles.img} src={m1} alt="hero-section-mounatain" />
        <div className={styles.text}>LOS ANGELES MOUNTAINS</div>
      </div>
      <div className={styles.btns}>
        <button className={styles.button}>01. History</button>
        <button className={styles.button}>02. Team</button>
      </div>
    </div>
  );
};

export default Bar;
