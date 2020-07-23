import React, { useState, Fragment } from "react";
import cx from "classnames";
import styles from "./Scan.module.css";
import { MdWbIncandescent } from "react-icons/md";
import { FaBox } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Scrollbar from "react-scrollbars-custom";
import RoboPic from "./amazonRobot.jpg";

export const Scan = () => {
  let data = [
    {
      location: "stg.033",
      id: "ab-z-5422-422-nvy",
      items: [
        {
          barcode: "tba073590838901",
          type: "envelope",
        },
        {
          barcode: "tba073590838901",
          type: "(M) box",
        },
      ],
    },
    {
      location: "stg.033",
      id: "ab-z-5422-422-nvy",
      items: [
        {
          barcode: "tba073590838901",
          type: "envelope",
        },
      ],
    },
    {
      location: "stg.033",
      id: "ab-z-5422-422-nvy",
      items: [
        {
          barcode: "tba073590838901",
          type: "envelope",
        },
      ],
    },
    {
      location: "stg.033",
      id: "ab-z-5422-422-nvy",
      items: [
        {
          barcode: "tba073590838901",
          type: "(M) box",
        },
      ],
    },
    {
      location: "stg.033",
      id: "ab-z-5422-422-nvy",
      items: [
        {
          barcode: "tba073590838901",
          type: "package",
        },
      ],
    },
  ];

  return (
    <div className={styles.scan}>
      <Scanner />

      <div className={styles.statusBar}>
        <p>0 of 103 packages scanned</p>
        <MdWbIncandescent className={styles.light} size={"1.4rem"} />
      </div>

      <List className={styles.list} list={data} />
    </div>
  );
};

export const Scanner = () => (
  <div
    className={styles.scanner}
    style={{ backgroundImage: `url(${RoboPic})` }}
  >
    <div className={styles.scanIt}>
      <span className={styles.dragTxt}>Drag and Drop to scan</span>
    </div>
  </div>
);

const List = ({ list }) => {
  return (
    <Scrollbar
      removeTracksWhenNotUsed
      style={{ width: "100%", height: "100%" }}
    >
      <ol className={styles.list}>
        {list.map((item) => (
          <Container item={item} />
        ))}
      </ol>
    </Scrollbar>
  );
};

const Container = ({ item }) => {
  let { location, id, items } = item;
  const [toggleContainer, settoggleContainer] = useState(false);

  const handleToggle = () => {
    settoggleContainer(!toggleContainer);
  };

  return (
    <React.Fragment>
      <div onClick={handleToggle} className={styles.container}>
        <FaBox className={styles.box} color={"#ccc"} size={"1.2rem"} />
        <IoIosArrowDown
          className={cx(styles.arrow, { [styles.flip]: toggleContainer })}
          size={"1.4rem"}
          color={"grey"}
        />
        <p className={styles.locationHeader}>location</p>
        <p className={styles.idHeader}>container ID</p>
        <h2 className={styles.location}>{location}</h2>
        <h2 className={styles.id}>{id}</h2>
      </div>
      <div
        className={cx(styles.itemsContainer, {
          [styles.expand]: toggleContainer,
        })}
      >
        {items.map((item) => (
          <Item item={item} />
        ))}
      </div>
    </React.Fragment>
  );
};

const Item = ({ item }) => (
  <div className={styles.package}>
    <FaBox className={styles.packageIcon} color={"#ccc"} size={"1.2rem"} />
    <h4 className={styles.barcodeTitle}>barcode</h4>
    <h3 className={styles.barcodeText}>{item.barcode}</h3>
    <div className={styles.tag}>{item.type}</div>
  </div>
);
