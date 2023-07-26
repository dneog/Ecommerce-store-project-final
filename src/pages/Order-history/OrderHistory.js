import React, { useEffect, useState } from 'react'
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import styles from './OrderHistory.module.scss'
import {db} from '../../firebase/Config';
import { selectUserID } from '../../redux/slice/AuthSlice';
import {useNavigate, Link} from 'react-router-dom'
import { STORE_ORDERS } from '../../redux/slice/OderDataSlice';
import PageLoader from '../../components/buttonLoader/PageLoader';


const OrderHistory = () => {
  const[loading, setLoading]= useState(false)
  const ID= useSelector(selectUserID)
  const[userData, setUserData]= useState([])
  const navigate= useNavigate()
  const dispatch= useDispatch()
  const handleClick=(id)=> {
    navigate(`/order-details/${id}`)

  }
  
  const getCollection=()=> {
    setLoading(true)
    try{
      const docRef= collection(db, 'orders');
      const q = query(docRef, orderBy("createdAt", "desc"));
    
     onSnapshot(q, (snapshot) => {
      const allData= snapshot.docs.map((doc)=> ({
        id: doc.id,
        ...doc.data()
      }))
     setUserData(allData)
     setLoading(false)
    
      
    });
    
    
     }catch(error){
      toast.error(error.message)
      setLoading(false)
     }
    
      }

      
    
      useEffect(()=>{
        getCollection()
      }, [])



      const userSepfic= userData.filter((data)=> data.userID=== ID)
      console.log(userSepfic);

      useEffect(()=> {
        dispatch(STORE_ORDERS(userSepfic))
      },[dispatch,userSepfic])

  
  return (
    <div className='container seventy'>

    {loading && <PageLoader />}
    {!loading && userSepfic.length < 1 && <p className={styles.no}>No Order History Found</p>}
    <div className={styles.table}>
   {userSepfic.length > 0 && 
      (
      <table>
       <thead>
        <tr>
          <th>s/n</th>
          <th>Product</th>
         
          <th>Amount</th>
          <th>Ordered At</th>
         <th>Action</th>
        </tr>
       </thead>
       <tbody>
        {userSepfic.map((order, index)=> {
          const {id, date,  cartTotalAmount }= order
          return(
            <tr key={index} >
              <td>{index+1}</td>
              {order.cartItems.map((item)=> (
                <td className='showflex'>{item.name}</td>
              ))}
              
              <td>{cartTotalAmount} &#8377;</td>
              <td>{date} </td>
              <td><button onClick={()=> handleClick(id)}>View Details</button></td>
             
            
            </tr>
          )
        })}
       </tbody>
      </table>
    )}
    
    </div>
    </div>
  )
}

export default OrderHistory