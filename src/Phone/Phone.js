import React, { Component } from 'react';
import Radium from 'radium';
import styles from './Phone.module.css';
import Display from './Display/Display';

export class Phone extends Component {
  render() {
    return (
      <div className={styles['phone']}>
        <div className={styles['phone__volume-btn']}></div>
        <div className={styles['phone__power-btn']}></div>
        <div className={styles['phone__camera']}>
          <div className={styles['phone__camera-lens']}></div>
        </div>
        <Display/>
      </div>
    )
  }
}

export default Radium(Phone);
