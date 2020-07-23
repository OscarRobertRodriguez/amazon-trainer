import React, { useState } from "react";
import styles from "./SignIn.module.css";
import logo from "./amazon.png";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";

import DelayLink from "../../DelayLink/DelayLink";

function SignIn({ onSignIn }) {
  let validEmail = "d";
  let validPassword = "g";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const togglePassword = (e) => {
    setShowPassword(!showPassword);
  };

  const toggleButton = () => {
    username && password ? setShowButton(true) : setShowButton(false);
  };

  const handleInputs = (e) => {
    if (
      validEmail === username.toLowerCase() &&
      validPassword === password.toLowerCase()
    ) {
      setTimeout(() => {
        onSignIn(true);
      }, 3000);

      console.log(onSignIn);
      setShowLoader(true);
    } else {
      e.preventDefault();
    }
  };

  const style = { gridRow: "3/4", alignSelf: "center" };

  return (
    <div className={styles["signIn"]}>
      <img alt="logo" src={logo} className={styles["signIn__logo"]} />

      <Loader
        style={style}
        type="TailSpin"
        color="#FFF"
        height={60}
        width={60}
        timeout={3000}
        visible={showLoader}
      />

      <form className={styles["signIn__form"]}>
        <input
          placeholder="Username or email address"
          onChange={handleUsernameChange}
          onKeyUp={toggleButton}
          value={username}
          className={styles["signIn__form-input"]}
          type="email"
        ></input>

        <input
          placeholder="password"
          className={styles["signIn__form-input"]}
          value={password}
          onChange={handlePasswordChange}
          type={showPassword ? "text" : "password"}
          onKeyUp={toggleButton}
        ></input>

        <div className={styles["signIn__checkbox-container"]}>
          <input type="checkbox" onClick={togglePassword} />{" "}
          <span>Show password</span>
        </div>
        <p className={styles["signIn__form-para"]}>forgot password</p>

        {showButton && (
          <DelayLink delay={3000} to="/ready">
            <button
              className={styles["signIn__form-button"]}
              onClick={(e) => handleInputs(e)}
            >
              sign in
            </button>
          </DelayLink>
        )}
      </form>
    </div>
  );
}

export default SignIn;
