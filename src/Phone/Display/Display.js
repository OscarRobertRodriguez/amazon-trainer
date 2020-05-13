import React from 'react'
import styles from './Display.module.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './../SignIn/SignIn';





function Display() {
  return (
    <div className={styles['display']}>
      <SignIn/>
    </div>
  )
}

export default Display
