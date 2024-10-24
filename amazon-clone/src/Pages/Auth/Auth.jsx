import React,{useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import classes from './Signup.module.css';
import {auth} from '../../Utility/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { DataProvider } from '../../ContextProvider/ContextProvider';
import { Type } from '../../Utility/action.type';



function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [{user}, dispatch ] = useContext(DataProvider);
  console.log(user)
  async function authHandler(e) {
    e.preventDefault();
    try {
      if (e.target.name === "signin") {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        dispatch({
          type: Type.SET_USER, 
          user: userCredential.user 
        });
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        dispatch({
          type: Type.SET_USER, 
          user: userCredential.user
        });
      }
    } catch (error) {
      setError(error.message);
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
          <button type='submit' name='signin' onClick={authHandler} className={classes.login_signInButton}>
            Sign In
          </button>
        </form>
        <p>
          By signing in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please See Our Privacy Notice, our Cookies Noting and our Interest-Based Ads Notice.
        </p>
        <button type='submit' name='signup' onClick={authHandler} className={classes.login_registerButton}> Create Your Amazon Account</button>
      </div>
    </section>
  )
}

export default Auth
