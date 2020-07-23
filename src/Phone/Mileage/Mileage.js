import React from "react";
import styles from "./Mileage.module.css";

const Mileage = () => {
  return (
    <div className={styles.mileage}>
      <div className={styles.text}>Enter your mileage on your odometer</div>
      <input className={styles.input} placeholder="ex. 24,901" />

      <button>Swipe to Finish</button>
    </div>
  );
};

export default Mileage;
