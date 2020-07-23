import React, { useState, useEffect } from "react";
import Radium from "radium";
import cx from "classnames";
import styles from "./Phone.module.css";
import { createBrowserHistory } from "history";

const Phone = ({ children }) => {
  const history = createBrowserHistory();
  const [signIn, setSignIn] = useState(localStorage.getItem("signIn") || false);

  useEffect(() => {
    if (history.location.pathname === "/") {
      localStorage.setItem("signIn", false);
      setSignIn(false);
    } else if (history.location.pathname !== "/") {
      localStorage.setItem("signIn", true);
      setSignIn(true);
    }
  }, [history.location.pathname]);

  const handleSignIn = (value) => {
    localStorage.setItem("signIn", true);
    setSignIn(value);
  };

  return (
    <div className={styles.phone}>
      <div className={styles.volBtn}></div>
      <div className={styles.powerBtn}></div>
      <div className={styles.camera}>
        <div className={styles.lens}></div>
      </div>

      {children}
    </div>
  );
};

export default Radium(Phone);
