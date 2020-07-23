import React from "react";
import { Item } from "../FeedBack/FeedBack";
import styles from "./TellMore.module.css";

let text = `If you are currently making deliveries 
and need immediate help, please call support directly. 
We regularly review feedback to identify problems and improve your experience.
We look forward to hearing from you! We hope you'll tell us about:

Things that frustrate you
How we can imporve your experience
What you like about delivering for Amazon.`;

const TellMore = ({ name }) => {
  return (
    <div className={styles.tellMore}>
      <Item value={name} />
      <textarea placeholder={text} />
    </div>
  );
};

export default TellMore;
