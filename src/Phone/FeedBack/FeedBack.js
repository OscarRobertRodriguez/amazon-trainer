import React, { Fragment } from "react";
import cx from "classnames";
import styles from "./FeedBack.module.css";

export const FeedBack = () => {
  return (
    <div className={styles.feedBack}>
      <Item value={"signing up"} />
      <Item value={"pick up"} />
      <Item value={"delivery"} />
      <Item value={"maps, routes and addresses"} />
      <Item value={"device and connectivity"} />
      <Item value={"other"} />
    </div>
  );
};

export const Item = ({ value }) => {
  return (
    <label className={styles.item}>
      <input type="radio" name="feed" value={value} />
      <span>{value}</span>
    </label>
  );
};
