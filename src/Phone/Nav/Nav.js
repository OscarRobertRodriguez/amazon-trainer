import React, { useState, useEffect, Suspense } from "react";
import { BsList } from "react-icons/bs";
import cx from "classnames";
import styles from "./Nav.module.css";
import face from "../../darth.png";
import { BsShieldShaded } from "react-icons/bs";
import { MdHelp } from "react-icons/md";

const Nav = ({ title, hideIcon }) => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const menuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className={styles.navBar}>
      <Overlay toggleOverlay={toggleMenu} handlerToggle={menuHandler} />

      <BsList
        color="white"
        size="2.5rem"
        className={styles.navMenuIcon}
        onClick={menuHandler}
      />
      <h1 className={styles.title}>{title}</h1>
      {title && (
        <MdHelp
          className={cx(styles.navHelpIcon, { [styles.hideIcon]: hideIcon })}
          size="1.3rem"
          color="white"
        />
      )}

      <div className={cx(styles.navMenu, { [styles.menuHide]: toggleMenu })}>
        <div className={cx(styles.userInfo)}>
          <img alt="user" className={cx(styles.user)} src={face}></img>
          <h1 className={cx(styles.name)}>Darth Vader</h1>
        </div>

        <ul className={cx(styles.list)}>
          <li className={cx(styles.listItem)}>Home</li>
          <li className={cx(styles.listItem)}>Feedback</li>
          <li className={cx(styles.listItem)}>Settings</li>
        </ul>

        <button className={cx(styles.emergency)}>
          <BsShieldShaded
            color="red"
            size="15px"
            className={styles.iconShield}
          />
          <span className={styles.text}>Emergency Help</span>
        </button>
      </div>
    </div>
  );
};

export default Nav;

const Overlay = ({ toggleOverlay, handlerToggle }) => {
  return (
    <div
      onClick={handlerToggle}
      className={cx(styles.overlay, { [styles.hideOverlay]: toggleOverlay })}
    ></div>
  );
};
