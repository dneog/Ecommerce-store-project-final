import React, { useEffect } from 'react'
import styles from './Cart.module.scss';
import grad from '../../assets/loading/grad.gif';
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineDelete } from "react-icons/ai";
import { ADD_TO_CART, CLEAR_CART_ITEMS, DECREASE_CART_ITEMS, REMOVE_ITEMS, TOTAL_CART_QUANTITY, TOTAL_CART_SUBTOTAL, selectCartAmount, selectCartItems, selectCartQuantity } from '../../redux/slice/ProductCartSlice';
import { selectIsLoggedIn } from '../../redux/slice/AuthSlice';
const Cart = () => {
    const cartItems= useSelector(selectCartItems)
    const isLoggedIn= useSelector(selectIsLoggedIn);
    const totalCartItems= useSelector(selectCartQuantity);
    const totalCartAmount= useSelector(selectCartAmount)
    
    const dispatch= useDispatch();
    const navigate= useNavigate();

    const decreaseCartItems= (cart)=> {
        dispatch(DECREASE_CART_ITEMS(cart))
    }

    const increaseCartItems= (cart)=> {
        dispatch(ADD_TO_CART(cart))
    }
    const removeItems= (cart)=> {
        dispatch(REMOVE_ITEMS(cart))
    }
    const checkoutPge= ()=> {
      if(isLoggedIn){
        navigate('/payment')
      }else{
        navigate('/login')
      }
    }
    const clearCart= ()=> {
        dispatch(CLEAR_CART_ITEMS())
    }

    useEffect(()=> {
     dispatch(TOTAL_CART_QUANTITY())
     dispatch(TOTAL_CART_SUBTOTAL())   
    },[dispatch,cartItems])


  return (
    <section className='container eighty'>
    <div className={styles.table}>
      <h2>Cart Items</h2>
      {cartItems.length=== 0 ? (
       <div className={styles.pur}>
       <div className={styles.empty}>
        <img className={styles.grad} src={grad} alt="" />
        <p>Your Cart is Empty</p>
        <Link to={'/product'}>
        <button className={styles.btnns}>← Continue Shopping</button>
        </Link>
        </div>
        <div className={styles.cr}>
       
        </div>
       
        
       </div>
      ): (
        <>
        <table>
          <thead>
            <tr>
              <th>s/n</th>
              <th className={styles.tds}>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cart, index)=> {
              const {id, name,price, image, cartQuantity }= cart

              return (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td className={styles.tds}><img className={styles.imgg} src={image[0]}  alt="" /></td>
                  <td>{name}</td>
                  <td>{price} &#8377;</td>
                  <td>
                    <div className={styles.count}>
                      <button onClick={()=> decreaseCartItems(cart)}>-</button>
                      <p className={styles.quan}>{cartQuantity}</p>
                      <button onClick={()=> increaseCartItems(cart)}>+</button>
                    </div>
                  </td>
                  <td>{price* cartQuantity} &#8377;</td>
                  <td><AiOutlineDelete onClick={()=> removeItems(cart)} size={23} className={styles.ai} /></td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
        <div className={styles.summary}>
        
        <button className={styles.clear} onClick={()=> clearCart()}>Clear Cart</button>
       
         
          <div className={styles.checkout}>
            <div className={styles.back}>
              <Link to={'/product'}>
                ← Continue Shopping
              </Link>
            </div>
            <br />
            <div className={styles.card}>
              <p>Total Cart Items : {totalCartItems} </p>
              <div className={styles.text}>
                <h4>Subtotal</h4>
                <h3>{totalCartAmount} &#8377; </h3>

              </div>
              <div className={styles.text}>
                <h4>Shipping Fee</h4>
                <h3> 0  &#8377; </h3>

              </div>
              <div className={styles.text}>
                <h4>Total</h4>
                <h3>{totalCartAmount} &#8377; </h3>
                
              </div>
              <button onClick={checkoutPge}>Checkout</button>
            </div>
          </div>
        </div>
        </>
      )}
    </div>
 </section>
)
}
  


export default Cart