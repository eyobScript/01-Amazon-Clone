import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import classes from './Signup.module.css';
import {auth} from '../../Utility/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';



function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function authHandler(e){
    e.preventDefault();
    if(e.target.name == "signin") {
      signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       console.log(userCredential);
     }).catch((error) => {
       console.log(error);
     }).done();
    }else {
       createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      }).catch ((error) => {
        console.log(error);
      });
    }
    
  }

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
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id='email'/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input  value={password} onChange={(e) => setPassword(e.target.value)} type="password" id='password'/>
          </div>
          <button type='submit' name='signin' onClick={auth} className={classes.login_signInButton}>
            Sign In
          </button>
        </form>
        <p>
          By signing in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please See Our Privacy Notice, our Cookies Noting and our Interest-Based Ads Notice.
        </p>
        <button type='submit' name='signup' onClick={auth} className={classes.login_registerButton}> Create Your Amazon Account</button>
      </div>
    </section>
  )
}

export default Auth
