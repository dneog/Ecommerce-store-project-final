import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { selectOrderData } from '../../redux/slice/OderDataSlice';
import {useSelector} from 'react-redux';
import PageLoader from '../../components/buttonLoader/PageLoader';
import {ProductData} from '../../ProductData/ProductData'
import styles from './OrderDetails.module.scss';

const OrderDetails = () => {
  const orders=useSelector(selectOrderData)
  const {id}= useParams()
const orderedProduct= orders.find((item)=> item.id=== id)

  return (
    <section className='container eighty'>
    <h2>Order Details</h2>
    <Link to={'/order-history'}>
      <p className={styles.back}>← Back to Orders</p>
    </Link>
      <div>
      {orderedProduct=== null ? ( <PageLoader /> ): (
        <>
        <div className={styles.sepa}>
        <div>
        <table>
        <tr>
            <td><p>Order ID </p></td>
            <td>{id}</td>
          </tr>

        {orderedProduct.cartItems.map((item)=>{
          const {id, name, price, imageUrl}= item
          return (
            <>
            <tr>
            <td><p>Product</p></td>
            <td>{name}</td>
          </tr>
           
          </>
        
          )
       
         
        })}
         
    
          <tr>
            <td><p>Price</p></td>
            <td>{orderedProduct.cartTotalAmount} &#8377;</td>
          </tr>
          <tr>
            <td><p>Ordered At</p></td>
            <td>{orderedProduct.date}</td>
          </tr>
          <tr>
            
            
          </tr>
          <tr>
            <td><p>Payment Status</p></td>
            <td className={styles.stts}>Completed</td>
          </tr>
         <tr>
         <td><p>Shipping Address</p></td>
          
         </tr>
         

          
        </table>
       <div className={styles.addr}>
       <span>
       <h4>Name : </h4> &nbsp;
        <p> {orderedProduct.userDetails.name}</p>  &nbsp; &nbsp;
        <h4>City : </h4> &nbsp;
        <p> {orderedProduct.userDetails.city}</p>
       </span>
       <span>
       <h4>Pin No : </h4>&nbsp;
        <p> {orderedProduct.userDetails.pinNumber}</p>&nbsp; &nbsp;
       <h4>Phone No : </h4>&nbsp;
        <p> {orderedProduct.userDetails.phoneNumber}</p>
       </span>
       <span>
       <h4>State : </h4>&nbsp;
        <p> {orderedProduct.userDetails.state}</p>&nbsp; &nbsp;
       <h4>Country : </h4>&nbsp;
        <p> {orderedProduct.userDetails.country}</p>
       </span>
       
       </div>
      
       
        
        </div>

        <div>
        {orderedProduct.cartItems.map((item)=>{
          if(item.id=== ProductData.id){

          
          return (
          
          <img className={styles.ims} src={ProductData.image[0]} alt="" />
        
          )
          }
       
         
        })}
         
        </div>
        
        </div>
       
        </>
      )}
        

      </div>
    </section>
  )
  
}

export default OrderDetails