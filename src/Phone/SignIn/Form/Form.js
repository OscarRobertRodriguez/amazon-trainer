import React from 'react'
import styles from './Form.module.css';

function Form() {
  return (
      <form className={styles['signIn__form']}>
        <input placeholder='Username or email address' className={styles['signIn__form-input']} type='email'></input>
        <input placeholder='password' className={styles['signIn__form-input']} type='password'></input>
        <div className={styles['signIn__checkbox-container']}>
          <input type='checkbox'/> <span>Show password</span>
        </div>
        <p className={styles['signIn__form-para']}>forgot password</p>
      </form>
  )
}

export default Form
