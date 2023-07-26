import React, { useState } from 'react'
import styles from  './Contact.module.scss';
import done from '../../assets/model/done.png'
import UserModel from '../../components/Models/UserModel';
import { Timestamp, addDoc, collection } from "firebase/firestore";
import {db} from '../../firebase/Config';


const initialData= {
    name: '',
    email: '',
    message: ''
}
const Contact = () => {
    const [show, setShow] = useState(false);
    const [userData, setUserData]= useState({...initialData})
    const {name, email, message}= userData

    const dataMessage=(messages)=> {
        setShow(messages)
    }


    const handleChange=(e)=> {
        const {name, value}= e.target
        setUserData({
            ...userData,
            [name]: value
        })
    }
    const saveUserMessage=()=> {
        const date= new Date().toDateString();
        const data ={
            date,
            userData,
            createdAt: Timestamp.now().toDate()
        };
        try{
            addDoc(collection(db, 'messages'), data);
            setShow(!show)
           setUserData({...initialData})
            
        }catch(error){
            console.log(error.message);
        }
    }

    const handleSubmit=(e)=> {
        e.preventDefault()
       saveUserMessage()
      
        
    }


  return (
    <div className='container eighty'>
    {show && <UserModel dataMessage={dataMessage} />}
    <form className={styles.contactUs} onSubmit={handleSubmit} >
    <p className={styles.uss}>Contact Us</p>
    <input type="text" placeholder='Name' name='name' value={name} onChange={(e)=> handleChange(e)} />
    <input type="email" placeholder='Email' name='email' value={email} onChange={(e)=> handleChange(e)} />
    <textarea className={styles.textmui} placeholder='Message' id="" rows="10"  name='message' value={message} onChange={(e)=> handleChange(e)}></textarea>
    <button type='submit' className={styles.bn} >Submit</button>
    </form>
    </div>
  )
}

export default Contact