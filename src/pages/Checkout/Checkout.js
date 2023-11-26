import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { CLEAR_CART_ITEMS, selectCartAmount, selectCartItems, selectCartQuantity } from '../../redux/slice/ProductCartSlice';
import styles from './Checkout.module.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";
import {db} from '../../firebase/Config';
import { selectUserID } from '../../redux/slice/AuthSlice';

const initialData= {
    name: '',
    phoneNumber: '',
    city: '',
    pinNumber: '',
    state: '',
    country: ''
}

const Checkout = () => {
    const navigate= useNavigate()
    const dispatch= useDispatch()
    const cartItems= useSelector(selectCartItems)
  const cartTotalAmount= useSelector(selectCartAmount)
  const cartTotalQuantity= useSelector(selectCartQuantity)
  const userID= useSelector(selectUserID)
    const [userDetails, setUserDetails] = useState({...initialData})
    
  


    const handleUser=(e)=> {
        const {name, value}= e.target
        setUserDetails({
            ...userDetails,
            [name]: value
        })
    }

    const handleSubmit=(e)=> {
        e.preventDefault()
        saveUserOrder()
    }

    const saveUserOrder=()=> {
        const date= new Date().toDateString();
        const data ={
            cartItems,
            date,
            cartTotalAmount,
            userDetails,
            userID,
            status: 'processing',
            createdAt: Timestamp.now().toDate()
        };
        try{
            addDoc(collection(db, 'orders'), data);
            dispatch(CLEAR_CART_ITEMS())
            navigate('/order-success')
            
        }catch(error){
            toast.error(error.message)
        }
    }
  
  return (
    <div className='container'>
        <div className={styles.check}>
            <div className={styles.ck}>
            <div>
            <p>Total Cart Items : {cartTotalQuantity}</p>
            <p>Total Amout : {cartTotalAmount}&#8377;</p>
            </div>
            <div>
            <p>Payment Method</p>
            <p className={styles.gre}>Cash On Delivery</p>
            </div>
            
           
            </div>
           
           <div className={styles.forms}>
            <h4>Shipping Address</h4>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Name' name='name' value={userDetails.name} onChange={(e)=> handleUser(e)} />

            <input type="text" placeholder='Phone Number' name='phoneNumber' value={userDetails.phoneNumber} onChange={(e)=> handleUser(e)} />

            <input type="text" placeholder='City' name='city' value={userDetails.city} onChange={(e)=> handleUser(e)}  />

            <input type="text" placeholder='Pin Number' name='pinNumber' value={userDetails.pinNumber} onChange={(e)=> handleUser(e)} />

            <input type="text" placeholder='State' name='state' value={userDetails.state} onChange={(e)=> handleUser(e)} />

            <input type="text" placeholder='Country' name='country' value={userDetails.country} onChange={(e)=> handleUser(e)} />

            <button type='submit'>Pay</button>
            </form>
           
           </div>

        </div>
    </div>
  )
}

export default Checkout