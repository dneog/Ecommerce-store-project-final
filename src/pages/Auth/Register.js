import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Auth.scss';
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../firebase/Config';

import ButtonLoader from '../../components/buttonLoader/ButtonLoader';

const Register = () => {
  const navigate= useNavigate()
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [confirmPassword, setConfirmPassword]= useState('');
  const [isLoading, setLoading]= useState(false);

  const registerUser=(e)=> {
    e.preventDefault();
    if(password !== confirmPassword){
      toast.error('Password Dont match')
    }
    setLoading(true)


    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   
    const user = userCredential.user;
   setLoading(false);
   
   navigate('/login')
   toast.success('Account Created Successfully, Please Login')
  })
  .catch((error) => {
    toast.error(error.message);
    setLoading(false)
  });

  }
  return (
   
       
   
    <div className='main'>
    
   
      <div className='login'>
      <p className='lo'>SignUp</p>

      <form onSubmit={registerUser}>
      <input type="email" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} required/>
      <input type="Password"  placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} required/>
      <input type="Password"  placeholder='Confirm Password' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} required/>
     
      <button className='loginButton' type='submit'>{isLoading ? <ButtonLoader /> : 'SignUp'}</button>
      </form>
     
      </div>
      <p className='don'>Already Have an Account ? 
      <Link to={'/login'}>&nbsp;<span>Login</span></Link></p>
    </div>
   
  )
}

export default Register