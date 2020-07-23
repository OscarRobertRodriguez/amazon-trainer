import React from "react";
import "../node_modules/normalize.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";
import styles from "./Phone/Phone.module.css";
import Phone from "./Phone/Phone";
import SignIn from "./Phone/SignIn/SignIn";
import Ready from "./ReadyToDeliver/ReadyToDeliver";
import Return from "./Phone/Return/Return";
import PickUp from "./Phone/PickUp/PickUp";
import { Scan } from "./Phone/Scan/Scan";
import ScanToDeliver from "./Phone/ScanToDeliver/ScanToDeliver";
import Nav from "./Phone/Nav/Nav";
import Mileage from "./Phone/Mileage/Mileage";
import { FeedBack } from "./Phone/FeedBack/FeedBack";
import TellMore from "./Phone/TellMore/TellMore";

function App() {
  return (
    <div className="App">
      <Phone>
        <div className={styles.signIn}>
          <SignIn />
        </div>
      </Phone>

      <Phone>
        <div className={styles.loggedIn}>
          <Nav />
          <Ready />
        </div>
      </Phone>

      <Phone>
        <div className={styles.loggedIn}>
          <Nav title={"return"} />
          <Return />
        </div>
      </Phone>

      <Phone>
        <div className={styles.loggedIn}>
          <Nav title={"Pick up"} />
          <PickUp />
        </div>
      </Phone>

      <Phone>
        <div className={styles.loggedIn}>
          <Nav title={"scan packages"} />
          <Scan />
        </div>
      </Phone>

      <Phone>
        <div className={styles.loggedIn}>
          <Nav title={"mileage"} />
          <Mileage />
        </div>
      </Phone>

      <Phone>
        <div className={styles.loggedIn}>
          <Nav title={"leave feedback"} hideIcon={true} />
          <FeedBack />
        </div>
      </Phone>

      <Phone>
        <div className={styles.loggedIn}>
          <Nav title={"leave feedback"} hideIcon={true} />
          <TellMore name={"signing up"} />
        </div>
      </Phone>

      <Phone>
        <div className={styles.loggedIn}>
          <Nav title={"scan packages"} hideIcon={false} />
          <ScanToDeliver />
        </div>
      </Phone>
    </div>
  );
}

export default App;
