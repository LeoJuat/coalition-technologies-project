import React from "react";
import m2 from "../assets/mountains2.webp";
import styles from "./Schedule.module.css";

const Schedule = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.text1}>SCHEDULE</div>
        <div className={styles.dates}>
          <div>25 Nov 2016 Lorem ipsum dolor sit amet</div>
          <div>25 Nov 2016 Lorem ipsum dolor sit amet</div>
          <div>25 Nov 2016 Lorem ipsum dolor sit amet</div>
        </div>
      </div>

      <img className={styles.img} src={m2} alt="history-section-mounatain" />
    </div>
  );
};

export default Schedule;
