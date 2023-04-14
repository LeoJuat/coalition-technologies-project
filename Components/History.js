import React from "react";
import m2 from "../assets/mountains2.webp";
import styles from "./History.module.css";
import Slides from "./Slides";

const History = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.text1}>01.</div>
        <br />
        <div className={styles.text2}>HISTORY</div>
      </div>
      <div className={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>

      <Slides />
      <img className={styles.img} src={m2} alt="history-section-mounatain" />
    </div>
  );
};

export default History;
