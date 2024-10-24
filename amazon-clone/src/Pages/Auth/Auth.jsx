import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import classes from './Signup.module.css'
import {auth} from '../../Utility/firebase'



function Auth() {
  return (
    <section className={classes.login}>
      <Link>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" />
      </Link>
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id='email'/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id='password'/>
          </div>
          <button className={classes.login_signInButton}>
            Sign In
          </button>
        </form>
        <p>
          By signing in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please See Our Privacy Notice, our Cookies Noting and our Interest-Based Ads Notice.
        </p>
        <button className={classes.login_registerButton}> Create Your Amazon Account</button>
      </div>
    </section>
  )
}

export default Auth
