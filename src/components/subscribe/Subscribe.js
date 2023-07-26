import React, { useState } from 'react'
import styles from './Subscribe.module.scss';
import sub from '../../assets/subscribe/sub.jpg'
import { Timestamp, addDoc, collection } from "firebase/firestore";
import {db} from '../../firebase/Config';
import EmailModel from '../Models/EmailModel'
const initial={
  email: ''
}
export const Subscribe = () => {
  const [show, setShow] = useState(false);
  const [subscriber, setSubscriber]= useState({...initial})
  const {email}= subscriber
  const handleChanges= (e)=> {
    const {name, value}= e.target
    setSubscriber({
      ...initial,
      [name]: value
    })
  }

  const dataMessage=(messages)=> {
    setShow(messages)
}
  const saveUserEmail=()=> {
    const date= new Date().toDateString();
    const data ={
        date,
        subscriber,
        createdAt: Timestamp.now().toDate()
    };
    try{
        addDoc(collection(db, 'emails'), data);
        setShow(!show)
       setSubscriber({...initial})
        
    }catch(error){
        console.log(error.message);
    }
}

  const handleSubmit=(e)=> {
    e.preventDefault()
    saveUserEmail()

  }

  return (
    <div className={styles.subscribe}>
     {show && <EmailModel dataMessage={dataMessage} />}
    <img src={sub} alt="" />
    <div className={styles.textData}>
        <h3>Subscribe Our Newslatter</h3>
        <p>Enter Your Email Address and get notification of our latest Products.</p>
        <p>Get Early discount Cupon Code and much more !!</p>
        <form action="" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder='Email' id="" value={email} onChange={(e)=> handleChanges(e)} />
        <button type='submit'>Subscribe</button>

        </form>
        
    </div>
    </div>
  )
}
