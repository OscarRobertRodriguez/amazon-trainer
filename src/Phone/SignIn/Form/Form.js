import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = ({ onSignIn }) => {
  let validEmail = "chewy@gmail.com";
  let validPassword = "darthmaul";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [changeDisplay, setChangeDisplay] = useState(false);

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
    e.preventDefault();
    if (
      validEmail === username.toLowerCase() &&
      validPassword === password.toLowerCase()
    ) {
      setChangeDisplay(true);
      onSignIn(true);
    }
  };

  return (
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
        <button
          className={styles["signIn__form-button"]}
          onClick={(e) => handleInputs(e)}
        >
          sign in
        </button>
      )}
    </form>
  );
};

export default Form;
