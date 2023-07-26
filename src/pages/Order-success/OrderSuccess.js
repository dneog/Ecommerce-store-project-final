import React from 'react'
import { Link } from 'react-router-dom'
import  successfullyDone from '../../assets/model/done.png';
import styles from './OrderSuccess.module.scss'
const OrderSuccess = () => {
  return (
    <section className='container'>
    <div className={styles.fle}>
      <img className={styles.succ} src={successfullyDone} alt="" />

      <h2>Payment Successful</h2>
      <p>Thank you for Your Purchase</p>
      <div className={styles.space}>
      <Link to={'/order-history'}>
        <button>View Order Status</button>
      </Link>
      <Link to={'/product'}>
        <button>Continue Shopping</button>
      </Link>
      </div>
      
      </div>
    </section>
  )
}

export default OrderSuccess