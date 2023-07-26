import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import './Auth.scss';
import { FcGoogle } from "react-icons/fc";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase/Config';
import { toast } from 'react-toastify';
import ButtonLoader from '../../components/buttonLoader/ButtonLoader';





const Login = () => {
  const navigate= useNavigate()
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [isLoading, setLoading]= useState(false);

 


  
  const UserLogin=(e)=> {
    e.preventDefault();
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   
    const user = userCredential.user;
    setLoading(false)
    toast.success('Login Successful')
    navigate('/')
  })
  .catch((error) => {
    
    const errorMessage = error.message;
    setLoading(false)
    toast.error(errorMessage)

  });

  }



  return (
    <div className='main'>
   
      <div className='login'>
      <p className='lo'>Login</p>
      <form onSubmit={UserLogin}>
      <input type="email" placeholder='Email'  value={email} onChange={(e)=> setEmail(e.target.value)} required/>
      <input type="Password"  placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} required/>
      
      <button type='submit' className='loginButton'>{isLoading ? <ButtonLoader /> : 'Login'}</button>
      </form>
      
      </div>
      <p className='don'>Don't Have an Account ? 
      <Link to={'/signup'}>&nbsp;<span>SignUp</span></Link></p>
    </div>
  )
}

export default Login