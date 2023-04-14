import React from "react";
import m1 from "../assets/mountains1.webp";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const historyHandler = () => {
    window.scrollTo({ top: 900, behavior: "smooth" });
  };

  const climbHandler = () => {
    window.scrollTo({ top: 1900, behavior: "smooth" });
  };
  return (
    <div className={styles.container}>
      <img className={styles.img} src={m1} alt="hero-section-mounatain" />
      <div className={styles.btns}>
        <button onClick={historyHandler} className={styles.button}>
          01. History
        </button>
        <button onClick={climbHandler} className={styles.button}>
          02. Team
        </button>
      </div>
    </div>
  );
};

export default Navbar;
