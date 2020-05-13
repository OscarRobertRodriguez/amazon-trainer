import React from 'react'
import styles from './SignIn.module.css';
import logo from './amazon.png';
import Form from './Form/Form';



function SignIn() {

  function showInput () {

  }

  return (
    <div className={styles['signIn']}>
      <img 
      alt='logo' 
      src={logo} 
      className={styles['signIn__logo']} />
      <Form />
    </div>

  )
}

export default SignIn;

      // <button className={styles['signIn__button']} onClick={showInput} >Sign In with amazon</button>
      // <p className={styles['signIn__create-text']}>create an accout</p>